import { NextResponse } from "next/server"
import { databaseService } from "@/lib/database"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const porta = searchParams.get("porta") as "Porta para fora" | "Porta para dentro" | null

    const iniciativas = await databaseService.getIniciativas(porta || undefined)
    const formattedIniciativas = databaseService.convertToComponentFormat(iniciativas)

    return NextResponse.json(formattedIniciativas)
  } catch (error) {
    console.error("Erro ao buscar iniciativas:", error)
    return NextResponse.json({ error: "Erro ao buscar iniciativas" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Em uma implementação real, você salvaria os dados no banco
    // e retornaria o objeto criado

    return NextResponse.json({ success: true, message: "Iniciativa criada com sucesso" }, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar iniciativa:", error)
    return NextResponse.json({ error: "Erro ao criar iniciativa" }, { status: 500 })
  }
}
