import type {TextareaHTMLAttributes} from 'react';

type AdminTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label: string;
	error?: string;
	hint?: string;
};

export function AdminTextarea({
	label,
	error,
	hint,
	id,
	name,
	className = '',
	...props
}: AdminTextareaProps) {
	const textareaId = id ?? name;

	return (
		<div className="space-y-2">
			<label htmlFor={textareaId} className="block text-sm font-medium text-foreground">
				{label}
			</label>

			<textarea
				id={textareaId}
				name={name}
				className={[
					'w-full resize-y rounded-xl border border-border',
					'bg-sand-light px-4 py-3 text-graphite',
					'placeholder:text-muted',
					'outline-none transition',
					'focus:border-accent focus:ring-2 focus:ring-accent/15',
					error ? 'border-red-500' : '',
					className,
				].join(' ')}
				{...props}
			/>

			{hint && !error && <p className="text-xs text-muted">{hint}</p>}

			{error && <p className="text-xs text-red-600">{error}</p>}
		</div>
	);
}
