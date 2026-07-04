import { Metadata } from "next";
import Link from "next/link";
import { Settings, Image as ImageIcon, FileText, LayoutDashboard, LogOut } from "lucide-react";

export const metadata: Metadata = {
    title: "Admin Dashboard | Clienses",
    description: "Panel de control para gestionar el contenido del sitio web.",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-bg-light text-text-main flex flex-col">
                <div className="p-6 border-b border-text-main/10">
                    <h1 className="text-xl font-black  uppercase">
                        CLIENSES<span className="text-primary">.</span> ADMIN
                    </h1>
                </div>

                <nav className="flex-1 py-6 space-y-2">
                    <Link href="/admin" className="flex items-center gap-3 px-6 py-3 text-text-main/70 hover:text-text-main hover:bg-text-main/5 transition-colors">
                        <LayoutDashboard size={20} />
                        <span className="text-sm font-bold ">Dashboard</span>
                    </Link>

                    <div className="px-6 py-3 mt-4">
                        <p className="text-xs font-black  uppercase text-primary">Páginas</p>
                    </div>

                    <Link href="/admin/pages/home" className="flex items-center gap-3 px-6 py-2 text-text-main/50 hover:text-text-main hover:bg-text-main/5 transition-colors">
                        <FileText size={18} />
                        <span className="text-sm">Inicio (Home)</span>
                    </Link>
                    <Link href="/admin/pages/strategy" className="flex items-center gap-3 px-6 py-2 text-text-main/50 hover:text-text-main hover:bg-text-main/5 transition-colors">
                        <FileText size={18} />
                        <span className="text-sm">Estrategia</span>
                    </Link>
                    <Link href="/admin/pages/intelligence" className="flex items-center gap-3 px-6 py-2 text-text-main/50 hover:text-text-main hover:bg-text-main/5 transition-colors">
                        <FileText size={18} />
                        <span className="text-sm">Inteligencia</span>
                    </Link>
                    <Link href="/admin/pages/expansion" className="flex items-center gap-3 px-6 py-2 text-text-main/50 hover:text-text-main hover:bg-text-main/5 transition-colors">
                        <FileText size={18} />
                        <span className="text-sm">Escalamiento</span>
                    </Link>

                    <div className="px-6 py-3 mt-4">
                        <p className="text-xs font-black  uppercase text-primary">Media & Ajustes</p>
                    </div>

                    <Link href="/admin/media" className="flex items-center gap-3 px-6 py-2 text-text-main/50 hover:text-text-main hover:bg-text-main/5 transition-colors">
                        <ImageIcon size={18} />
                        <span className="text-sm">Imágenes</span>
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-6 py-2 text-text-main/50 hover:text-text-main hover:bg-text-main/5 transition-colors">
                        <Settings size={18} />
                        <span className="text-sm">Ajustes Globales</span>
                    </Link>
                </nav>

                <div className="p-6 border-t border-text-main/10">
                    <Link href="/" className="flex items-center gap-3 text-text-main/50 hover:text-primary transition-colors">
                        <LogOut size={18} />
                        <span className="text-sm">Volver al Sitio</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-auto">
                {children}
            </main>
        </div>
    );
}
