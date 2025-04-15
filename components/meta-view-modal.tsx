"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatusIcon } from "@/components/status-icons"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

interface MetaViewModalProps {
  isOpen: boolean
  onClose: () => void
  meta: Meta
}

export function MetaViewModal({ isOpen, onClose, meta }: MetaViewModalProps) {
  // Simulando histórico de status para demonstração
  const [statusHistory] = useState([
    { status: meta.status, date: meta.date, parecer: meta.parecer },
    { status: "alerta", date: "1º 2024", parecer: "Status anterior: Em alerta devido a atrasos no cronograma." },
    { status: "satisfatorio", date: "2º 2023", parecer: "Status inicial: Progresso conforme planejado." },
  ])

  const [currentStatusIndex, setCurrentStatusIndex] = useState(0)

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "satisfatorio":
        return "Satisfatório"
      case "alerta":
        return "Alerta"
      case "critico":
        return "Crítico"
      case "concluido":
        return "Concluído"
      case "naoMonitorado":
        return "Não monitorado"
      default:
        return "Desconhecido"
    }
  }

  const navigatePrevStatus = () => {
    if (currentStatusIndex < statusHistory.length - 1) {
      setCurrentStatusIndex(currentStatusIndex + 1)
    }
  }

  const navigateNextStatus = () => {
    if (currentStatusIndex > 0) {
      setCurrentStatusIndex(currentStatusIndex - 1)
    }
  }

  const currentStatus = statusHistory[currentStatusIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-[#04695E] text-xl">Meta</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Descrição da Meta */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium text-[#04695E]">Descrição</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{meta.description}</p>
            </CardContent>
          </Card>

          {/* Status, Parecer e Data com navegação */}
          <Card>
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <CardTitle className="text-base font-medium text-[#04695E]">Status</CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={navigatePrevStatus}
                  disabled={currentStatusIndex >= statusHistory.length - 1}
                  className="h-8 w-8"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-xs text-gray-500">
                  {currentStatusIndex === 0 ? "Atual" : `Histórico ${currentStatusIndex}/${statusHistory.length - 1}`}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={navigateNextStatus}
                  disabled={currentStatusIndex <= 0}
                  className="h-8 w-8"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <StatusIcon status={currentStatus.status as any} size="md" />
                <div>
                  <span className="font-medium">{getStatusLabel(currentStatus.status)}</span>
                  <span className="ml-4 text-sm text-gray-500">Data: {currentStatus.date}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Parecer</h4>
                <p className="text-sm">{currentStatus.parecer || "Nenhum parecer disponível."}</p>
              </div>
            </CardContent>
          </Card>

          {/* Responsável e Alcance */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-[#04695E]">Responsável</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{meta.responsible}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-[#04695E]">Alcance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                  <div className="bg-[#0DBAAD] h-2.5 rounded-full" style={{ width: `${meta.alcance}%` }}></div>
                </div>
                <span className="text-sm">{meta.alcance}%</span>
              </CardContent>
            </Card>
          </div>

          {/* Encaminhamentos (no final) */}
          {meta.encaminhamentos && meta.encaminhamentos.length > 0 && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-[#04695E]">Encaminhamentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {meta.encaminhamentos.map((encaminhamento) => (
                    <div key={encaminhamento.id} className="bg-gray-50 p-3 rounded-md">
                      <p className="text-sm">{encaminhamento.description}</p>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>Responsável: {encaminhamento.responsavel}</span>
                        <span>Prazo: {encaminhamento.prazo}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <DialogFooter>
          <Button onClick={onClose} className="bg-[#0DBAAD] hover:bg-[#04695E]">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
