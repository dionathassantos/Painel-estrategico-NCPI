"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { InitiativeCard } from "@/components/initiative-card"
import { NewInitiativeModal } from "@/components/new-initiative-modal"
import { Plus, Star, Flag, Target } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { databaseService } from "@/lib/database"
import { StatusIcon } from "@/components/status-icons"
import Image from "next/image"

export default function DashboardPage() {
  const [isNewInitiativeModalOpen, setIsNewInitiativeModalOpen] = useState(false)
  const searchParams = useSearchParams()
  const portaParam = searchParams.get("porta") || "fora"
  const [activePorta, setActivePorta] = useState<"fora" | "dentro">(portaParam as "fora" | "dentro")
  const [initiatives, setInitiatives] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Carregar iniciativas do banco de dados
  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        setLoading(true)

        // Opção 1: Usar a API
        const response = await fetch(`/api/iniciativas?porta=Porta para ${activePorta}`)
        if (!response.ok) {
          throw new Error("Falha ao buscar iniciativas")
        }
        const data = await response.json()
        setInitiatives(data)

        // Opção 2: Usar o serviço diretamente (para desenvolvimento)
        // const iniciativas = await databaseService.getIniciativas(`Porta para ${activePorta}`);
        // const formattedIniciativas = databaseService.convertToComponentFormat(iniciativas);
        // setInitiatives(formattedIniciativas);
      } catch (error) {
        console.error("Erro ao buscar iniciativas:", error)
        // Usar dados mockados em caso de erro
        const iniciativas = await databaseService.getIniciativas(`Porta para ${activePorta}`)
        const formattedIniciativas = databaseService.convertToComponentFormat(iniciativas)
        setInitiatives(formattedIniciativas)
      } finally {
        setLoading(false)
      }
    }

    fetchInitiatives()
  }, [activePorta])

  // Atualizar porta ativa quando o parâmetro de URL mudar
  useEffect(() => {
    setActivePorta(portaParam as "fora" | "dentro")
  }, [portaParam])

  // Filtrar iniciativas com base na porta ativa
  const filteredInitiatives = initiatives

  // Calcular métricas totais
  const totalMetrics = {
    iniciativas: filteredInitiatives.length,
    resultados: filteredInitiatives.reduce((acc, initiative) => acc + (initiative.resultados?.length || 0), 0),
    metas: filteredInitiatives.reduce((acc, initiative) => acc + initiative.metasCount, 0),
    status: {
      satisfatorio: filteredInitiatives.reduce((acc, initiative) => acc + initiative.statusCounts.satisfatorio, 0),
      alerta: filteredInitiatives.reduce((acc, initiative) => acc + initiative.statusCounts.alerta, 0),
      critico: filteredInitiatives.reduce((acc, initiative) => acc + initiative.statusCounts.critico, 0),
      concluido: filteredInitiatives.reduce((acc, initiative) => acc + initiative.statusCounts.concluido, 0),
      naoMonitorado: filteredInitiatives.reduce((acc, initiative) => acc + initiative.statusCounts.naoMonitorado, 0),
    },
  }

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 h-full">
        {/* Header com logo e título */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center">
            
            <div className="border-l-4 border-[#A6CE39] pl-4">
              <h1 className="text-[#04695E] text-2xl font-bold">PAINEL ESTRATÉGICO</h1>
              <h2 className="text-[#A6CE39] text-base font-medium">
                PORTA PARA {activePorta.toUpperCase()} | 2025 - 2027
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/brazil-outline-map.png"
              alt="Mapa do Brasil"
              width={120}
              height={80}
              className="opacity-50"
            />
          </div>
        </div>

        {/* Grid principal com métricas e status */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Métricas à esquerda */}
          <div className="col-span-3">
            <div className="relative pl-6">
              {/* Linha vertical conectora */}
              <div className="absolute left-0 top-8 bottom-0 w-0.5 bg-[#A6CE39] h-[calc(100%-30px)]"></div>

              {/* Iniciativas Card */}
              <div className="flex items-center bg-white border border-gray-200 h-[50px] rounded-md shadow-sm mb-4 relative">
                {/* Linha horizontal conectora */}
                <div className="absolute -left-6 top-1/2 w-6 h-0.5 bg-[#A6CE39]"></div>
                <div className="ml-4 text-[#A6CE39]">
                  <Star className="h-5 w-5 fill-[#A6CE39] text-[#A6CE39]" />
                </div>
                <span className="ml-3 text-[#04695E] text-sm font-medium">Iniciativas</span>
                <span className="ml-auto mr-6 text-[#04695E] text-2xl font-bold">{totalMetrics.iniciativas}</span>
              </div>

              {/* Resultados Card */}
              <div className="flex items-center bg-white border border-gray-200 h-[50px] rounded-md shadow-sm mb-4 ml-6 relative">
                {/* Linha horizontal conectora */}
                <div className="absolute -left-6 top-1/2 w-6 h-0.5 bg-[#A6CE39]"></div>
                <div className="ml-4 text-[#A6CE39]">
                  <Flag className="h-5 w-5 fill-[#A6CE39] text-[#A6CE39]" />
                </div>
                <span className="ml-3 text-[#04695E] text-sm font-medium">Resultados</span>
                <span className="ml-auto mr-6 text-[#04695E] text-2xl font-bold">{totalMetrics.resultados}</span>
              </div>

              {/* Metas Card */}
              <div className="flex items-center bg-[#04695E] border border-[#04695E] h-[50px] rounded-md shadow-sm ml-12 relative">
                {/* Linha horizontal conectora */}
                <div className="absolute -left-6 top-1/2 w-6 h-0.5 bg-[#A6CE39]"></div>
                <div className="ml-4 text-white">
                  <Target className="h-5 w-5 text-[#A6CE39]" />
                </div>
                <span className="ml-3 text-white text-sm font-medium">Metas</span>
                <span className="ml-auto mr-6 text-white text-2xl font-bold">{totalMetrics.metas}</span>
              </div>
            </div>
          </div>

          {/* Status das Metas à direita */}
          <div className="col-span-9">
            <div className="bg-[#04695E] rounded-tr-[50px] p-5 text-white h-full">
              <div className="flex items-center mb-6">
                <h3 className="text-sm font-bold uppercase border-l-4 border-[#A6CE39] pl-3">STATUS DAS METAS</h3>
                <div className="w-0.5 h-4 bg-[#A6CE39] mx-4"></div>
              </div>

              <div className="flex justify-between items-center px-4">
                {/* Satisfatório */}
                <div className="grid grid-cols-[auto,1fr] gap-x-3 items-center">
                  <div className="row-span-2 flex items-center">
                    <StatusIcon status="satisfatorio" size="lg" />
                  </div>
                  <span className="text-3xl font-bold">{totalMetrics.status.satisfatorio}</span>
                  <p className="text-[10px] uppercase font-bold">SATISFATÓRIO</p>
                </div>

                {/* Alerta */}
                <div className="grid grid-cols-[auto,1fr] gap-x-3 items-center">
                  <div className="row-span-2 flex items-center">
                    <StatusIcon status="alerta" size="lg" />
                  </div>
                  <span className="text-3xl font-bold">{totalMetrics.status.alerta}</span>
                  <p className="text-[10px] uppercase font-bold">ALERTA</p>
                </div>

                {/* Crítico */}
                <div className="grid grid-cols-[auto,1fr] gap-x-3 items-center">
                  <div className="row-span-2 flex items-center">
                    <StatusIcon status="critico" size="lg" />
                  </div>
                  <span className="text-3xl font-bold">{totalMetrics.status.critico}</span>
                  <p className="text-[10px] uppercase font-bold">CRÍTICO</p>
                </div>

                {/* Concluídos */}
                <div className="grid grid-cols-[auto,1fr] gap-x-3 items-center">
                  <div className="row-span-2 flex items-center">
                    <StatusIcon status="concluido" size="lg" />
                  </div>
                  <span className="text-3xl font-bold">{totalMetrics.status.concluido}</span>
                  <p className="text-[10px] uppercase font-bold">CONCLUÍDOS</p>
                </div>

                {/* Não Monitorados */}
                <div className="grid grid-cols-[auto,1fr] gap-x-3 items-center">
                  <div className="row-span-2 flex items-center">
                    <StatusIcon status="naoMonitorado" size="lg" />
                  </div>
                  <span className="text-3xl font-bold">{totalMetrics.status.naoMonitorado}</span>
                  <p className="text-[10px] uppercase font-bold">NÃO MONITORADOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Iniciativas */}
        <div className="bg-[#F4F4EF]/50 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#04695E] text-xl font-semibold">Iniciativas</h2>
            <button
              onClick={() => setIsNewInitiativeModalOpen(true)}
              className="bg-[#0DBAAD] hover:bg-[#04695E] transition-colors text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-sm"
            >
              Nova Iniciativa
              <Plus className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Lista de Iniciativas */}
          <div className="space-y-4">
            {loading ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <p className="text-gray-500">Carregando iniciativas...</p>
              </div>
            ) : filteredInitiatives.length > 0 ? (
              filteredInitiatives.map((initiative) => <InitiativeCard key={initiative.id} {...initiative} />)
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <p className="text-gray-500">Nenhuma iniciativa encontrada para esta porta.</p>
              </div>
            )}
          </div>
        </div>

        {/* Modal de Nova Iniciativa */}
        <NewInitiativeModal
          isOpen={isNewInitiativeModalOpen}
          onClose={() => setIsNewInitiativeModalOpen(false)}
          porta={activePorta}
        />
      </div>
    </DashboardLayout>
  )
}
