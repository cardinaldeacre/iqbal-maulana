import type {InputHTMLAttributes} from 'react';

type AdminFileInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
	label: string;
	hint?: string;
};

export function AdminFileInput({label, hint, name, className = '', ...props}: AdminFileInputProps) {
	return (
		<div className="space-y-2">
			<label htmlFor={name} className="block text-sm font-medium text-foreground">
				{label}
			</label>

			<input
				id={name}
				name={name}
				type="file"
				className={[
					'block w-full rounded-xl border border-border',
					'bg-sand-light p-3 text-sm text-graphite',
					'file:mr-4 file:rounded-lg file:border-0',
					'file:bg-gold file:px-4 file:py-2',
					'file:text-sm file:font-medium file:text-foreground',
					'hover:file:bg-gold-light',
					className,
				].join(' ')}
				{...props}
			/>

			{hint && <p className="text-xs text-muted">{hint}</p>}
		</div>
	);
}
