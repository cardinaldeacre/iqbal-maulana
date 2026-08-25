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
        <div className="flex items-center justify-between gap-4">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">
                    {title}
                </h1>

                {description && (
                    <p className="mt-1 text-neutral-500">
                        {description}
                    </p>
                )}
            </div>

            {action}
        </div>
    );
}