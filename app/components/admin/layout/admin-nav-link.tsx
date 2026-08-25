"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminNavLinkProps = {
    href: string;
    label: string;
};

export function AdminNavLink({
    href,
    label,
}: AdminNavLinkProps) {
    const pathname = usePathname();

    const active =
        href === "/admin"
            ? pathname === href
            : pathname.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            className={[
                "block rounded-lg px-3 py-2 text-sm transition",
                active
                    ? "bg-black text-white"
                    : "text-neutral-600 hover:bg-neutral-100",
            ].join(" ")}
        >
            {label}
        </Link>
    );
}