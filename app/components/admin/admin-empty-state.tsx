export function AdminEmptyState({
    message,
}: {
    message: string;
}) {
    return (
        <div className="rounded-xl border p-8 text-center text-neutral-500">
            {message}
        </div>
    );
}