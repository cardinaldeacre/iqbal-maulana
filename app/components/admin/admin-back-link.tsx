import Link from "next/link";

type AdminBackLinkProps = {
    href: string;
    label?: string;
};

export function AdminBackLink({
    href,
    label = "Back",
}: AdminBackLinkProps) {
    return (
        <Link
            href={href}
            className="
        inline-flex items-center gap-2
        text-sm font-medium text-muted
        transition hover:text-foreground
      "
        >
            ← {label}
        </Link>
    );
}