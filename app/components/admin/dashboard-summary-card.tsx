type DashboardSummaryCardProps = {
    label: string;
    value: number;
};

export function DashboardSummaryCard({
    label,
    value,
}: DashboardSummaryCardProps) {
    return (
        <div className="rounded-xl border bg-white p-5">
            <p className="text-sm text-neutral-500">
                {label}
            </p>

            <p className="mt-2 text-3xl font-bold">
                {value}
            </p>
        </div>
    );
}