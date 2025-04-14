"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface Initiative {
  id: string
  title: string
  description: string
  responsible: string
  porta: "fora" | "dentro"
  metasCount: number
  statusCounts: {
    satisfatorio: number
    alerta: number
    critico: number
    concluido: number
    naoMonitorado: number
  }
  defaultOpen: boolean
}

interface NewInitiativeModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (initiative: Omit<Initiative, "id">) => Promise<void>
  porta: "fora" | "dentro"
}

export function NewInitiativeModal({ isOpen, onClose, onSave, porta }: NewInitiativeModalProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [responsible, setResponsible] = useState("")
  const [metasCount, setMetasCount] = useState(0)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const newInitiative: Omit<Initiative, "id"> = {
      title,
      description,
      responsible,
      porta,
      metasCount,
      statusCounts: {
        satisfatorio: 0,
        alerta: 0,
        critico: 0,
        concluido: 0,
        naoMonitorado: 0,
      },
      defaultOpen: false,
    }

    await onSave(newInitiative)
    
    // Reset form
    setTitle("")
    setDescription("")
    setResponsible("")
    setMetasCount(0)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova Iniciativa</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Título
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium">
              Descrição
            </label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="responsible" className="text-sm font-medium">
              Responsável
            </label>
            <Input
              id="responsible"
              value={responsible}
              onChange={(e) => setResponsible(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="metasCount" className="text-sm font-medium">
              Número de Metas
            </label>
            <Input
              id="metasCount"
              type="number"
              value={metasCount}
              onChange={(e) => setMetasCount(Number(e.target.value))}
              required
              min={0}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
