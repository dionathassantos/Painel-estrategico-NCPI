"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PortaParaForaPage() {
  const router = useRouter()

  // Redirect to the main dashboard with the correct filter
  useEffect(() => {
    router.push("/dashboard?porta=fora")
  }, [router])

  return null
}
