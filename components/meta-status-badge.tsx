import { StatusIcon } from "@/components/status-icons"

type StatusType = "satisfatorio" | "alerta" | "critico" | "concluido" | "naoMonitorado"

interface MetaStatusBadgeProps {
  status: StatusType
  showLabel?: boolean
  size?: "sm" | "md" | "lg"
}

export function MetaStatusBadge({ status, showLabel = true, size = "sm" }: MetaStatusBadgeProps) {
  const getStatusLabel = () => {
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

  return (
    <div className="flex items-center">
      <StatusIcon status={status} size={size} />
      {showLabel && <span className="ml-2 text-xs font-medium">{getStatusLabel()}</span>}
    </div>
  )
}
