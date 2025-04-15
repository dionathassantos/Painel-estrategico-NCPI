"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Settings,
  Search,
  LayoutDashboard,
  BarChart2,
  LineChart,
  Users,
  Calendar,
  FileText,
  HelpCircle,
  Bell,
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
  const [dashboardSubmenuOpen, setDashboardSubmenuOpen] = useState(true)
  const [showNotifications, setShowNotifications] = useState(false)

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
      await logout()
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
          {/* Logo and Toggle Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            {!collapsed && (
              <Image src="/images/Logo-cor-NCPI.svg" alt="NCPI Logo" width={80} height={30} className="h-auto" />
            )}
            {collapsed && (
              <Image
                src="/images/Logo-cor-NCPI.svg"
                alt="NCPI Logo"
                width={40}
                height={20}
                className="h-auto mx-auto"
              />
            )}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className={`text-gray-400 hover:text-[#04695E] focus:outline-none ${collapsed ? "mx-auto" : ""}`}
            >
              {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
            </button>
          </div>

          {/* Search Bar */}
          {!collapsed && (
            <div className="px-4 py-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="w-full bg-gray-100 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#04695E]"
                />
              </div>
            </div>
          )}
          {collapsed && (
            <div className="py-3 flex justify-center">
              <button className="text-gray-400 hover:text-[#04695E] p-2 rounded-md hover:bg-gray-100">
                <Search size={20} />
              </button>
            </div>
          )}

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-2 space-y-1">
              {/* Dashboard with submenu */}
              <div>
                <button
                  onClick={() => setDashboardSubmenuOpen(!dashboardSubmenuOpen)}
                  className={`w-full flex items-center ${
                    collapsed ? "justify-center" : "justify-between"
                  } px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isDashboardActive ? "text-[#04695E] bg-[#F4F4EF]" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <LayoutDashboard size={20} className={isDashboardActive ? "text-[#04695E]" : "text-gray-500"} />
                    {!collapsed && <span className="ml-3">Painel Estratégico</span>}
                  </div>
                  {!collapsed && (
                    <div>
                      {dashboardSubmenuOpen ? (
                        <ChevronUp size={16} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={16} className="text-gray-400" />
                      )}
                    </div>
                  )}
                </button>

                {/* Submenu */}
                {dashboardSubmenuOpen && !collapsed && (
                  <div className="ml-8 mt-1 space-y-1">
                    <Link
                      href="/dashboard?porta=fora"
                      className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                        isDashboardActive && porta === "fora"
                          ? "text-[#04695E] bg-[#F4F4EF]"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <span>Porta para Fora</span>
                    </Link>
                    <Link
                      href="/dashboard?porta=dentro"
                      className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                        isDashboardActive && porta === "dentro"
                          ? "text-[#04695E] bg-[#F4F4EF]"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <span>Porta para Dentro</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Teoria da Mudança */}
              <Link
                href="/teoria-da-mudanca"
                className={`flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/teoria-da-mudanca" ? "text-[#04695E] bg-[#F4F4EF]" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <LineChart
                  size={20}
                  className={pathname === "/teoria-da-mudanca" ? "text-[#04695E]" : "text-gray-500"}
                />
                {!collapsed && <span className="ml-3">Teoria da Mudança</span>}
              </Link>

              {/* Governança */}
              <Link
                href="/governanca"
                className={`flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/governanca" ? "text-[#04695E] bg-[#F4F4EF]" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Users size={20} className={pathname === "/governanca" ? "text-[#04695E]" : "text-gray-500"} />
                {!collapsed && <span className="ml-3">Governança</span>}
              </Link>

              {/* Sistemática de Monitoramento */}
              <Link
                href="/sistematica-de-monitoramento"
                className={`flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/sistematica-de-monitoramento"
                    ? "text-[#04695E] bg-[#F4F4EF]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Calendar
                  size={20}
                  className={pathname === "/sistematica-de-monitoramento" ? "text-[#04695E]" : "text-gray-500"}
                />
                {!collapsed && <span className="ml-3">Monitoramento</span>}
              </Link>

              {/* Avaliações */}
              <Link
                href="/avaliacoes"
                className={`flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/avaliacoes" ? "text-[#04695E] bg-[#F4F4EF]" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FileText size={20} className={pathname === "/avaliacoes" ? "text-[#04695E]" : "text-gray-500"} />
                {!collapsed && <span className="ml-3">Avaliações</span>}
              </Link>

              {/* Relatórios */}
              <Link
                href="/relatorios"
                className={`flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/relatorios" ? "text-[#04695E] bg-[#F4F4EF]" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <BarChart2 size={20} className={pathname === "/relatorios" ? "text-[#04695E]" : "text-gray-500"} />
                {!collapsed && <span className="ml-3">Relatórios</span>}
              </Link>

              {/* Suporte */}
              <Link
                href="/suporte"
                className={`flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/suporte" ? "text-[#04695E] bg-[#F4F4EF]" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <HelpCircle size={20} className={pathname === "/suporte" ? "text-[#04695E]" : "text-gray-500"} />
                {!collapsed && <span className="ml-3">Suporte</span>}
              </Link>
            </nav>
          </div>

          {/* Bottom Menu */}
          <div className="border-t border-gray-100 pt-4 pb-6">
            <nav className="px-2 space-y-1">
              {/* Configurações */}
              <Link
                href="/settings"
                className={`flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === "/settings" ? "text-[#04695E] bg-[#F4F4EF]" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Settings size={20} className={pathname === "/settings" ? "text-[#04695E]" : "text-gray-500"} />
                {!collapsed && <span className="ml-3">Configurações</span>}
              </Link>

              {/* Notificações */}
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className={`w-full flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-100`}
              >
                <Bell size={20} className="text-gray-500" />
                {!collapsed && <span className="ml-3">Notificações</span>}
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className={`w-full flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-100`}
              >
                <LogOut size={20} className="text-gray-500" />
                {!collapsed && <span className="ml-3">Sair</span>}
              </button>
            </nav>
          </div>

          {/* User Profile */}
          <div className={`px-3 py-3 border-t border-gray-100 ${collapsed ? "text-center" : ""}`}>
            <div className={`flex ${collapsed ? "justify-center" : "items-center"}`}>
              <div className="w-8 h-8 rounded-full bg-[#04695E] flex items-center justify-center text-white text-xs font-bold">
                AS
              </div>
              {!collapsed && (
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">Ana Silva</p>
                  <p className="text-xs text-gray-500 truncate">ana.silva@ncpi.org</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-[#F4F4EF] overflow-hidden rounded-tr-[30px]">
          {/* Page Content */}
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  )
}
