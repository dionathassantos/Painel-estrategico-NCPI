import { DashboardLayout } from "@/components/dashboard-layout"
import { Users, UserCheck, FileText, BarChart2 } from "lucide-react"

export default function GovernancaPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#04695E] mb-4">Governança</h1>
          <p className="text-gray-600 mb-6">
            A estrutura de governança do NCPI foi desenvolvida para garantir a eficiência na tomada de decisões,
            transparência nos processos e clareza nos papéis e responsabilidades de cada instância.
          </p>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-4">Evolução da Governança</h2>
          <p className="text-gray-600 mb-4">
            A governança do NCPI tem evoluído de fase à fase. A evolução foi determinada pela entrada e saída de
            parceiros, por mudanças na organização backbone e por necessidades de melhorar os fluxos decisórios e
            operacionais.
          </p>
          <p className="text-gray-600 mb-4">
            Para a Fase V, buscamos evoluir na governança de modo a tornar mais nítidos os espaços decisórios,
            diferenciando-os de espaços consultivos e assessores.
          </p>
          <p className="text-gray-600">
            Buscamos evoluir também ao reconhecer o papel estrutural que o Comitê Científico desempenha no NCPI, como
            guardião do rigor científico que caracteriza a iniciativa desde sua gênese. A instância deixa de ser vista
            como iniciativa finalística, para ser compreendida como instância de orientação técnico-científica em temas
            centrais à produção do NCPI.
          </p>
        </div>

        {/* Estrutura Organizacional */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-6">Estrutura Organizacional da Fase V</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Diagrama simplificado */}
            <div className="bg-[#F4F4EF] p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#04695E] mb-4 text-center">Diagrama de Governança</h3>
              <div className="relative">
                {/* Comitê Gestor */}
                <div className="bg-[#04695E] text-white p-3 rounded-lg text-center mb-4">Comitê Gestor</div>

                {/* Linha vertical */}
                <div className="w-0.5 h-6 bg-gray-400 mx-auto mb-4"></div>

                {/* Comitê Estratégico e Comitê Científico */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-[#A6CE39] text-white p-3 rounded-lg text-center">Comitê Estratégico</div>
                  <div className="bg-[#A6CE39] text-white p-3 rounded-lg text-center">Comitê Científico</div>
                </div>

                {/* Linha vertical */}
                <div className="w-0.5 h-6 bg-gray-400 mx-auto mb-4"></div>

                {/* Equipe Executiva */}
                <div className="bg-[#0DBAAD] text-white p-3 rounded-lg text-center">Equipe Executiva</div>
              </div>
              <div className="text-xs text-gray-500 mt-4 text-center italic">
                * Este é um diagrama simplificado. A estrutura completa inclui fluxos de comunicação e responsabilidades
                específicas.
              </div>
            </div>

            {/* Legenda e descrição */}
            <div>
              <h3 className="text-lg font-medium text-[#04695E] mb-4">Composição das Instâncias</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-[#04695E] mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-[#04695E]">Comitê Gestor</h4>
                    <p className="text-sm text-gray-600">Organização backbone e parceiros financiadores</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-[#A6CE39] mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-[#04695E]">Comitê Estratégico</h4>
                    <p className="text-sm text-gray-600">
                      Todos os parceiros da coalizão somados a 3 a 4 agentes-chave para a agenda de implementação de
                      PPPI
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-[#A6CE39] mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-[#04695E]">Comitê Científico</h4>
                    <p className="text-sm text-gray-600">
                      Cientistas de diferentes áreas de conhecimento, regiões e origens étnico-raciais
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-[#0DBAAD] mt-1.5 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-[#04695E]">Equipe Executiva</h4>
                    <p className="text-sm text-gray-600">
                      Colaboradores contratados pela Backbone, com autonomia para a contratação de fornecedores
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Papéis e Responsabilidades */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-6">Papéis e Responsabilidades</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="bg-[#04695E] text-white p-3 rounded-t-lg">
                <h3 className="font-medium">Comitê Gestor</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                    <span>Aprovar o plano de investimentos para cada fase</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                    <span>Zelar pela qualidade das relações na Coalizão</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                    <span>Formular o Plano Estratégico e acompanhar seu impacto</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                    <span>Coordenar e deliberar sobre representação institucional</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                    <span>Desenhar e aprovar ações de parceria com investidores</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                    <span>Aprovar a contratação de parceiros executivos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                    <span>Aprovar diretrizes específicas para as iniciativas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                    <span>Regular o funcionamento das demais instâncias do NCPI</span>
                  </li>
                </ul>
                <div className="mt-4 text-xs text-gray-500">
                  <strong>Frequência:</strong> Reuniões quinzenais conduzidas pela equipe executiva
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#A6CE39] text-white p-3 rounded-t-lg">
                <h3 className="font-medium">Comitê Estratégico</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Realizar análise periódica de contexto da PPPI no Brasil</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Construir diretrizes para a atuação no ecossistema</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Identificar oportunidades de ação estratégica</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Propor pautas estratégicas para as iniciativas e para o Comitê Científico</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Realizar representação institucional sob orientação do Comitê Gestor</span>
                  </li>
                </ul>
                <div className="mt-4 text-xs text-gray-500">
                  <strong>Frequência:</strong> Reuniões trimestrais conduzidas pela liderança executiva do NCPI
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#A6CE39] text-white p-3 rounded-t-lg">
                <h3 className="font-medium">Comitê Científico</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Realizar análise periódica da produção científica em PI no Brasil</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Identificar temas críticos para atividades de disseminação</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Produzir insumos técnicos para a disseminação</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Realizar representação institucional sob orientação do Comitê Gestor</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Apoiar o desenho e implementação das demais iniciativas do NCPI</span>
                  </li>
                </ul>
                <div className="mt-4 text-xs text-gray-500">
                  <strong>Frequência:</strong> Reuniões trimestrais com coordenação rotativa e mandato definidos em
                  regulamento
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#0DBAAD] text-white p-3 rounded-t-lg">
                <h3 className="font-medium">Equipe Executiva</h3>
              </div>
              <div className="border border-t-0 border-gray-200 p-4 rounded-b-lg">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Secretariar o funcionamento das instâncias</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Implementar o plano tático e operacional em cada fase</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Monitorar o plano tático e operacional</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Acompanhar o orçamento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Preparar relatórios de prestação de contas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="min-w-4 mt-1 mr-2 text-[#04695E]">•</div>
                    <span>Contratar e acompanhar parceiros fornecedores</span>
                  </li>
                </ul>
                <div className="mt-4 text-xs text-gray-500">
                  <strong>Composição:</strong> Coordenação e 3 analistas, com núcleos de suporte às iniciativas
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estrutura da Equipe Executiva */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-[#04695E] mb-6">Estrutura da Equipe Executiva</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                A equipe executiva tem demonstrado grande capacidade realizadora e compromisso com o lugar do NCPI no
                ecossistema. Ao longo da Fase IV a equipe passou por mudanças significativas, com a saída de duas
                pessoas importantes para os relacionamentos e operações.
              </p>
              <p className="text-gray-600 mb-4">
                Os ajustes realizados pela Backbone neste processo foram cruciais para manter o tônus e a capacidade de
                entrega da equipe. Ao mesmo tempo, a equipe executiva também passou a operar novas iniciativas e
                relações de parceria executiva, com a Escola de Saúde Pública de Harvard, com a Ponte a Ponte, e com a
                agência de comunicação.
              </p>
              <p className="text-gray-600">
                A estrutura atual pode ser revisada para a Fase V, considerando as novas demandas e responsabilidades.
              </p>
            </div>

            <div className="bg-[#F4F4EF] p-6 rounded-lg">
              <h3 className="text-lg font-medium text-[#04695E] mb-4">Núcleos de Trabalho</h3>
              <div className="space-y-4">
                <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#04695E] flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-[#04695E] font-medium">Núcleo ELP</span>
                </div>

                <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#04695E] flex items-center justify-center mr-3">
                    <BarChart2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-[#04695E] font-medium">Núcleo Simpósio</span>
                </div>

                <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#04695E] flex items-center justify-center mr-3">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-[#04695E] font-medium">Núcleo Dissemina</span>
                </div>

                <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#04695E] flex items-center justify-center mr-3">
                    <UserCheck className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-[#04695E] font-medium">Núcleo Prêmio</span>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                <p>
                  Cada núcleo é composto por analistas e consultoria especializada, trabalhando de forma integrada com a
                  coordenação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
