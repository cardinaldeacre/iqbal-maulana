import type {InputHTMLAttributes} from 'react';

type AdminCheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
	label: string;
	description?: string;
};

export function AdminCheckbox({label, description, name, ...props}: AdminCheckboxProps) {
	return (
		<label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-sand-light p-4">
			<input name={name} type="checkbox" className="mt-1 h-4 w-4 accent-accent" {...props} />

			<span>
				<span className="block text-sm font-medium text-foreground">{label}</span>

				{description && <span className="mt-1 block text-xs text-muted">{description}</span>}
			</span>
		</label>
	);
}
