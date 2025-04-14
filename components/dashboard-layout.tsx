"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  LogOut,
  Settings,
  Calendar,
  User,
  BarChart2,
  Users,
  LineChart,
  FileText,
} from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [collapsed, setCollapsed] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [isAdmin, setIsAdmin] = useState(true) // For demo purposes, set to true
  const [dashboardSubmenuOpen, setDashboardSubmenuOpen] = useState(true)
  const [pendingRequests, setPendingRequests] = useState<PendingRequest[]>([
    {
      id: "1",
      name: "Carlos Mendes",
      email: "carlos.mendes@example.com",
      date: "2023-06-15",
    },
    {
      id: "2",
      name: "Mariana Oliveira",
      email: "mariana.oliveira@example.com",
      date: "2023-06-14",
    },
  ])

  const { logout } = useAuth()
  const { toast } = useToast()

  // Handle initial state based on screen size
  useEffect(() => {
    setMounted(true)
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Determine if dashboard is active and which porta is selected
  const isDashboardActive = pathname.startsWith("/dashboard")
  const porta = searchParams.get("porta") || "fora"

  const handleLogout = async () => {
    try {
      // Show loading spinner or indicator if needed
      await logout()

      // Toast notification will appear on the login page
      toast({
        variant: "success",
        title: "Logout bem-sucedido",
        description: "Você foi desconectado com sucesso.",
      })
    } catch (error) {
      console.error("Logout error:", error)
      toast({
        variant: "destructive",
        title: "Erro ao sair",
        description: "Ocorreu um erro ao tentar sair. Tente novamente.",
      })
    }
  }

  const handleApproveRequest = (id: string) => {
    setPendingRequests((prev) => prev.filter((request) => request.id !== id))
    // In a real app, you would send this to your backend
  }

  const handleRejectRequest = (id: string) => {
    setPendingRequests((prev) => prev.filter((request) => request.id !== id))
    // In a real app, you would send this to your backend
  }

  if (!mounted) return null

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-[#04695E] p-6">
      {/* Main Container with rounded corners */}
      <div className="h-[95vh] w-[95vw] flex rounded-[30px] overflow-hidden shadow-xl">
        {/* Sidebar */}
        <div
          className={`h-full transition-all duration-300 ease-in-out flex flex-col shadow-md z-10 bg-white overflow-y-auto rounded-l-[30px] ${
            collapsed ? "w-[70px]" : "w-[240px]"
          }`}
        >
          {/* Toggle button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute left-[calc(var(--sidebar-width)-12px)] top-20 bg-white rounded-full p-1 shadow-md z-20"
            style={
              {
                "--sidebar-width": collapsed ? "70px" : "240px",
              } as React.CSSProperties
            }
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>

          {/* Logo */}
          <div className="mt-6 mb-8 flex justify-center shrink-0">
            <Image
              src="/abstract-blue-green.png"
              alt="NCPI Logo"
              width={collapsed ? 36 : 49}
              height={collapsed ? 34 : 46}
            />
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col items-center w-full overflow-y-auto scrollbar-thin">
            <div className={`w-full flex flex-col ${collapsed ? "items-center" : "items-start px-4"} space-y-1`}>
              {/* Dashboard with submenu */}
              <div className="w-full">
                <button
                  onClick={() => setDashboardSubmenuOpen(!dashboardSubmenuOpen)}
                  className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                    isDashboardActive ? "bg-[#F4F4EF] text-[#04695E] font-medium" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <BarChart2 size={20} className={isDashboardActive ? "text-[#04695E]" : "text-gray-600"} />
                  </div>
                  {!collapsed && (
                    <>
                      <span className="ml-3 text-sm">Painel Estratégico</span>
                      <div className="ml-auto">
                        {dashboardSubmenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </>
                  )}
                </button>

                {/* Submenu */}
                {dashboardSubmenuOpen && !collapsed && (
                  <div className="ml-12 mt-1 space-y-1">
                    <Link
                      href="/dashboard?porta=fora"
                      className={`flex items-center p-2 rounded-lg transition-colors ${
                        isDashboardActive && porta === "fora"
                          ? "bg-[#F4F4EF] text-[#04695E] font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-sm">Porta para Fora</span>
                    </Link>
                    <Link
                      href="/dashboard?porta=dentro"
                      className={`flex items-center p-2 rounded-lg transition-colors ${
                        isDashboardActive && porta === "dentro"
                          ? "bg-[#F4F4EF] text-[#04695E] font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-sm">Porta para Dentro</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/teoria-da-mudanca"
                className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                  pathname === "/teoria-da-mudanca"
                    ? "bg-[#F4F4EF] text-[#04695E] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <LineChart
                    size={20}
                    className={pathname === "/teoria-da-mudanca" ? "text-[#04695E]" : "text-gray-600"}
                  />
                </div>
                {!collapsed && <span className="ml-3 text-sm">Teoria da Mudança</span>}
              </Link>

              <Link
                href="/governanca"
                className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                  pathname === "/governanca"
                    ? "bg-[#F4F4EF] text-[#04695E] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Users size={20} className={pathname === "/governanca" ? "text-[#04695E]" : "text-gray-600"} />
                </div>
                {!collapsed && <span className="ml-3 text-sm">Governança</span>}
              </Link>

              <Link
                href="/sistematica-de-monitoramento"
                className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                  pathname === "/sistematica-de-monitoramento"
                    ? "bg-[#F4F4EF] text-[#04695E] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Calendar
                    size={20}
                    className={pathname === "/sistematica-de-monitoramento" ? "text-[#04695E]" : "text-gray-600"}
                  />
                </div>
                {!collapsed && <span className="ml-3 text-sm">Sistemática de Monitoramento</span>}
              </Link>

              <Link
                href="/avaliacoes"
                className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                  pathname === "/avaliacoes"
                    ? "bg-[#F4F4EF] text-[#04695E] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <FileText size={20} className={pathname === "/avaliacoes" ? "text-[#04695E]" : "text-gray-600"} />
                </div>
                {!collapsed && <span className="ml-3 text-sm">Avaliações</span>}
              </Link>

              <Link
                href="/settings"
                className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                  pathname === "/settings"
                    ? "bg-[#F4F4EF] text-[#04695E] font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Settings size={20} className={pathname === "/settings" ? "text-[#04695E]" : "text-gray-600"} />
                </div>
                {!collapsed && <span className="ml-3 text-sm">Configurações</span>}
              </Link>
            </div>
          </div>

          {/* User Profile */}
          {!collapsed && (
            <div className="mt-auto mb-6 mx-4 bg-gray-50 rounded-lg p-3 flex items-center shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#04695E] flex items-center justify-center text-white text-xs font-bold">
                AS
              </div>
              <div className="ml-2 text-xs">
                <div className="font-medium">Ana Silva</div>
                <div className="text-gray-500 text-[10px]">ana.silva@ncpi.org</div>
              </div>
            </div>
          )}

          {collapsed && (
            <div className="mt-auto mb-6 flex justify-center shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#04695E] flex items-center justify-center text-white text-xs font-bold">
                AS
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-[#F4F4EF] overflow-hidden rounded-tr-[30px]">
          {/* Header */}
          <header className="bg-[#F4F4EF] p-4 flex justify-between items-center border-b border-gray-200 shrink-0">
            <div className="flex items-center">
              <h1 className="text-[#04695E] text-xl font-bold">Painel Estratégico NCPI</h1>
              <Image src="/brazil-outline-map.png" alt="Brazil Map" width={60} height={40} className="ml-4" />
            </div>

            <div className="flex items-center space-x-6 pr-6">
              {isAdmin && (
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="text-gray-600 hover:text-[#04695E] focus:outline-none relative"
                  >
                    <Bell size={20} />
                    {pendingRequests.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {pendingRequests.length}
                      </span>
                    )}
                  </button>

                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
                      <div className="p-3 border-b border-gray-200">
                        <h3 className="text-sm font-semibold">Notificações</h3>
                      </div>

                      {pendingRequests.length > 0 ? (
                        <div className="max-h-96 overflow-y-auto">
                          {pendingRequests.map((request) => (
                            <div key={request.id} className="p-3 border-b border-gray-100 hover:bg-gray-50">
                              <div className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-3">
                                  <User size={16} />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium">{request.name}</p>
                                  <p className="text-xs text-gray-500">{request.email}</p>
                                  <p className="text-xs text-gray-400 mt-1">
                                    Solicitação de acesso: {new Date(request.date).toLocaleDateString()}
                                  </p>
                                  <div className="flex mt-2 space-x-2">
                                    <button
                                      onClick={() => handleApproveRequest(request.id)}
                                      className="text-xs bg-[#0DBAAD] text-white px-2 py-1 rounded-md hover:bg-[#04695E]"
                                    >
                                      Aprovar
                                    </button>
                                    <button
                                      onClick={() => handleRejectRequest(request.id)}
                                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300"
                                    >
                                      Rejeitar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 text-center text-gray-500 text-sm">Não há notificações no momento.</div>
                      )}
                    </div>
                  )}
                </div>
              )}

              <button
                onClick={handleLogout}
                className="text-gray-600 hover:text-[#04695E] focus:outline-none flex items-center"
              >
                <LogOut size={20} />
                {!collapsed && <span className="ml-2 text-sm">Sair</span>}
              </button>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto bg-[#F4F4EF] pl-0 pr-6 py-6">{children}</main>
        </div>
      </div>
    </div>
  )
}

interface PendingRequest {
  id: string
  name: string
  email: string
  date: string
}
