import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export default function Sidebar() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-screen">
        <AppSidebar />

        {/* force main to stretch */}
        <main className="flex-1 w-full p-6 flex flex-col">
          <div className="self-start mb-4 flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Manajemen Informasi Publik
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Kelola Informasi</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Outlet must also be full width */}
          <div className="flex-1 w-full overflow-x-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
