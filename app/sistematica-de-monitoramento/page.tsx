import { DashboardLayout } from "@/components/dashboard-layout"
import { Calendar, CheckCircle, AlertTriangle, XCircle, Clock, Users, FileText } from "lucide-react"

export default function SistematicaDeMonitoramentoPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#04695E] mb-4">Sistemática de Monitoramento</h1>
          <p className="text-gray-600 mb-6">
            Nossa sistemática de monitoramento foi desenvolvida para acompanhar o progresso das iniciativas, identificar
            desafios e oportunidades, e garantir que estamos no caminho certo para alcançar nossos objetivos.
          </p>
        </div>

        {/* Ciclo de Monitoramento */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-6">Ciclo de Monitoramento</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-[#F4F4EF] p-4 rounded-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#04695E] flex items-center justify-center mb-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-[#04695E] mb-2">Reuniões Bimensais</h3>
              <p className="text-sm text-gray-600">
                Acompanhamento das metas e atualização do farol pela equipe executiva
              </p>
            </div>

            <div className="bg-[#F4F4EF] p-4 rounded-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#04695E] flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-[#04695E] mb-2">Reuniões Periódicas</h3>
              <p className="text-sm text-gray-600">Apresentação e análise do farol pelo Comitê Gestor</p>
            </div>

            <div className="bg-[#F4F4EF] p-4 rounded-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#A6CE39] flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-[#04695E] mb-2">Atualização 2026</h3>
              <p className="text-sm text-gray-600">
                Avaliação interna anual, extração de aprendizagens e calibração de metas
              </p>
            </div>

            <div className="bg-[#F4F4EF] p-4 rounded-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#A6CE39] flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-[#04695E] mb-2">Atualização 2027</h3>
              <p className="text-sm text-gray-600">
                Avaliação interna anual, extração de aprendizagens e calibração de metas
              </p>
            </div>

            <div className="bg-[#F4F4EF] p-4 rounded-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0DBAAD] flex items-center justify-center mb-3">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-medium text-[#04695E] mb-2">Avaliação Fase 5</h3>
              <p className="text-sm text-gray-600">
                Avaliação externa entre junho e outubro de 2027, para planejamento da próxima fase
              </p>
            </div>
          </div>
        </div>

        {/* Sistema de Farol */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-6">Sistema de Farol</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="bg-[#F4F4EF] text-[#04695E]">
                  <th className="py-3 px-4 text-left font-medium">Meta</th>
                  <th className="py-3 px-4 text-center font-medium w-24">% Alcance</th>
                  <th className="py-3 px-4 text-center font-medium w-32">Farol no Trimestre</th>
                  <th className="py-3 px-4 text-left font-medium w-24">Líder</th>
                  <th className="py-3 px-4 text-left font-medium">Observações</th>
                  <th className="py-3 px-4 text-left font-medium">Encaminhamento</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-4 text-sm">
                    Manter o site do NCPI entre os 3 primeiros colocados no Google em buscas de expressões prioritárias
                  </td>
                  <td className="py-4 px-4 text-center">50%</td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#FFB001] flex items-center justify-center">
                        <AlertTriangle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">Pessoa</td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="py-4 px-4 text-sm">100% dos grants previstos, aprovados com os parceiros</td>
                  <td className="py-4 px-4 text-center">100%</td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#03B51A] flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">Pessoa</td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="py-4 px-4 text-sm">
                    Assegurar ao menos 5 parceiros divulgadores a cada edição: FNP, RNPI, CNM, CPAPI, etc.
                  </td>
                  <td className="py-4 px-4 text-center">100%</td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#03B51A] flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">Pessoa</td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </td>
                </tr>

                <tr className="border-t border-gray-200">
                  <td className="py-4 px-4 text-sm">
                    Participação de 3 a 5 palestrantes internacionais, com 50% deles com origem no Sul Global
                  </td>
                  <td className="py-4 px-4 text-center">40%</td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#FF0028] flex items-center justify-center">
                        <XCircle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm">Pessoa</td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium text-[#04695E] mb-4">Legenda do Farol</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <Clock className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-600">Não iniciado conforme plano</span>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#FFB001] flex items-center justify-center mr-3">
                  <AlertTriangle className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-600">Atrasado em relação ao plano</span>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#03B51A] flex items-center justify-center mr-3">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-600">Em conformidade com o plano</span>
              </div>

              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#0DBAAD] flex items-center justify-center mr-3">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-600">Concluído</span>
              </div>
            </div>
          </div>
        </div>

        {/* Processo de Avaliação */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-[#04695E] mb-4">Processo de Avaliação</h2>

          <p className="text-gray-600 mb-6">
            Além do monitoramento contínuo, realizamos avaliações periódicas para medir o impacto de nossas iniciativas
            e extrair aprendizados para aprimorar nosso trabalho.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-[#04695E] mb-3">Avaliação Interna Anual</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Revisão do progresso das metas</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Identificação de desafios e oportunidades</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Ajustes nas estratégias e metas</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Documentação de aprendizados</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-[#04695E] mb-3">Avaliação Externa da Fase</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Contratação de avaliador externo</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Análise de resultados e impactos</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Entrevistas com stakeholders</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Recomendações para a próxima fase</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium text-[#04695E] mb-3">Avaliação de Iniciativas Específicas</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Avaliação do Simpósio Internacional</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Avaliação do Programa ELP</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Avaliação do Prêmio</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Avaliação do NCPI Dissemina</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
