import fs from 'fs/promises';
import path from 'path';
import { db } from './local-db';

interface Meta {
  Alcance: string;
  ENCAMINHAMENTO: string;
  "FAROL NO TRIMESTRE": "Satisfatório" | "Alerta" | "Crítico" | "Concluída" | "Não monitorado";
  LÍDER: string;
  Meta: string;
  OBSERVAÇÕES: string;
  "Pessoa responsável": string;
  Semestre: string;
}

interface Resultado {
  Metas: Meta[];
  Resultado: string;
}

interface Iniciativa {
  Alcance: string;
  Descrição: string;
  ENCAMINHAMENTO: string;
  "FAROL NO TRIMESTRE": string;
  Iniciativas: string;
  LÍDER: string;
  "O que é": string;
  OBSERVAÇÕES: string;
  Porta: "Porta para fora" | "Porta para dentro";
  Resultados: Resultado[];
}

export async function importFromJson() {
  try {
    // Lê o arquivo JSON exportado
    const jsonPath = path.join(process.cwd(), 'ncpi-102ca-default-rtdb-export.json');
    const jsonContent = await fs.readFile(jsonPath, 'utf-8');
    const data = JSON.parse(jsonContent);

    // Transforma os dados para o novo formato
    const initiatives = data.Iniciativas.map((iniciativa: Iniciativa) => ({
      id: Math.random().toString(36).substr(2, 9), // Gera um ID único
      title: iniciativa.Iniciativas,
      description: iniciativa.Descrição,
      responsible: iniciativa.LÍDER || "Não definido",
      porta: iniciativa.Porta === "Porta para fora" ? "fora" : "dentro",
      status: "satisfatorio" as const,
      resultados: iniciativa.Resultados.map(resultado => ({
        id: Math.random().toString(36).substr(2, 9),
        title: resultado.Resultado,
        metas: resultado.Metas.map(meta => ({
          id: Math.random().toString(36).substr(2, 9),
          status: transformStatus(meta["FAROL NO TRIMESTRE"]),
          description: meta.Meta,
          responsible: meta.LÍDER || meta["Pessoa responsável"] || "Não definido",
          alcance: 0, // Valor padrão, já que não existe no JSON original
          date: meta.Semestre,
          parecer: meta.OBSERVAÇÕES || "",
          statusHistory: [],
          encaminhamentos: []
        }))
      })),
      metasCount: iniciativa.Resultados.reduce((acc, r) => acc + r.Metas.length, 0),
      statusCounts: calculateStatusCounts(iniciativa),
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    // Salva os dados transformados no banco local
    await db.writeDb({ initiatives, lastUpdate: new Date().toISOString() });
    
    return {
      success: true,
      message: `Importados ${initiatives.length} iniciativas com sucesso!`
    };
  } catch (error) {
    console.error('Erro ao importar dados:', error);
    return {
      success: false,
      message: 'Erro ao importar dados',
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    };
  }
}

function transformStatus(status: string): "satisfatorio" | "alerta" | "critico" | "concluido" | "naoMonitorado" {
  const statusMap: Record<string, "satisfatorio" | "alerta" | "critico" | "concluido" | "naoMonitorado"> = {
    "Satisfatório": "satisfatorio",
    "Alerta": "alerta",
    "Crítico": "critico",
    "Concluída": "concluido",
    "Não monitorado": "naoMonitorado"
  };
  
  return statusMap[status] || "naoMonitorado";
}

function calculateStatusCounts(iniciativa: Iniciativa) {
  const counts = {
    satisfatorio: 0,
    alerta: 0,
    critico: 0,
    concluido: 0,
    naoMonitorado: 0
  };

  iniciativa.Resultados.forEach(resultado => {
    resultado.Metas.forEach(meta => {
      const status = transformStatus(meta["FAROL NO TRIMESTRE"]);
      counts[status]++;
    });
  });

  return counts;
} 