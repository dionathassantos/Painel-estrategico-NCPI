import { DashboardLayout } from "@/components/dashboard-layout"
import { FileText, Download, ExternalLink, Calendar, Users, BarChart2 } from "lucide-react"
import Link from "next/link"

export default function AvaliacoesPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#04695E] mb-4">Avaliações</h1>
          <p className="text-gray-600 mb-6">
            As avaliações são fundamentais para medir o impacto de nossas iniciativas, extrair aprendizados e aprimorar
            continuamente nosso trabalho. Nesta página, você encontrará os resultados das avaliações realizadas ao longo
            das diferentes fases do NCPI.
          </p>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-4">Importância das Avaliações</h2>
          <p className="text-gray-600 mb-4">
            O NCPI valoriza a cultura de avaliação como parte essencial de seu ciclo de aprendizagem e melhoria
            contínua. Realizamos avaliações periódicas para:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mb-3">
                <BarChart2 className="h-6 w-6 text-[#04695E]" />
              </div>
              <h3 className="font-medium text-[#04695E] text-center mb-2">Medir Impacto</h3>
              <p className="text-sm text-gray-600 text-center">
                Verificar se nossas iniciativas estão gerando os resultados esperados e contribuindo para nossos
                objetivos estratégicos
              </p>
            </div>

            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-[#04695E]" />
              </div>
              <h3 className="font-medium text-[#04695E] text-center mb-2">Extrair Aprendizados</h3>
              <p className="text-sm text-gray-600 text-center">
                Identificar o que funcionou bem, o que pode ser melhorado e quais lições podemos levar para o futuro
              </p>
            </div>

            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mb-3">
                <Calendar className="h-6 w-6 text-[#04695E]" />
              </div>
              <h3 className="font-medium text-[#04695E] text-center mb-2">Planejar o Futuro</h3>
              <p className="text-sm text-gray-600 text-center">
                Informar o planejamento das próximas fases, ajustando estratégias e metas com base em evidências
              </p>
            </div>
          </div>
        </div>

        {/* Avaliações Disponíveis */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-6">Avaliações Disponíveis</h2>

          <div className="space-y-6">
            {/* Avaliação 2021 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText className="h-6 w-6 text-[#04695E]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-[#04695E] mb-2">Avaliação da Fase III (2021)</h3>
                  <p className="text-gray-600 mb-4">
                    Esta avaliação analisou os resultados da Fase III do NCPI, que teve como foco a transformação de
                    inovações e conhecimento científico em serviços à população, o aumento da produção científica e o
                    enfrentamento dos desafios da pandemia para a primeira infância.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <Link
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-[#F4F4EF] text-[#04695E] rounded-md hover:bg-[#E5E5E0] transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Relatório Completo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-[#F4F4EF] text-[#04695E] rounded-md hover:bg-[#E5E5E0] transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Sumário Executivo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-[#F4F4EF] text-[#04695E] rounded-md hover:bg-[#E5E5E0] transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apresentação
                    </Link>
                  </div>

                  <div className="mt-4 text-sm text-gray-500">
                    <strong>Realizada por:</strong> Consultoria Externa Independente
                  </div>
                </div>
              </div>
            </div>

            {/* Avaliação 2024 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText className="h-6 w-6 text-[#04695E]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-[#04695E] mb-2">Avaliação da Fase IV (2024)</h3>
                  <p className="text-gray-600 mb-4">
                    Esta avaliação examinou os resultados da Fase IV, que teve como foco a transição da agenda da
                    conscientização e da formulação das políticas públicas nacionais para a implementação em estados e
                    municípios, com foco nas crianças mais vulnerabilizadas.
                  </p>

                  <div className="flex flex-wrap gap-4 mt-4">
                    <Link
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-[#F4F4EF] text-[#04695E] rounded-md hover:bg-[#E5E5E0] transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Relatório Completo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-[#F4F4EF] text-[#04695E] rounded-md hover:bg-[#E5E5E0] transition-colors"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Sumário Executivo
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center px-4 py-2 bg-[#F4F4EF] text-[#04695E] rounded-md hover:bg-[#E5E5E0] transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apresentação
                    </Link>
                  </div>

                  <div className="mt-4 text-sm text-gray-500">
                    <strong>Realizada por:</strong> Consultoria Externa Independente
                  </div>
                </div>
              </div>
            </div>

            {/* Avaliação 2027 (Planejada) */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-[#F4F4EF]/30">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mr-4 flex-shrink-0">
                  <Calendar className="h-6 w-6 text-[#04695E]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="text-lg font-medium text-[#04695E] mb-2">Avaliação da Fase V (2027)</h3>
                    <span className="ml-3 px-3 py-1 bg-[#A6CE39]/20 text-[#04695E] text-xs font-medium rounded-full">
                      Planejada
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Esta avaliação analisará os resultados da Fase V, que tem como foco a expansão do uso de evidências
                    no desenho e implementação de políticas públicas para as primeiras infâncias, a ampliação de
                    diálogos e o fortalecimento de capacidades estatais.
                  </p>

                  <div className="mt-4 text-sm text-gray-500">
                    <strong>Período previsto:</strong> Junho a Outubro de 2027
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Principais Aprendizados */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-[#04695E] mb-6">Principais Aprendizados da Avaliação da Fase IV</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-[#A6CE39] pl-4">
                <p className="text-gray-600 text-sm">
                  O NCPI deve sustentar seu lugar de produtor e tradutor de evidências para os agentes formuladores de
                  política e para aqueles que se responsabilizam pela implementação nos três níveis de governo.
                </p>
              </div>

              <div className="border-l-4 border-[#A6CE39] pl-4">
                <p className="text-gray-600 text-sm">
                  A tradução e disseminação de evidências devem ser adaptadas para ampliar sua aderência aos públicos.
                  Melhor compreender e segmentar os públicos tende a elevar a capacidade de resposta a suas
                  necessidades.
                </p>
              </div>

              <div className="border-l-4 border-[#A6CE39] pl-4">
                <p className="text-gray-600 text-sm">
                  O Prêmio deve ser continuado e considerar a jornada completa dos participantes, trazendo-os mais para
                  perto. Parece oportuno que cada edição do Prêmio leve uma dupla de pesquisadores para o Comitê
                  Científico, favorecendo sua renovação.
                </p>
              </div>

              <div className="border-l-4 border-[#A6CE39] pl-4">
                <p className="text-gray-600 text-sm">
                  O ELP deve seguir como espaço privilegiado de criação de vínculos dos participantes com o NCPI e os
                  agentes que sustentam a coalizão. Ao mesmo tempo, o ELP necessita de uma revisão de suas premissas
                  pedagógicas.
                </p>
              </div>

              <div className="border-l-4 border-[#A6CE39] pl-4">
                <p className="text-gray-600 text-sm">
                  Os padrões de diversidade precisam de incremento imediato do letramento racial de seus dirigentes e
                  operadores, metas mais ousadas e identificação e mitigação de práticas de racismo cultural, científico
                  e institucional.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-[#A6CE39] pl-4">
                <p className="text-gray-600 text-sm">
                  As parcerias precisam ser expandidas com vistas a ampliar a capilaridade, diversidade, recursos e
                  relevância da iniciativa. Uma colaboração mais ampla e estratégica poderia beneficiar tanto o NCPI
                  quanto outros futuros envolvidos.
                </p>
              </div>

              <div className="border-l-4 border-[#A6CE39] pl-4">
                <p className="text-gray-600 text-sm">
                  A comunidade de ex-participantes precisa ser repensada na Fase V, tendo em vista a robustez do grupo,
                  os vínculos que ela encerra, as conquistas de muitos de seus agentes e seu potencial transformador.
                </p>
              </div>

              <div className="border-l-4 border-[#A6CE39] pl-4">
                <p className="text-gray-600 text-sm">
                  Os desafios de implementação precisam ganhar espaço mais decisivo na estratégia, tendo em vista a
                  necessidade de melhorar o acesso, qualidade e efetividade dos serviços de primeira infância.
                </p>
              </div>

              <div className="border-l-4 border-[#A6CE39] pl-4">
                <p className="text-gray-600 text-sm">
                  É preciso formular novas expectativas em torno do desejo de influenciar o diálogo público. A
                  construção de estratégias nesta direção requer mais investimento e atores mais especializados.
                </p>
              </div>

              <div className="border-l-4 border-[#A6CE39] pl-4">
                <p className="text-gray-600 text-sm">
                  O arranjo de governança deve ser revisitado para evoluir instâncias, papéis e responsabilidades e
                  produzir ganhos na realização da estratégia, na capacidade executiva do plano tático-operacional e na
                  qualidade das relações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
