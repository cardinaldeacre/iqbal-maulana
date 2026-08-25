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
            ? pathname === "/admin"
            : pathname === href ||
            pathname.startsWith(`${href}/`);

    return (
        <Link
            href={href}
            className={[
                "block rounded-xl px-3 py-2 text-sm font-medium transition",
                active
                    ? "bg-gold text-charcoal shadow-sm"
                    : "text-white/60 hover:bg-white/5 hover:text-white",
            ].join(" ")}
        >
            {label}
        </Link>
    );
}