'use client';

import {useState} from 'react';
import {Check, ChevronDown, X} from 'lucide-react';

type Option = {
	label: string;
	value: string;
};

type AdminMultiSelectProps = {
	label: string;
	name: string;
	options: Option[];
	defaultValue?: string[];
};

export function AdminMultiSelect({label, name, options, defaultValue = []}: AdminMultiSelectProps) {
	const [selected, setSelected] = useState<string[]>(defaultValue);
	const [open, setOpen] = useState(false);

	const toggleOption = (value: string) => {
		setSelected((current) =>
			current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
		);
	};

	const removeOption = (value: string) => {
		setSelected((current) => current.filter((item) => item !== value));
	};

	return (
		<div className="space-y-2">
			<label className="text-sm font-medium text-white/80">{label}</label>

			{selected.map((value) => (
				<input key={value} type="hidden" name={name} value={value} />
			))}

			{selected.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{selected.map((value) => {
						const option = options.find((item) => item.value === value);

						return (
							<button
								key={value}
								type="button"
								onClick={() => removeOption(value)}
								className="
                                    group flex items-center gap-1.5
                                    rounded-full
                                    border border-gold/20
                                    bg-gold/10
                                    px-3 py-1.5
                                    text-xs font-medium
                                    text-gold-light
                                    transition
                                    hover:border-gold/40
                                    hover:bg-gold/15
                                ">
								{option?.label ?? value}

								<X
									className="
                                        size-3
                                        opacity-50
                                        transition
                                        group-hover:opacity-100
                                    "
								/>
							</button>
						);
					})}
				</div>
			)}

			<div>
				<button
					type="button"
					onClick={() => setOpen((current) => !current)}
					className="
						flex h-11 w-full
						items-center justify-between
						rounded-xl
						border border-white/10
						bg-white/3
						px-4
						text-left text-sm
						text-white/60
						outline-none
						transition
						hover:border-white/20
						focus:border-gold/40
						focus:ring-2
						focus:ring-gold/10
					">
					<span>
						{selected.length === 0
							? 'Select technologies'
							: `${selected.length} technologies selected`}
					</span>

					<ChevronDown
						className={`
							size-4 transition-transform
							${open ? 'rotate-180' : ''}
						`}
					/>
				</button>

				{open && (
					<div
						className="
							mt-2
							max-h-64
							w-full
							overflow-y-auto
							rounded-xl
							border border-white/10
							bg-charcoal
							p-2
							shadow-2xl
							animate-in
							fade-in-0
							slide-in-from-top-1
							duration-150
							">
						{options.map((option) => {
							const isSelected = selected.includes(option.value);

							return (
								<button
									key={option.value}
									type="button"
									onClick={() => toggleOption(option.value)}
									className="
										flex w-full
										items-center justify-between
										rounded-lg
										px-3 py-2.5
										text-left text-sm
										text-white/70
										transition
										hover:bg-white/5
										hover:text-white
									">
									{option.label}

									{isSelected && <Check className="size-4 text-gold" />}
								</button>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}
