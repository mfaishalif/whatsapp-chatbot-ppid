// Sidebar navigation data
export function getSidebarData(pathname: string) {
  return {
    navMain: [
      {
        title: "Manajemen Permohonan Informasi",
        url: "#",
        icon: "FolderOpen",
        items: [
          { title: "Antrian Permohonan", url: "/AntrianPermohonan", isActive: pathname === "/AntrianPermohonan" },
          { title: "History Permohonan", url: "#", isActive: pathname === "#" },
        ],
      },
      {
        title: "Manajemen Informasi Publik",
        url: "#",
        icon: "FileText",
        items: [
          { title: "Kelola Informasi", url: "/KelolaInformasi", isActive: pathname === "/KelolaInformasi" },
          { title: "Tambahkan Informasi", url: "#", isActive: pathname === "#" },
        ],
      },
    ],
  }
}