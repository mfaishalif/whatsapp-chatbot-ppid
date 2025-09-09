import { ChevronRight, FileText, FolderOpen, Home } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// Collapsible items
const data = {
  navMain: [
    {
      title: "Manajemen Permohonan Informasi",
      url: "#",
      icon: FolderOpen,
      items: [
        { title: "Antrian Permohonan", url: "#" },
        { title: "History Permohonan", url: "#" },
      ],
    },
    {
      title: "Manajemen Informasi Publik",
      url: "#",
      icon: FileText,
      items: [
        { title: "Kelola Informasi", url: "#", isActive: true },
        { title: "Tambahkan Informasi", url: "#" },
      ],
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar className="flex px-4 flex-col items-start shrink-0 border-r bg-neutral-50">
      {/* User Mini Profile Components */}
      <div className="w-59.5 h-20 min-h-9 px-3 py-2 bg-neutral-50 rounded-md inline-flex justify-start items-center gap-3">
        <div data-size="Large" data-type="Avatar" className="w-10 h-10 relative">
          <div data-picture="On" data-roundness-type="Round" data-size="Regular" className="w-8 h-8 left-[4px] top-[4px] absolute overflow-hidden">
          <img className="w-8 h-8 left-0 top-0 absolute rounded-full" src="https://placehold.co/32x32" />
          </div>
        </div>
        <div className="flex-1 inline-flex flex-col items-start justify-center">
          <div className="text-neutral-900 text-sm font-normal leading-tight tracking-tight">
            PPID
          </div>
          <div className="text-neutral-900 text-xs font-normal leading-none tracking-tight">
            Bojonegoro
          </div>
        </div>
      </div>

      {/* Sidebar Contents */}
      <SidebarContent className="pl-1">
        <SidebarGroup>
          <SidebarGroupLabel className="self-stretch px-3 py-1.5 rounded-sm inline-flex justify-start items-center gap-2 text-black text-lg">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Beranda (non-collapsible) */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Home />
                    <span>Beranda</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Collapsible menus */}
              {data.navMain.map((group) => (
                <Collapsible
                  key={group.title}
                  defaultOpen
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    {/* Collapsible trigger styled like a menu item */}
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        className="flex items-start gap-2 text-left whitespace-normal w-full h-auto"
                      >
                        <group.icon className="w-4 h-4 flex-shrink-0 self-center" />
                        <span className="flex-1 whitespace-normal break-words leading-snug">
                          {group.title}
                        </span>
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    {/* Submenu items, also styled the same */}
                    <CollapsibleContent>
                      <SidebarMenu className="pl-6">
                        {group.items.map((subItem) => (
                          <SidebarMenuItem key={subItem.title}>
                            <SidebarMenuButton
                              asChild
                              isActive={subItem.isActive}
                              className={subItem.isActive ? "bg-[#2a2a2a] text-white font-normal" : "font-normal"}
                            >
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <div className="w-full h-8 px-4 py-2 bg-neutral-50 rounded-md inline-flex justify-between items-center gap-2 mt-auto">
        <a href="#" className="text-sm text-neutral-900 font-bold">
          Log out
        </a>
        <button className="p-1 hover:bg-neutral-200 rounded">
          {/* Example icon (X). Swap with lucide-react LogOut if needed */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Sidebar>
  )
}

export { Sidebar }
