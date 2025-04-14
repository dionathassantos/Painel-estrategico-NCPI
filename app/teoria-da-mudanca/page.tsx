import { DashboardLayout } from "@/components/dashboard-layout"
import { Target, Layers, Users, BarChart2, Zap } from "lucide-react"

export default function TeoriaDaMudancaPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#04695E] mb-4">Teoria da Mudança</h1>
          <p className="text-gray-600 mb-6">
            Nossa Teoria da Mudança orienta nossas estratégias e ações, conectando nossos esforços aos resultados que
            buscamos alcançar para as primeiras infâncias no Brasil.
          </p>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-4">O que é uma Teoria da Mudança?</h2>
          <p className="text-gray-600 mb-4">
            Teorias da Mudança são ferramentas estratégicas que orientam processos de planejamento e guiam o
            monitoramento e avaliação de iniciativas. Por serem sintéticas, convidam os atores a desenhar os resultados
            mais importantes que desejam alcançar, bem como as cadeias que conectam resultados, entregas e estratégias.
          </p>
          <p className="text-gray-600">
            A Teoria da Mudança para a Fase 5 do NCPI baseia-se na TdM que vigorou para a Fase IV, e evolui a iniciativa
            à luz dos novos desafios a serem enfrentados.
          </p>
        </div>

        {/* Evolução da Teoria da Mudança */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-4">Evolução da Teoria da Mudança</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="text-sm text-gray-500 font-medium mb-2">FASE 3</div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Ciência & Inovação</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Comunicação & Disseminação</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Capacitação</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Monitoramento & Avaliação</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="text-sm text-gray-500 font-medium mb-2">FASE 4</div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Geração e tradução de conhecimento científico</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Capacitação na implementação de políticas públicas</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Conscientização e disseminação</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>Mobilização de atores chave</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-[#F4F4EF] shadow-md">
              <div className="text-sm text-gray-500 font-medium mb-2">FASE 5</div>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>
                    Expansão do uso de evidências no desenho e implementação de políticas públicas para as primeiras
                    infâncias
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>
                    Ampliação de diálogos para o desenho e implementação de políticas para as primeiras infâncias
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 mt-1 mr-2 text-[#A6CE39]">•</div>
                  <span>
                    Fortalecimento de capacidades estatais para a implementação de políticas e serviços públicos para as
                    primeiras infâncias
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Diagrama da Teoria da Mudança */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-6">Diagrama da Teoria da Mudança</h2>

          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              {/* Diagrama visual da Teoria da Mudança */}
              <div className="grid grid-cols-5 gap-4">
                {/* Coluna 1: Estratégias */}
                <div className="space-y-4">
                  <div className="bg-[#04695E] text-white p-4 rounded-lg font-medium text-center">Estratégias</div>
                  <div className="border border-[#04695E] p-3 rounded-lg text-sm">
                    <h3 className="font-medium text-[#04695E] mb-2">1. Expansão do uso de evidências</h3>
                    <p className="text-gray-600 text-xs">
                      No desenho e implementação de políticas públicas para as primeiras infâncias
                    </p>
                  </div>
                  <div className="border border-[#04695E] p-3 rounded-lg text-sm">
                    <h3 className="font-medium text-[#04695E] mb-2">2. Ampliação de diálogos</h3>
                    <p className="text-gray-600 text-xs">
                      Para o desenho e implementação de políticas para as primeiras infâncias
                    </p>
                  </div>
                  <div className="border border-[#04695E] p-3 rounded-lg text-sm">
                    <h3 className="font-medium text-[#04695E] mb-2">3. Fortalecimento de capacidades estatais</h3>
                    <p className="text-gray-600 text-xs">
                      Para a implementação de políticas e serviços públicos para as primeiras infâncias
                    </p>
                  </div>
                </div>

                {/* Coluna 2: Iniciativas */}
                <div className="space-y-4">
                  <div className="bg-[#04695E] text-white p-4 rounded-lg font-medium text-center">Iniciativas</div>
                  <div className="border border-[#A6CE39] p-3 rounded-lg text-sm">
                    <h3 className="font-medium text-[#04695E] mb-2">NCPI Dissemina</h3>
                    <p className="text-gray-600 text-xs">
                      Produção e disseminação de evidências para Políticas Públicas
                    </p>
                  </div>
                  <div className="border border-[#A6CE39] p-3 rounded-lg text-sm">
                    <h3 className="font-medium text-[#04695E] mb-2">Simpósio Internacional</h3>
                    <p className="text-gray-600 text-xs">Políticas Públicas voltadas às Primeiras Infâncias</p>
                  </div>
                  <div className="border border-[#A6CE39] p-3 rounded-lg text-sm">
                    <h3 className="font-medium text-[#04695E] mb-2">Prêmio</h3>
                    <p className="text-gray-600 text-xs">Ciência pelas Primeiras Infâncias</p>
                  </div>
                  <div className="border border-[#A6CE39] p-3 rounded-lg text-sm">
                    <h3 className="font-medium text-[#04695E] mb-2">ELP</h3>
                    <p className="text-gray-600 text-xs">Liderança Executiva para as Primeiras Infâncias</p>
                  </div>
                </div>

                {/* Coluna 3: Efeitos Primários */}
                <div className="space-y-4">
                  <div className="bg-[#04695E] text-white p-4 rounded-lg font-medium text-center">
                    Efeitos Primários
                  </div>
                  <div className="border border-gray-300 p-3 rounded-lg text-sm">
                    <p className="text-gray-600">
                      Agentes de implementação alcançados por mensagens-chave e mobilizados
                    </p>
                  </div>
                  <div className="border border-gray-300 p-3 rounded-lg text-sm">
                    <p className="text-gray-600">Agentes de implementação utilizando evidências contextualizadas</p>
                  </div>
                  <div className="border border-gray-300 p-3 rounded-lg text-sm">
                    <p className="text-gray-600">
                      Novos pesquisadores e áreas de conhecimento reconhecidos e conectados
                    </p>
                  </div>
                  <div className="border border-gray-300 p-3 rounded-lg text-sm">
                    <p className="text-gray-600">
                      Lideranças públicas conectadas ao campo e engajadas em agendas estruturantes
                    </p>
                  </div>
                  <div className="border border-gray-300 p-3 rounded-lg text-sm">
                    <p className="text-gray-600">Diálogo público fortalecido e boas práticas disseminadas</p>
                  </div>
                </div>

                {/* Coluna 4: Efeitos Secundários */}
                <div className="space-y-4">
                  <div className="bg-[#04695E] text-white p-4 rounded-lg font-medium text-center">
                    Efeitos Secundários
                  </div>
                  <div className="border border-gray-300 p-3 rounded-lg text-sm">
                    <p className="text-gray-600">
                      Maior demanda por políticas e serviços públicos com base em evidências
                    </p>
                  </div>
                  <div className="border border-gray-300 p-3 rounded-lg text-sm">
                    <p className="text-gray-600">Boas práticas de implementação amplamente difundidas</p>
                  </div>
                  <div className="border border-gray-300 p-3 rounded-lg text-sm">
                    <p className="text-gray-600">
                      Políticas, programas, planos e serviços públicos melhor implementados
                    </p>
                  </div>
                  <div className="border border-gray-300 p-3 rounded-lg text-sm">
                    <p className="text-gray-600">Diálogo público sobre primeiras infâncias ampliado e qualificado</p>
                  </div>
                  <div className="border border-gray-300 p-3 rounded-lg text-sm">
                    <p className="text-gray-600">
                      Comunidade epistêmica mais diversa, mais financiada e politicamente mais ativa
                    </p>
                  </div>
                </div>

                {/* Coluna 5: Impacto */}
                <div className="space-y-4">
                  <div className="bg-[#04695E] text-white p-4 rounded-lg font-medium text-center">Impacto</div>
                  <div className="border border-[#A6CE39] bg-[#F4F4EF] p-3 rounded-lg text-sm h-32 flex items-center">
                    <p className="text-[#04695E] font-medium">
                      Crianças e famílias alcançadas por políticas e serviços públicos acessíveis, de qualidade e
                      resolutivos
                    </p>
                  </div>
                  <div className="border border-[#A6CE39] bg-[#F4F4EF] p-3 rounded-lg text-sm h-32 flex items-center">
                    <p className="text-[#04695E] font-medium">
                      Campo das primeiras infâncias fortalecido: mais atores, recursos, produção e diversidade
                      epistêmica
                    </p>
                  </div>
                </div>
              </div>

              {/* Setas de conexão seriam implementadas com CSS ou SVG em uma implementação real */}
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500 italic">
            * Este diagrama é uma representação simplificada. Em uma implementação completa, as conexões entre os
            elementos seriam visualizadas com setas.
          </div>
        </div>

        {/* Agendas Transversais */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-4">Agendas Transversais</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mb-3">
                <Target className="h-6 w-6 text-[#04695E]" />
              </div>
              <h3 className="font-medium text-[#04695E] text-center mb-2">Implementação de Políticas Públicas</h3>
            </div>

            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-[#04695E]" />
              </div>
              <h3 className="font-medium text-[#04695E] text-center mb-2">Múltiplas Infâncias</h3>
            </div>

            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mb-3">
                <BarChart2 className="h-6 w-6 text-[#04695E]" />
              </div>
              <h3 className="font-medium text-[#04695E] text-center mb-2">Múltiplas Ciências</h3>
            </div>

            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mb-3">
                <Layers className="h-6 w-6 text-[#04695E]" />
              </div>
              <h3 className="font-medium text-[#04695E] text-center mb-2">Curadoria e Tradução</h3>
            </div>

            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-[#04695E]" />
              </div>
              <h3 className="font-medium text-[#04695E] text-center mb-2">Diálogo e Colaboração</h3>
            </div>

            <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#F4F4EF] flex items-center justify-center mb-3">
                <Zap className="h-6 w-6 text-[#04695E]" />
              </div>
              <h3 className="font-medium text-[#04695E] text-center mb-2">Comunidade NCPI</h3>
            </div>
          </div>
        </div>

        {/* Pressupostos */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-[#04695E] mb-4">Pressupostos</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-[#A6CE39] pl-4">
              <h3 className="font-medium text-[#04695E] mb-2">Desenvolvimento integral da criança</h3>
              <p className="text-gray-600 text-sm">
                A primeira infância é um período crucial para o desenvolvimento cerebral e o bem-estar físico e
                emocional da criança, impactando toda a sua vida futura. Estudos científicos indicam que experiências
                nessa fase influenciam o sucesso escolar e social, a saúde e o comportamento na vida adulta.
              </p>
            </div>

            <div className="border-l-4 border-[#A6CE39] pl-4">
              <h3 className="font-medium text-[#04695E] mb-2">Promoção e defesa dos direitos da criança</h3>
              <p className="text-gray-600 text-sm">
                O Marco Legal da Primeira Infância reitera que a infância deve ser prioridade absoluta na formulação de
                políticas públicas. O Estado, a sociedade e a família têm o dever de garantir a plena proteção e
                desenvolvimento da criança. O processo de formulação da Política Nacional Integrada da Primeira Infância
                é um evento de elevado potencial transformador e que merece atenção nos próximos anos.
              </p>
            </div>

            <div className="border-l-4 border-[#A6CE39] pl-4">
              <h3 className="font-medium text-[#04695E] mb-2">Redução de desigualdades sociais</h3>
              <p className="text-gray-600 text-sm">
                Investir na primeira infância, especialmente em crianças de famílias em situação de vulnerabilidade
                social, é uma estratégia comprovada para interromper ciclos intergeracionais de pobreza e desigualdade,
                além de trazer retornos econômicos significativos para a sociedade.
              </p>
            </div>

            <div className="border-l-4 border-[#A6CE39] pl-4">
              <h3 className="font-medium text-[#04695E] mb-2">Intersetorialidade</h3>
              <p className="text-gray-600 text-sm">
                Para garantir o pleno desenvolvimento infantil, é necessário integrar diferentes áreas de atuação, como
                saúde, educação, assistência social e justiça. A intersetorialidade facilita a coordenação de políticas
                e serviços voltados para a primeira infância, assegurando um atendimento mais completo e eficaz.
              </p>
            </div>

            <div className="border-l-4 border-[#A6CE39] pl-4">
              <h3 className="font-medium text-[#04695E] mb-2">Agenda 2030</h3>
              <p className="text-gray-600 text-sm">
                O Brasil é signatário da Agenda 2030 da ONU, que prevê, entre outros objetivos, o desenvolvimento pleno
                de todas as crianças, assegurando acesso a educação e cuidados na primeira infância como uma estratégia
                essencial para o desenvolvimento sustentável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
