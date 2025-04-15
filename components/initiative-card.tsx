"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp, User, Edit, Eye, ChevronRight } from "lucide-react"
import { StatusIcon } from "@/components/status-icons"
import { Button } from "@/components/ui/button"
import { EditInitiativeModal } from "@/components/edit-initiative-modal"
import { MetaViewModal } from "@/components/meta-view-modal"
import { EditMetaModal } from "@/components/edit-meta-modal"

interface Meta {
  id: string
  status: "satisfatorio" | "alerta" | "critico" | "concluido" | "naoMonitorado"
  description: string
  responsible: string
  alcance: number
  date: string
  parecer: string
  encaminhamentos: {
    id: string
    description: string
    prazo: string
    responsavel: string
  }[]
}

interface Resultado {
  id: string
  title: string
  metas: Meta[]
}

interface InitiativeCardProps {
  id: string
  title: string
  description: string
  responsible: string
  metasCount: number
  porta: "fora" | "dentro"
  statusCounts: {
    satisfatorio: number
    alerta: number
    critico: number
    concluido: number
    naoMonitorado: number
  }
  resultados: Resultado[]
  defaultOpen?: boolean
}

export function InitiativeCard({
  id,
  title,
  description,
  responsible,
  metasCount,
  porta,
  statusCounts,
  resultados,
  defaultOpen = false,
}: InitiativeCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [expandedResultados, setExpandedResultados] = useState<Record<string, boolean>>({})
  const [isEditInitiativeModalOpen, setIsEditInitiativeModalOpen] = useState(false)
  const [selectedMeta, setSelectedMeta] = useState<Meta | null>(null)
  const [isMetaViewModalOpen, setIsMetaViewModalOpen] = useState(false)
  const [isEditMetaModalOpen, setIsEditMetaModalOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  const toggleResultado = (resultadoId: string) => {
    setExpandedResultados((prev) => ({
      ...prev,
      [resultadoId]: !prev[resultadoId],
    }))
  }

  const handleViewMeta = (meta: Meta) => {
    setSelectedMeta(meta)
    setIsMetaViewModalOpen(true)
  }

  const handleEditMeta = (meta: Meta, e: React.MouseEvent) => {
    e.stopPropagation() // Impedir que o clique propague para a linha
    setSelectedMeta(meta)
    setIsEditMetaModalOpen(true)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
      {/* Header */}
      <div className={`p-4 flex flex-col ${isOpen ? "border-b border-gray-200" : ""}`}>
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleAccordion}>
          <div className="flex items-start">
            {/* Indicador de expansão */}
            <div className="mr-3 mt-1 text-[#A6CE39]">
              {isOpen ? (
                <ChevronDown size={20} className="text-[#A6CE39]" />
              ) : (
                <ChevronRight size={20} className="text-[#A6CE39]" />
              )}
            </div>

            <div>
              <h3 className="text-[#04695E] font-medium">{title}</h3>
              <div className="flex items-center text-gray-500 text-xs mt-1">
                <User size={12} className="mr-1" />
                <span>{responsible || "Não definido"}</span>
                <span className="mx-2">•</span>
                <span>{metasCount} metas</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Status counters */}
            <div className="flex items-center space-x-2">
              {statusCounts.satisfatorio > 0 && (
                <div className="flex items-center">
                  <StatusIcon status="satisfatorio" size="sm" />
                  <span className="ml-1 text-xs font-medium">{statusCounts.satisfatorio}</span>
                </div>
              )}
              {statusCounts.alerta > 0 && (
                <div className="flex items-center">
                  <StatusIcon status="alerta" size="sm" />
                  <span className="ml-1 text-xs font-medium">{statusCounts.alerta}</span>
                </div>
              )}
              {statusCounts.critico > 0 && (
                <div className="flex items-center">
                  <StatusIcon status="critico" size="sm" />
                  <span className="ml-1 text-xs font-medium">{statusCounts.critico}</span>
                </div>
              )}
              {statusCounts.concluido > 0 && (
                <div className="flex items-center">
                  <StatusIcon status="concluido" size="sm" />
                  <span className="ml-1 text-xs font-medium">{statusCounts.concluido}</span>
                </div>
              )}
              {statusCounts.naoMonitorado > 0 && (
                <div className="flex items-center">
                  <StatusIcon status="naoMonitorado" size="sm" />
                  <span className="ml-1 text-xs font-medium">{statusCounts.naoMonitorado}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description - Visível mesmo quando o accordion está fechado */}
        <div className="mt-3 text-sm text-gray-600 pl-8">
          <p className="line-clamp-2">{description}</p>
        </div>
      </div>

      {/* Content */}
      {isOpen && (
        <div className="p-4 pl-8">
          {/* Botão de editar iniciativa */}
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center text-[#04695E] border-[#04695E] hover:bg-[#04695E] hover:text-white"
              onClick={() => setIsEditInitiativeModalOpen(true)}
            >
              <Edit size={16} className="mr-2" />
              Editar Iniciativa
            </Button>
          </div>

          {/* Resultados */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Resultados e Metas</h4>
            <div className="space-y-4">
              {resultados.map((resultado) => (
                <div key={resultado.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Resultado header */}
                  <div
                    className="p-3 bg-gray-50 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleResultado(resultado.id)}
                  >
                    <h5 className="text-sm font-medium text-[#04695E]">{resultado.title}</h5>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{resultado.metas.length} metas</span>
                      {expandedResultados[resultado.id] ? (
                        <ChevronUp size={16} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={16} className="text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Metas */}
                  {expandedResultados[resultado.id] && (
                    <div className="p-3">
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Meta
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Responsável
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Alcance
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Data
                              </th>
                              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ações
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {resultado.metas.map((meta) => (
                              <tr
                                key={meta.id}
                                className="hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleViewMeta(meta)}
                              >
                                <td className="px-3 py-2 whitespace-nowrap">
                                  <StatusIcon status={meta.status} size="sm" />
                                </td>
                                <td className="px-3 py-2 text-sm text-gray-900">{meta.description}</td>
                                <td className="px-3 py-2 text-sm text-gray-500">{meta.responsible}</td>
                                <td className="px-3 py-2 whitespace-nowrap">
                                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                                    <div
                                      className="bg-[#0DBAAD] h-2.5 rounded-full"
                                      style={{ width: `${meta.alcance}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-xs text-gray-500">{meta.alcance}%</span>
                                </td>
                                <td className="px-3 py-2 text-sm text-gray-500">{meta.date}</td>
                                <td className="px-3 py-2 text-sm text-gray-500">
                                  <div className="flex space-x-2">
                                    <button
                                      className="text-gray-500 hover:text-[#04695E]"
                                      onClick={(e) => handleEditMeta(meta, e)}
                                    >
                                      <Edit size={16} />
                                    </button>
                                    <button
                                      className="text-gray-500 hover:text-[#04695E]"
                                      onClick={(e) => {
                                        e.stopPropagation()
                                        handleViewMeta(meta)
                                      }}
                                    >
                                      <Eye size={16} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modais */}
      <EditInitiativeModal
        isOpen={isEditInitiativeModalOpen}
        onClose={() => setIsEditInitiativeModalOpen(false)}
        initiative={{
          id,
          title,
          description,
          responsible,
          porta,
        }}
      />

      {selectedMeta && (
        <>
          <MetaViewModal
            isOpen={isMetaViewModalOpen}
            onClose={() => setIsMetaViewModalOpen(false)}
            meta={selectedMeta}
          />

          <EditMetaModal
            isOpen={isEditMetaModalOpen}
            onClose={() => setIsEditMetaModalOpen(false)}
            meta={selectedMeta}
          />
        </>
      )}
    </div>
  )
}
