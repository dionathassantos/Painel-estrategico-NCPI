"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { StatusIcon } from "@/components/status-icons"

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

interface EditMetaModalProps {
  isOpen: boolean
  onClose: () => void
  meta: Meta
}

export function EditMetaModal({ isOpen, onClose, meta }: EditMetaModalProps) {
  const [formData, setFormData] = useState<Meta>(meta)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleStatusChange = (status: Meta["status"]) => {
    setFormData((prev) => ({
      ...prev,
      status,
    }))
  }

  const handleAlcanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setFormData((prev) => ({
        ...prev,
        alcance: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aqui você faria a chamada para a API para atualizar a meta
      // await fetch(`/api/metas/${formData.id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // Simulando uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Meta atualizada",
        description: "A meta foi atualizada com sucesso.",
        variant: "success",
      })

      onClose()
    } catch (error) {
      console.error("Erro ao atualizar meta:", error)
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao atualizar a meta. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-[#04695E] text-xl">Editar Meta</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="description" className="text-base font-medium text-[#04695E]">
                Descrição
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                required
                className="resize-none"
              />
            </div>

            {/* Status com ícones */}
            <div className="space-y-2">
              <Label className="text-base font-medium text-[#04695E]">Status</Label>
              <div className="grid grid-cols-5 gap-2">
                <StatusButton
                  status="satisfatorio"
                  label="Satisfatório"
                  selected={formData.status === "satisfatorio"}
                  onClick={() => handleStatusChange("satisfatorio")}
                />
                <StatusButton
                  status="alerta"
                  label="Alerta"
                  selected={formData.status === "alerta"}
                  onClick={() => handleStatusChange("alerta")}
                />
                <StatusButton
                  status="critico"
                  label="Crítico"
                  selected={formData.status === "critico"}
                  onClick={() => handleStatusChange("critico")}
                />
                <StatusButton
                  status="concluido"
                  label="Concluído"
                  selected={formData.status === "concluido"}
                  onClick={() => handleStatusChange("concluido")}
                />
                <StatusButton
                  status="naoMonitorado"
                  label="Não Monitorado"
                  selected={formData.status === "naoMonitorado"}
                  onClick={() => handleStatusChange("naoMonitorado")}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="responsible" className="text-base font-medium text-[#04695E]">
                  Responsável
                </Label>
                <Input
                  id="responsible"
                  name="responsible"
                  value={formData.responsible}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-base font-medium text-[#04695E]">
                  Data
                </Label>
                <Input id="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="alcance" className="text-base font-medium text-[#04695E]">
                Alcance (%)
              </Label>
              <div className="flex items-center space-x-4">
                <Input
                  id="alcance"
                  name="alcance"
                  type="number"
                  min="0"
                  max="100"
                  value={formData.alcance}
                  onChange={handleAlcanceChange}
                  required
                  className="w-24"
                />
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#0DBAAD] h-2.5 rounded-full" style={{ width: `${formData.alcance}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="parecer" className="text-base font-medium text-[#04695E]">
                Parecer
              </Label>
              <Textarea
                id="parecer"
                name="parecer"
                value={formData.parecer}
                onChange={handleChange}
                rows={3}
                className="resize-none"
              />
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isSubmitting} className="bg-[#0DBAAD] hover:bg-[#04695E]">
              {isSubmitting ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

interface StatusButtonProps {
  status: Meta["status"]
  label: string
  selected: boolean
  onClick: () => void
}

function StatusButton({ status, label, selected, onClick }: StatusButtonProps) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-md ${selected ? "ring-2 ring-[#0DBAAD] shadow-md" : ""}`}
      onClick={onClick}
    >
      <CardContent className="p-3 flex flex-col items-center justify-center">
        <StatusIcon status={status} size="sm" />
        <span className="text-xs mt-2 text-center">{label}</span>
      </CardContent>
    </Card>
  )
}
