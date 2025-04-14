import { db } from './firebase';
import { collection, addDoc, updateDoc, doc, getDocs, query, where } from 'firebase/firestore';

// Types
export interface Initiative {
  id: string;
  title: string;
  description: string;
  responsible: string;
  porta: 'fora' | 'dentro';
  status: 'satisfatorio' | 'alerta' | 'critico' | 'concluido' | 'naoMonitorado';
  resultados: {
    id: string;
    title: string;
    description: string;
    metas: {
      id: string;
      status: 'satisfatorio' | 'alerta' | 'critico' | 'concluido' | 'naoMonitorado';
      description: string;
      responsavel: string;
      alcance: number;
      data: string;
      parecer: string;
      statusHistory: {
        data: string;
        status: string;
        parecer: string;
      }[];
      encaminhamentos: {
        id: string;
        description: string;
        prazo: string;
        responsavel: string;
      }[];
    }[];
  }[];
  metas: {
    id: string;
    title: string;
    description: string;
    status: 'satisfatorio' | 'alerta' | 'critico' | 'concluido' | 'naoMonitorado';
    progresso: number;
    dataInicio: Date;
    dataFim: Date;
    responsavel: string;
    indicadores: {
      id: string;
      nome: string;
      valorAtual: number;
      valorMeta: number;
      unidade: string;
    }[];
  }[];
  metasCount: number;
  statusCounts: {
    satisfatorio: number;
    alerta: number;
    critico: number;
    concluido: number;
    naoMonitorado: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Result {
  id?: string;
  title: string;
  defaultOpen: boolean;
  metas: Goal[];
}

export interface Goal {
  id?: string;
  status: "satisfatorio" | "alerta" | "critico" | "concluido" | "naoMonitorado";
  description: string;
  responsible: string;
  alcance: number;
  date: string;
  parecer: string;
  statusHistory: StatusHistory[];
  encaminhamentos: Encaminhamento[];
}

export interface StatusHistory {
  date: string;
  status: string;
  parecer: string;
}

export interface Encaminhamento {
  id: string;
  description: string;
  prazo: string;
  responsavel: string;
}

// Firebase Operations
export const createInitiative = async (initiative: Omit<Initiative, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, "initiatives"), {
      ...initiative,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating initiative:", error);
    throw error;
  }
};

export const updateInitiative = async (id: string, initiative: Partial<Initiative>) => {
  try {
    const docRef = doc(db, "initiatives", id);
    await updateDoc(docRef, initiative);
  } catch (error) {
    console.error("Error updating initiative:", error);
    throw error;
  }
};

export const getInitiatives = async (porta: "fora" | "dentro") => {
  try {
    const querySnapshot = await getDocs(collection(db, "initiatives"));
    const initiatives: Initiative[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.porta === porta) {
        initiatives.push({
          id: doc.id,
          ...data
        } as Initiative);
      }
    });
    
    return initiatives;
  } catch (error) {
    console.error("Error getting initiatives:", error);
    throw error;
  }
};

export const createResult = async (initiativeId: string, result: Result) => {
  try {
    const docRef = await addDoc(collection(db, `initiatives/${initiativeId}/results`), result);
    return docRef.id;
  } catch (error) {
    console.error("Error creating result:", error);
    throw error;
  }
};

export const createGoal = async (initiativeId: string, resultId: string, goal: Goal) => {
  try {
    const docRef = await addDoc(collection(db, `initiatives/${initiativeId}/results/${resultId}/goals`), goal);
    return docRef.id;
  } catch (error) {
    console.error("Error creating goal:", error);
    throw error;
  }
};

export async function testWriteToFirestore() {
  try {
    const docRef = await addDoc(collection(db, 'initiatives'), {
      title: 'Teste de Iniciativa',
      description: 'Esta é uma iniciativa de teste',
      porta: 'fora',
      status: 'satisfatorio',
      resultados: ['Resultado 1', 'Resultado 2'],
      metasCount: 2,
      statusCounts: {
        satisfatorio: 1,
        alerta: 0,
        critico: 0,
        concluido: 0,
        naoMonitorado: 0
      },
      createdAt: new Date()
    });
    
    console.log('Documento escrito com ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao escrever no Firestore: ', error);
    throw error;
  }
}

export async function updateInitiativesWithMissingFields() {
  try {
    const querySnapshot = await getDocs(collection(db, 'initiatives'));
    const updates = querySnapshot.docs.map(async (doc) => {
      const data = doc.data();
      
      // Verifica se os campos estão faltando
      if (!data.metas) {
        await updateDoc(doc.ref, {
          metas: [],
          updatedAt: new Date()
        });
      }
      
      if (!data.statusCounts) {
        await updateDoc(doc.ref, {
          statusCounts: {
            satisfatorio: 0,
            alerta: 0,
            critico: 0,
            concluido: 0,
            naoMonitorado: 0
          },
          updatedAt: new Date()
        });
      }
      
      if (!data.metasCount) {
        await updateDoc(doc.ref, {
          metasCount: 0,
          updatedAt: new Date()
        });
      }
      
      if (!data.createdAt) {
        await updateDoc(doc.ref, {
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
      
      if (!data.updatedAt) {
        await updateDoc(doc.ref, {
          updatedAt: new Date()
        });
      }
    });
    
    await Promise.all(updates);
    console.log('Iniciativas atualizadas com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar iniciativas:', error);
    throw error;
  }
} 