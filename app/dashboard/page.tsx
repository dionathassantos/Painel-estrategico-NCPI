"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { InitiativeCard } from "@/components/initiative-card"
import { NewInitiativeModal } from "@/components/new-initiative_modal"
import { Plus, Star, Flag, Target, ThumbsUp, SmileIcon, Frown, AlertCircle } from "lucide-react"
import Image from "next/image"
import { getInitiatives, createInitiative, type Initiative } from "@/lib/firebase-operations"

interface StatusCounts {
  satisfatorio: number;
  alerta: number;
  critico: number;
  concluido: number;
  naoMonitorado: number;
}

interface MetaProps {
  id: string;
  status: "satisfatorio" | "alerta" | "critico" | "concluido" | "naoMonitorado";
  description: string;
  responsible: string;
  alcance: number;
  date: string;
}

interface ResultadoProps {
  id: string;
  title: string;
  metas: MetaProps[];
}

interface InitiativeCardData {
  id: string;
  title: string;
  description: string;
  responsible: string;
  porta: "fora" | "dentro";
  status: "satisfatorio" | "alerta" | "critico" | "concluido" | "naoMonitorado";
  resultados: ResultadoProps[];
  metasCount: number;
  statusCounts: StatusCounts;
}

// Função para transformar Initiative em InitiativeCardData
const transformInitiative = (initiative: Initiative): InitiativeCardData => {
  return {
    id: initiative.id,
    title: initiative.title,
    description: initiative.description,
    responsible: initiative.responsible,
    porta: initiative.porta,
    status: initiative.status,
    resultados: initiative.resultados.map(resultado => ({
      id: resultado.id,
      title: resultado.title,
      metas: resultado.metas.map(meta => ({
        id: meta.id,
        status: meta.status,
        description: meta.description,
        responsible: meta.responsavel,
        alcance: meta.alcance,
        date: meta.data
      }))
    })),
    metasCount: initiative.metasCount,
    statusCounts: initiative.statusCounts
  };
};

export default function DashboardPage() {
  const [isNewInitiativeModalOpen, setIsNewInitiativeModalOpen] = useState(false)
  const [activePorta, setActivePorta] = useState<"fora" | "dentro">("fora")
  const [initiatives, setInitiatives] = useState<InitiativeCardData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadInitiatives = async () => {
      try {
        const data = await getInitiatives(activePorta)
        setInitiatives(data.map(transformInitiative))
      } catch (error) {
        console.error("Error loading initiatives:", error)
      } finally {
        setLoading(false)
      }
    }

    loadInitiatives()
  }, [activePorta])

  const handleCreateInitiative = async (newInitiative: Omit<Initiative, "id">) => {
    try {
      const id = await createInitiative(newInitiative)
      const initiativeWithId = { ...newInitiative, id } as Initiative
      setInitiatives([...initiatives, transformInitiative(initiativeWithId)])
      setIsNewInitiativeModalOpen(false)
    } catch (error) {
      console.error("Error creating initiative:", error)
    }
  }

  // Calculate total metrics
  const totalMetrics = {
    iniciativas: initiatives.length,
    resultados: initiatives.reduce((acc: number, initiative: InitiativeCardData) => acc + (initiative.resultados?.length || 0), 0),
    metas: initiatives.reduce((acc: number, initiative: InitiativeCardData) => acc + initiative.metasCount, 0),
    status: {
      satisfatorio: initiatives.reduce((acc: number, initiative: InitiativeCardData) => acc + initiative.statusCounts.satisfatorio, 0),
      alerta: initiatives.reduce((acc: number, initiative: InitiativeCardData) => acc + initiative.statusCounts.alerta, 0),
      critico: initiatives.reduce((acc: number, initiative: InitiativeCardData) => acc + initiative.statusCounts.critico, 0),
      concluido: initiatives.reduce((acc: number, initiative: InitiativeCardData) => acc + initiative.statusCounts.concluido, 0),
      naoMonitorado: initiatives.reduce((acc: number, initiative: InitiativeCardData) => acc + initiative.statusCounts.naoMonitorado, 0),
    },
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#04695E]"></div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="pl-0 pr-6 py-6 lg:pr-8 lg:py-8">
        {/* Main grid layout */}
        <div className="grid grid-cols-1 grid-rows-[auto_auto_1fr] gap-6 relative">
          {/* Header with Brazil map - Row 1 */}
          <div className="flex flex-col md:flex-row md:items-center justify-between relative">
            <div>
              <div className="flex items-center">
                <div className="border-l-4 border-[#A6CE39] pr-3"></div>
                <h1 className="text-[#04695E] text-2xl lg:text-3xl font-bold">PAINEL ESTRATÉGICO</h1>
              </div>
              <h2 className="text-[#A6CE39] text-base lg:text-lg font-medium mt-1 ml-6">
                PORTA PARA {activePorta.toUpperCase()} | 2025 - 2027
              </h2>
            </div>

            {/* Brazil map outline */}
            <div className="absolute right-0 top-0 opacity-30">
              <Image src="/brazil-outline-map.png" alt="Brazil Map Outline" width={150} height={100} />
            </div>
          </div>

          {/* Metrics and Status Section - Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left side - Metrics Cards with cascading effect */}
            <div className="lg:col-span-4 flex flex-col items-end">
              {/* Container for the cascading cards */}
              <div className="flex flex-col gap-2 relative">
                {/* Iniciativas Card */}
                <div className="flex items-center bg-white border border-gray-200 h-[45px] w-[268px] rounded-md shadow-sm">
                  <div className="ml-3 text-[#A6CE39]">
                    <Star className="h-5 w-5 fill-[#A6CE39] text-[#A6CE39]" />
                  </div>
                  <span className="ml-2 text-[#04695E] text-sm font-medium">Iniciativas</span>
                  <span className="ml-auto mr-4 text-[#04695E] text-2xl font-bold">{totalMetrics.iniciativas}</span>
                </div>

                {/* Resultados Card - positioned relative to the first card */}
                <div className="flex items-center bg-white border border-gray-200 h-[45px] w-[229px] rounded-md shadow-sm ml-auto">
                  <div className="ml-3 text-[#A6CE39]">
                    <Flag className="h-5 w-5 fill-[#A6CE39] text-[#A6CE39]" />
                  </div>
                  <span className="ml-2 text-[#04695E] text-sm font-medium">Resultados</span>
                  <span className="ml-auto mr-4 text-[#04695E] text-2xl font-bold">{totalMetrics.resultados}</span>
                </div>

                {/* Metas Card - positioned relative to the second card */}
                <div className="flex items-center bg-[#04695E] border border-[#04695E] h-[45px] w-[189px] rounded-md shadow-sm ml-auto">
                  <div className="ml-3 text-white">
                    <Target className="h-5 w-5 text-[#A6CE39]" />
                  </div>
                  <span className="ml-2 text-white text-sm font-medium">Metas</span>
                  <span className="ml-auto mr-4 text-white text-2xl font-bold">{totalMetrics.metas}</span>
                </div>
              </div>
            </div>

            {/* Right side - Status Card */}
            <div className="lg:col-span-8 bg-[#04695E] rounded-tr-[50px] p-5 text-white h-[152px] w-full">
              <div className="flex items-center mb-4">
                <h3 className="text-sm font-bold uppercase border-l-4 border-[#A6CE39] pl-3">STATUS DAS METAS</h3>
                <div className="w-0.5 h-4 bg-[#A6CE39] mx-4"></div>
              </div>

              <div className="flex justify-between items-center px-4">
                {/* Satisfatório */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#03B71A] border-2 border-white flex items-center justify-center">
                    <SmileIcon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-3xl font-bold mt-1">{totalMetrics.status.satisfatorio}</span>
                  <p className="text-[10px] uppercase font-bold">SATISFATÓRIO</p>
                </div>

                {/* Alerta */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#EFA400] border-2 border-white flex items-center justify-center">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-3xl font-bold mt-1">{totalMetrics.status.alerta}</span>
                  <p className="text-[10px] uppercase font-bold">ALERTA</p>
                </div>

                {/* Crítico */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#FC0228] border-2 border-white flex items-center justify-center">
                    <Frown className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-3xl font-bold mt-1">{totalMetrics.status.critico}</span>
                  <p className="text-[10px] uppercase font-bold">CRÍTICO</p>
                </div>

                {/* Concluídos */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#01A3F7] border-2 border-white flex items-center justify-center">
                    <ThumbsUp className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-3xl font-bold mt-1">{totalMetrics.status.concluido}</span>
                  <p className="text-[10px] uppercase font-bold">CONCLUÍDOS</p>
                </div>

                {/* Não Monitorados */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#F4F4EF] border-2 border-[#F4F4EF] flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border-2 border-[#58595B] flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full border-[2px] border-[#58595B]"></div>
                    </div>
                  </div>
                  <span className="text-3xl font-bold mt-1">{totalMetrics.status.naoMonitorado}</span>
                  <p className="text-[10px] uppercase font-bold">NÃO MONITORADOS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Initiatives Section - Row 3 */}
          <div className="mt-4 ml-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#04695E] text-xl font-semibold">Iniciativas</h2>
              <button
                onClick={() => setIsNewInitiativeModalOpen(true)}
                className="bg-[#0DBAAD] hover:bg-[#04695E] transition-colors text-white px-4 py-2 rounded-full text-sm font-medium flex items-center shadow-sm"
              >
                Nova Iniciativa
                <Plus className="ml-2 h-4 w-4" />
              </button>
            </div>

            {/* Initiatives Cards with side-scrolling */}
            <div className="overflow-x-auto overflow-y-hidden pb-4">
              <div className="space-y-4" style={{ minWidth: "100%", width: "max-content", maxWidth: "100%" }}>
                {initiatives.length > 0 ? (
                  initiatives.map((initiative: InitiativeCardData) => <InitiativeCard key={initiative.id} {...initiative} />)
                ) : (
                  <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                    <p className="text-gray-500">Nenhuma iniciativa encontrada para esta porta.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* New Initiative Modal */}
        <NewInitiativeModal
          isOpen={isNewInitiativeModalOpen}
          onClose={() => setIsNewInitiativeModalOpen(false)}
          onSave={handleCreateInitiative}
          porta={activePorta}
        />
      </div>
    </DashboardLayout>
  )
}
