import type {InputHTMLAttributes} from 'react';

type AdminInputProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	error?: string;
	hint?: string;
};

export function AdminInput({
	label,
	error,
	hint,
	id,
	name,
	className = '',
	...props
}: AdminInputProps) {
	const inputId = id ?? name;

	return (
		<div className="space-y-2">
			<label htmlFor={inputId} className="block text-sm font-medium text-surface">
				{label}
			</label>

			<input
				id={inputId}
				name={name}
				className={[
					'w-full rounded-xl border border-border',
					'bg-sand-light px-4 py-3 text-graphite',
					'placeholder:text-muted',
					'outline-none transition',
					'focus:border-accent focus:ring-2 focus:ring-accent/15',
					'disabled:cursor-not-allowed disabled:opacity-50',
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
