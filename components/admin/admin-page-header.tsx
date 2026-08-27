type AdminPageHeaderProps = {
    title: string;
    description?: string;
    action?: React.ReactNode;
};

export function AdminPageHeader({
    title,
    description,
    action,
}: AdminPageHeaderProps) {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <div className="mb-3 h-1 w-10 rounded-full bg-gold" />

                <h1 className="text-3xl font-bold tracking-tight text-white">
                    {title}
                </h1>

                {description && (
                    <p className="mt-2 max-w-2xl text-sm text-white/50">
                        {description}
                    </p>
                )}
            </div>

            {action && (
                <div className="shrink-0">
                    {action}
                </div>
            )}
        </div>
    );
}