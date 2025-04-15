// Tipos para a estrutura de dados
export interface Meta {
  Alcance: string
  ENCAMINHAMENTO: string
  "FAROL NO TRIMESTRE": "Satisfatório" | "Alerta" | "Crítico" | "Concluída" | "Não monitorado"
  LÍDER: string
  Meta: string
  OBSERVAÇÕES: string
  "Pessoa responsável": string
  Semestre: string
}

export interface Resultado {
  Metas: Meta[]
  Resultado: string
}

export interface Iniciativa {
  Alcance: string
  Descrição: string
  ENCAMINHAMENTO: string
  "FAROL NO TRIMESTRE": string
  Iniciativas: string
  LÍDER: string
  "O que é": string
  OBSERVAÇÕES: string
  Porta: "Porta para fora" | "Porta para dentro"
  Resultados: Resultado[]
}

export interface User {
  email: string
  fullName: string
  password: string
}

export interface DatabaseSchema {
  Iniciativas: Iniciativa[]
  dashboardData: {
    Iniciativas: Iniciativa[]
  }
  iniciativas: {
    nome: string
    status: string
  }
  users: Record<string, User>
}

// Classe para gerenciar o acesso ao banco de dados
export class DatabaseService {
  private static instance: DatabaseService
  private data: DatabaseSchema | null = null
  private isLoading = false
  private loadPromise: Promise<void> | null = null

  private constructor() {}

  public static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService()
    }
    return DatabaseService.instance
  }

  public async loadData(): Promise<void> {
    if (this.data) return

    if (this.loadPromise) {
      return this.loadPromise
    }

    this.isLoading = true
    this.loadPromise = new Promise<void>((resolve, reject) => {
      try {
        // Em um ambiente real, isso seria uma chamada de API para buscar os dados
        // Para este exemplo, vamos simular o carregamento dos dados
        setTimeout(() => {
          // Normalmente, faríamos fetch('/api/database') aqui
          // Mas para este exemplo, vamos usar os dados mockados
          import("./mock-data")
            .then(({ mockData }) => {
              this.data = mockData
              this.isLoading = false
              resolve()
            })
            .catch((error) => {
              console.error("Erro ao carregar dados mockados:", error)
              this.isLoading = false
              reject(error)
            })
        }, 500)
      } catch (error) {
        this.isLoading = false
        reject(error)
      }
    })

    return this.loadPromise
  }

  public async getIniciativas(porta?: "Porta para fora" | "Porta para dentro"): Promise<Iniciativa[]> {
    await this.loadData()

    if (!this.data) {
      throw new Error("Dados não carregados")
    }

    if (!porta) {
      return this.data.Iniciativas
    }

    return this.data.Iniciativas.filter((iniciativa) => iniciativa.Porta === porta)
  }

  public async getIniciativaById(id: string): Promise<Iniciativa | undefined> {
    await this.loadData()

    if (!this.data) {
      throw new Error("Dados não carregados")
    }

    return this.data.Iniciativas.find((iniciativa) => iniciativa.Iniciativas === id)
  }

  public async getUsers(): Promise<Record<string, User>> {
    await this.loadData()

    if (!this.data) {
      throw new Error("Dados não carregados")
    }

    return this.data.users
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    await this.loadData()

    if (!this.data) {
      throw new Error("Dados não carregados")
    }

    const users = this.data.users
    const userId = Object.keys(users).find((key) => users[key].email === email)

    return userId ? users[userId] : undefined
  }

  // Método para converter os dados do formato do banco para o formato usado nos componentes
  public convertToComponentFormat(iniciativas: Iniciativa[]) {
    return iniciativas.map((iniciativa) => {
      // Contagem de status para cada iniciativa
      const statusCounts = {
        satisfatorio: 0,
        alerta: 0,
        critico: 0,
        concluido: 0,
        naoMonitorado: 0,
      }

      // Contar os status de todas as metas em todos os resultados
      let metasCount = 0
      iniciativa.Resultados.forEach((resultado) => {
        resultado.Metas.forEach((meta) => {
          metasCount++
          const status = meta["FAROL NO TRIMESTRE"]
          if (status === "Satisfatório") statusCounts.satisfatorio++
          else if (status === "Alerta") statusCounts.alerta++
          else if (status === "Crítico") statusCounts.critico++
          else if (status === "Concluída") statusCounts.concluido++
          else if (status === "Não monitorado") statusCounts.naoMonitorado++
        })
      })

      // Converter resultados para o formato do componente
      const resultados = iniciativa.Resultados.map((resultado) => {
        return {
          id: resultado.Resultado,
          title: resultado.Resultado,
          metas: resultado.Metas.map((meta) => {
            // Converter status para o formato do componente
            let status: "satisfatorio" | "alerta" | "critico" | "concluido" | "naoMonitorado"
            switch (meta["FAROL NO TRIMESTRE"]) {
              case "Satisfatório":
                status = "satisfatorio"
                break
              case "Alerta":
                status = "alerta"
                break
              case "Crítico":
                status = "critico"
                break
              case "Concluída":
                status = "concluido"
                break
              case "Não monitorado":
                status = "naoMonitorado"
                break
              default:
                status = "naoMonitorado"
            }

            return {
              id: meta.Meta,
              status,
              description: meta.Meta,
              responsible: meta.LÍDER || meta["Pessoa responsável"] || "Não definido",
              alcance: meta.Alcance ? Number.parseInt(meta.Alcance) : Math.floor(Math.random() * 100), // Valor aleatório se não houver alcance
              date: meta.Semestre || "2025",
              parecer: meta.OBSERVAÇÕES || "Sem observações disponíveis.",
              encaminhamentos: meta.ENCAMINHAMENTO
                ? [
                    {
                      id: "1",
                      description: meta.ENCAMINHAMENTO,
                      prazo: "30/06/2025",
                      responsavel: meta.LÍDER || "Não definido",
                    },
                  ]
                : [],
            }
          }),
        }
      })

      return {
        id: iniciativa.Iniciativas,
        title: iniciativa.Iniciativas,
        description: iniciativa.Descrição || iniciativa["O que é"] || "",
        responsible: iniciativa.LÍDER || "Não definido",
        metasCount,
        porta: iniciativa.Porta === "Porta para fora" ? "fora" : "dentro",
        statusCounts,
        resultados,
        defaultOpen: false,
      }
    })
  }
}

// Exportar uma instância singleton
export const databaseService = DatabaseService.getInstance()
