"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface Initiative {
  id: string
  title: string
  description: string
  responsible: string
  porta: "fora" | "dentro"
}

interface EditInitiativeModalProps {
  isOpen: boolean
  onClose: () => void
  initiative: Initiative
}

export function EditInitiativeModal({ isOpen, onClose, initiative }: EditInitiativeModalProps) {
  const [formData, setFormData] = useState<Initiative>(initiative)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePortaChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      porta: value as "fora" | "dentro",
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Aqui você faria a chamada para a API para atualizar a iniciativa
      // await fetch(`/api/iniciativas/${formData.id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // Simulando uma chamada de API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Iniciativa atualizada",
        description: "A iniciativa foi atualizada com sucesso.",
        variant: "success",
      })

      onClose()
    } catch (error) {
      console.error("Erro ao atualizar iniciativa:", error)
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao atualizar a iniciativa. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-[#04695E]">Editar Iniciativa</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="responsible">Responsável</Label>
              <Input
                id="responsible"
                name="responsible"
                value={formData.responsible}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="porta">Porta</Label>
              <Select value={formData.porta} onValueChange={handlePortaChange}>
                <SelectTrigger id="porta">
                  <SelectValue placeholder="Selecione a porta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fora">Porta para Fora</SelectItem>
                  <SelectItem value="dentro">Porta para Dentro</SelectItem>
                </SelectContent>
              </Select>
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
