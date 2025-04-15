"use client"

import type React from "react"

import { useState } from "react"
import { X, AlertCircle } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

interface NewInitiativeModalProps {
  isOpen: boolean
  onClose: () => void
  porta: "fora" | "dentro"
}

export function NewInitiativeModal({ isOpen, onClose, porta }: NewInitiativeModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    responsible: "",
    porta: porta,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.title.trim()) {
      newErrors.title = "O título da iniciativa é obrigatório"
    }

    if (!formData.description.trim()) {
      newErrors.description = "A descrição da iniciativa é obrigatória"
    }

    if (!formData.responsible.trim()) {
      newErrors.responsible = "O responsável é obrigatório"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // In a real app, you would send this data to your backend
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Close the modal and reset form
      onClose()
      setFormData({
        title: "",
        description: "",
        responsible: "",
        porta: porta,
      })

      // Show success message (in a real app, you might use a toast notification)
      alert("Iniciativa criada com sucesso!")
    } catch (error) {
      console.error("Error creating initiative:", error)
      setErrors({
        submit: "Erro ao criar iniciativa. Tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
        <motion.div
          className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-[#04695E]">Nova Iniciativa</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="p-5 space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Título <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#04695E] ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.title}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Descrição <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#04695E] ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.description}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="responsible" className="block text-sm font-medium text-gray-700 mb-1">
                  Responsável <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="responsible"
                  name="responsible"
                  value={formData.responsible}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#04695E] ${
                    errors.responsible ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.responsible && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.responsible}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="porta" className="block text-sm font-medium text-gray-700 mb-1">
                  Porta
                </label>
                <select
                  id="porta"
                  name="porta"
                  value={formData.porta}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04695E]"
                >
                  <option value="fora">Porta para Fora</option>
                  <option value="dentro">Porta para Dentro</option>
                </select>
              </div>

              {errors.submit && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm flex items-start">
                  <AlertCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  <span>{errors.submit}</span>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex justify-end p-5 border-t border-gray-200 bg-gray-50">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none transition-colors mr-3"
                disabled={isSubmitting}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#0DBAAD] text-white rounded-md hover:bg-[#04695E] focus:outline-none transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Criando..." : "Criar Iniciativa"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
