export default function AdminDashboard() {
    return (
        <div className="max-w-4xl space-y-8">
            <h1 className="text-4xl font-black text-structure">DASHBOARD GENERAL</h1>
            <p className="text-gray-600">Bienvenido al panel de administración de contenido. Desde aquí podrá controlar todos los textos, imágenes y configuraciones del sitio web.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-bg-light p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-structure">Estado de la Base de Datos</h3>
                    <div className="flex items-center gap-2 text-green-600">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="text-sm font-medium">Supabase Conectado</span>
                    </div>
                </div>

                <div className="bg-bg-light p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-structure">Páginas Editables</h3>
                    <p className="text-3xl font-black text-primary">5</p>
                </div>

                <div className="bg-bg-light p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-structure">Solicitudes API</h3>
                    <p className="text-3xl font-black text-blue-600">24</p>
                    <p className="text-xs text-gray-400">En las últimas 24 hrs</p>
                </div>
            </div>

            <div className="mt-12 bg-bg-light p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-structure mb-4">Próximos Pasos de Migración (CMS)</h2>
                <p className="text-gray-600 mb-6">Para hacer el sitio web 100% dinámico, el proceso de arquitectura escalable requiere:</p>
                <ol className="list-decimal pl-5 space-y-4 text-gray-700">
                    <li><strong className="text-structure">Crear Tablas en Supabase:</strong> Tablas separadas para `pages_content`, `site_settings` y `media_assets`.</li>
                    <li><strong className="text-structure">Integrar Autenticación:</strong> Bloquear este dashboard usando Supabase Auth para que solo administradores puedan acceder.</li>
                    <li><strong className="text-structure">Conectar Fronend al Backend:</strong> Reemplazar los textos duros en componentes como `Hero.tsx` con llamadas `fetch` a la base de datos de Supabase.</li>
                </ol>
            </div>
        </div>
    );
}
