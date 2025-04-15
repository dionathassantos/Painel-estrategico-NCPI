import { DashboardLayout } from "@/components/dashboard-layout"
import { BarChart2, PieChart, LineChart, Download, Filter } from "lucide-react"

export default function RelatoriosPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#04695E] mb-4">Relatórios</h1>
          <p className="text-gray-600 mb-6">
            Visualize e exporte relatórios detalhados sobre o progresso das iniciativas, resultados e metas do NCPI.
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-[#04695E]">Filtros</h2>
            <button className="flex items-center text-[#0DBAAD] hover:text-[#04695E]">
              <Filter size={16} className="mr-2" />
              <span>Limpar filtros</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="periodo" className="block text-sm font-medium text-gray-700 mb-1">
                Período
              </label>
              <select
                id="periodo"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04695E]"
              >
                <option value="2025-2027">2025 - 2027 (Todos)</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>

            <div>
              <label htmlFor="porta" className="block text-sm font-medium text-gray-700 mb-1">
                Porta
              </label>
              <select
                id="porta"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04695E]"
              >
                <option value="todas">Todas</option>
                <option value="fora">Porta para Fora</option>
                <option value="dentro">Porta para Dentro</option>
              </select>
            </div>

            <div>
              <label htmlFor="iniciativa" className="block text-sm font-medium text-gray-700 mb-1">
                Iniciativa
              </label>
              <select
                id="iniciativa"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04695E]"
              >
                <option value="todas">Todas</option>
                <option value="ncpi-dissemina">NCPI Dissemina</option>
                <option value="simposio">Simpósio Internacional</option>
                <option value="premio">Prêmio</option>
                <option value="elp">ELP</option>
              </select>
            </div>
          </div>
        </div>

        {/* Relatórios Disponíveis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F4F4EF] flex items-center justify-center mr-4">
                <BarChart2 className="h-5 w-5 text-[#04695E]" />
              </div>
              <h2 className="text-lg font-semibold text-[#04695E]">Progresso das Metas</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Relatório detalhado sobre o progresso de todas as metas, agrupadas por iniciativa e resultado.
            </p>
            <button className="flex items-center text-[#0DBAAD] hover:text-[#04695E] mt-2">
              <Download size={16} className="mr-2" />
              <span>Exportar PDF</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F4F4EF] flex items-center justify-center mr-4">
                <PieChart className="h-5 w-5 text-[#04695E]" />
              </div>
              <h2 className="text-lg font-semibold text-[#04695E]">Distribuição de Status</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Análise da distribuição de status (satisfatório, alerta, crítico, concluído) por iniciativa.
            </p>
            <button className="flex items-center text-[#0DBAAD] hover:text-[#04695E] mt-2">
              <Download size={16} className="mr-2" />
              <span>Exportar PDF</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F4F4EF] flex items-center justify-center mr-4">
                <LineChart className="h-5 w-5 text-[#04695E]" />
              </div>
              <h2 className="text-lg font-semibold text-[#04695E]">Evolução Temporal</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Análise da evolução do progresso das metas ao longo do tempo, com comparativos entre períodos.
            </p>
            <button className="flex items-center text-[#0DBAAD] hover:text-[#04695E] mt-2">
              <Download size={16} className="mr-2" />
              <span>Exportar PDF</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F4F4EF] flex items-center justify-center mr-4">
                <BarChart2 className="h-5 w-5 text-[#04695E]" />
              </div>
              <h2 className="text-lg font-semibold text-[#04695E]">Relatório Executivo</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Resumo executivo com os principais indicadores, destaques e pontos de atenção para a gestão.
            </p>
            <button className="flex items-center text-[#0DBAAD] hover:text-[#04695E] mt-2">
              <Download size={16} className="mr-2" />
              <span>Exportar PDF</span>
            </button>
          </div>
        </div>

        {/* Relatórios Personalizados */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-[#04695E] mb-4">Relatório Personalizado</h2>
          <p className="text-gray-600 mb-6">
            Crie um relatório personalizado selecionando os dados e métricas específicos que você deseja visualizar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="metricas" className="block text-sm font-medium text-gray-700 mb-1">
                Métricas
              </label>
              <select
                id="metricas"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04695E]"
              >
                <option value="todas">Todas as métricas</option>
                <option value="progresso">Progresso das metas</option>
                <option value="status">Distribuição de status</option>
                <option value="responsaveis">Metas por responsável</option>
              </select>
            </div>

            <div>
              <label htmlFor="formato" className="block text-sm font-medium text-gray-700 mb-1">
                Formato de Exportação
              </label>
              <select
                id="formato"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04695E]"
              >
                <option value="pdf">PDF</option>
                <option value="excel">Excel</option>
                <option value="csv">CSV</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-[#0DBAAD] text-white py-2 px-6 rounded-full hover:bg-[#04695E] transition-colors">
              Gerar Relatório
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
