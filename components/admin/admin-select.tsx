import type {SelectHTMLAttributes} from 'react';

type Option = {
	label: string;
	value: string;
};

type AdminSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
	label: string;
	options: Option[];
	hint?: string;
};

export function AdminSelect({
	label,
	options,
	hint,
	id,
	name,
	className = '',
	...props
}: AdminSelectProps) {
	const selectId = id ?? name;

	return (
		<div className="space-y-2">
			<label htmlFor={selectId} className="block text-sm font-medium text-surface">
				{label}
			</label>

			<select
				id={selectId}
				name={name}
				className={[
					'w-full rounded-xl border border-border',
					'bg-sand-light px-4 py-3 text-graphite',
					'outline-none transition',
					'focus:border-accent focus:ring-2 focus:ring-accent/15',
					className,
				].join(' ')}
				{...props}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>

			{hint && <p className="text-xs text-muted">{hint}</p>}
		</div>
	);
}
