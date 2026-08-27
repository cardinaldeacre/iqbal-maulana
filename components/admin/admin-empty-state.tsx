export function AdminEmptyState({message}: {message: string}) {
	return (
		<div className="rounded-2xl border border-dashed border-border bg-surface-soft/60 p-10 text-center">
			<div className="mx-auto mb-3 h-2 w-2 rounded-full bg-accent" />

			<p className="text-sm text-graphite">{message}</p>
		</div>
	);
}
