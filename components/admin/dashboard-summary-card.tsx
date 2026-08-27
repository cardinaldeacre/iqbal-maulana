type DashboardSummaryCardProps = {
    label: string;
    value: number;
};

export function DashboardSummaryCard({
    label,
    value,
}: DashboardSummaryCardProps) {
    return (
        <div className="rounded-2xl border border-gold/20 bg-sand-light p-5 text-charcoal shadow-sm">
            <div className="mb-4 h-1 w-8 rounded-full bg-gold" />

            <p className="text-sm font-medium text-stone">
                {label}
            </p>

            <p className="mt-2 text-3xl font-bold text-charcoal">
                {value}
            </p>
        </div>
    );
}