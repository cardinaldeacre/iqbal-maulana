import type { ReactNode } from "react";

import { AdminSidebar } from "./admin-sidebar";

type AdminShellProps = {
    children: ReactNode;
};

export function AdminShell({
    children,
}: AdminShellProps) {
    return (
        <div className="flex min-h-screen bg-neutral-50">
            <AdminSidebar />

            <div className="min-w-0 flex-1">
                {children}
            </div>
        </div>
    );
}