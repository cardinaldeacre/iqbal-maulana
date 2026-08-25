import { AdminNavLink } from "./admin-nav-link";

const adminNavigation = [
    {
        href: "/admin",
        label: "Dashboard",
    },
    {
        href: "/admin/projects",
        label: "Projects",
    },
    {
        href: "/admin/experiences",
        label: "Experiences",
    },
    {
        href: "/admin/skills",
        label: "Skills",
    },
    {
        href: "/admin/achievements",
        label: "Achievements",
    },
    {
        href: "/admin/settings",
        label: "Settings",
    },
];

export function AdminSidebar() {
    return (
        <aside className="w-64 shrink-0 border-r bg-white p-5">
            <div className="mb-8">
                <p className="text-lg font-bold text-gray-900">
                    Portfolio Admin
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                    Content management
                </p>
            </div>

            <nav className="space-y-1">
                {adminNavigation.map((item) => (
                    <AdminNavLink
                        key={item.href}
                        {...item}
                    />
                ))}
            </nav>

            <div className="mt-10 border-t pt-5">
                <a
                    href="/"
                    className="block rounded-lg px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-100"
                >
                    View Portfolio
                </a>

                <a
                    href="/auth/logout"
                    className="mt-1 block rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                    Logout
                </a>
            </div>
        </aside>
    );
}