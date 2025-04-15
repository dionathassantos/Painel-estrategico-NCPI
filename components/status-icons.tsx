import Image from "next/image"

export type StatusType = "satisfatorio" | "alerta" | "critico" | "concluido" | "naoMonitorado"

interface StatusIconProps {
  status: StatusType
  size?: "sm" | "md" | "lg"
  showBackground?: boolean
}

export function StatusIcon({ status, size = "md", showBackground = true }: StatusIconProps) {
  const getIconPath = () => {
    switch (status) {
      case "satisfatorio":
        return "/images/Satisfatório.svg"
      case "alerta":
        return "/images/Alerta.svg"
      case "critico":
        return "/images/Crítico.svg"
      case "concluido":
        return "/images/Concluídos.svg"
      case "naoMonitorado":
        return "/images/Não monitorados.svg"
      default:
        return "/images/Não monitorados.svg"
    }
  }

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "w-6 h-6"
      case "lg":
        return "w-14 h-14"
      case "md":
      default:
        return "w-10 h-10"
    }
  }

  return (
    <div className={`relative ${getSizeClass()}`}>
      <Image
        src={getIconPath() || "/placeholder.svg"}
        alt={`Status ${status}`}
        width={40}
        height={40}
        className="w-full h-full"
      />
    </div>
  )
}

export function StatusCounter({ counts }: { counts: Record<StatusType, number> }) {
  return (
    <div className="flex items-center space-x-2">
      {Object.entries(counts).map(([status, count]) => {
        if (count === 0) return null
        return (
          <div key={status} className="flex items-center">
            <StatusIcon status={status as StatusType} size="sm" />
            <span className="ml-1 text-xs font-medium">{count}</span>
          </div>
        )
      })}
    </div>
  )
}
