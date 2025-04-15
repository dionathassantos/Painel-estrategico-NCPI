import { DashboardLayout } from "@/components/dashboard-layout"
import { MessageSquare, Mail, Phone, FileText, ExternalLink } from "lucide-react"

export default function SuportePage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#04695E] mb-4">Suporte</h1>
          <p className="text-gray-600 mb-6">
            Encontre ajuda e recursos para utilizar o Painel Estratégico NCPI de forma eficiente.
          </p>
        </div>

        {/* Canais de Suporte */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F4F4EF] flex items-center justify-center mr-4">
                <MessageSquare className="h-5 w-5 text-[#04695E]" />
              </div>
              <h2 className="text-lg font-semibold text-[#04695E]">Chat</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Converse em tempo real com nossa equipe de suporte para resolver suas dúvidas rapidamente.
            </p>
            <button className="bg-[#0DBAAD] text-white py-2 px-4 rounded-md hover:bg-[#04695E] transition-colors w-full">
              Iniciar Chat
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F4F4EF] flex items-center justify-center mr-4">
                <Mail className="h-5 w-5 text-[#04695E]" />
              </div>
              <h2 className="text-lg font-semibold text-[#04695E]">E-mail</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Envie suas dúvidas por e-mail e receba uma resposta detalhada em até 24 horas úteis.
            </p>
            <a
              href="mailto:suporte@ncpi.org"
              className="block bg-[#0DBAAD] text-white py-2 px-4 rounded-md hover:bg-[#04695E] transition-colors w-full text-center"
            >
              suporte@ncpi.org
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F4F4EF] flex items-center justify-center mr-4">
                <Phone className="h-5 w-5 text-[#04695E]" />
              </div>
              <h2 className="text-lg font-semibold text-[#04695E]">Telefone</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Prefere falar diretamente? Ligue para nossa central de atendimento em horário comercial.
            </p>
            <a
              href="tel:+551130000000"
              className="block bg-[#0DBAAD] text-white py-2 px-4 rounded-md hover:bg-[#04695E] transition-colors w-full text-center"
            >
              (11) 3000-0000
            </a>
          </div>
        </div>

        {/* Perguntas Frequentes */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-[#04695E] mb-6">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Como posso adicionar uma nova iniciativa?</h3>
              <p className="text-gray-600">
                Para adicionar uma nova iniciativa, acesse o Painel Estratégico e clique no botão "Nova Iniciativa" no
                canto superior direito da seção de iniciativas. Preencha o formulário com as informações necessárias e
                clique em "Criar Iniciativa".
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Como editar uma meta existente?</h3>
              <p className="text-gray-600">
                Para editar uma meta, expanda a iniciativa correspondente, depois expanda o resultado que contém a meta.
                Na tabela de metas, clique no ícone de edição (lápis) na coluna "Ações" da meta que deseja modificar.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Como funcionam os status das metas?</h3>
              <p className="text-gray-600">
                Os status das metas são classificados em cinco categorias: Satisfatório (verde), Alerta (amarelo),
                Crítico (vermelho), Concluído (azul) e Não Monitorado (cinza). Eles indicam o progresso e a situação
                atual de cada meta.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Como exportar relatórios?</h3>
              <p className="text-gray-600">
                Para exportar relatórios, acesse a seção "Relatórios", selecione os filtros desejados e clique no botão
                "Exportar PDF" ou "Gerar Relatório" para relatórios personalizados.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Quem pode editar as informações no painel?</h3>
              <p className="text-gray-600">
                Apenas usuários com permissões de administrador ou editor podem modificar as informações no painel. Se
                você precisa de acesso para edição, entre em contato com o administrador do sistema.
              </p>
            </div>
          </div>
        </div>

        {/* Documentação */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-[#04695E] mb-6">Documentação</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 text-[#04695E] mr-2" />
                <h3 className="font-medium text-gray-700">Manual do Usuário</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Guia completo com todas as funcionalidades do Painel Estratégico NCPI.
              </p>
              <a href="#" className="flex items-center text-[#0DBAAD] hover:text-[#04695E] text-sm">
                <ExternalLink size={14} className="mr-1" />
                Acessar documento
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 text-[#04695E] mr-2" />
                <h3 className="font-medium text-gray-700">Guia de Início Rápido</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Aprenda os conceitos básicos para começar a usar o painel em minutos.
              </p>
              <a href="#" className="flex items-center text-[#0DBAAD] hover:text-[#04695E] text-sm">
                <ExternalLink size={14} className="mr-1" />
                Acessar documento
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 text-[#04695E] mr-2" />
                <h3 className="font-medium text-gray-700">Glossário de Termos</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Definições dos principais termos e conceitos utilizados no painel.
              </p>
              <a href="#" className="flex items-center text-[#0DBAAD] hover:text-[#04695E] text-sm">
                <ExternalLink size={14} className="mr-1" />
                Acessar documento
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 text-[#04695E] mr-2" />
                <h3 className="font-medium text-gray-700">Vídeos Tutoriais</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Série de vídeos explicativos sobre como utilizar o painel estratégico.
              </p>
              <a href="#" className="flex items-center text-[#0DBAAD] hover:text-[#04695E] text-sm">
                <ExternalLink size={14} className="mr-1" />
                Acessar vídeos
              </a>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
