import { Outlet, useLocation } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { getSidebarData } from "@/lib/sidebarData"

function getBreadcrumb(pathname: string) {
  const sidebarData = getSidebarData(pathname)
  if (pathname === "/" || pathname === "#") {
    return { parent: undefined, current: "Beranda" }
  }
  for (const group of sidebarData.navMain) {
    for (const item of group.items) {
      if (item.url === pathname) {
        return { parent: group.title, current: item.title }
      }
    }
  }
  return { parent: undefined, current: "Halaman" }
}

export default function Sidebar() {
  const location = useLocation()
  const { pathname } = location
  const breadcrumb = getBreadcrumb(pathname)

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
                {breadcrumb.parent && (
                  <>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">{breadcrumb.parent}</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                  </>
                )}
                <BreadcrumbItem>
                  <BreadcrumbPage>{breadcrumb.current}</BreadcrumbPage>
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
