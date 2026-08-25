import type {ButtonHTMLAttributes, ReactNode} from 'react';

type AdminSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

export function AdminSubmitButton({children, className = '', ...props}: AdminSubmitButtonProps) {
	return (
		<button
			type="submit"
			className={[
				'inline-flex items-center justify-center',
				'rounded-xl bg-gold px-5 py-3',
				'font-medium text-primary-foreground',
				'transition hover:bg-graphite',
				'disabled:cursor-not-allowed disabled:opacity-50',
				className,
			].join(' ')}
			{...props}>
			{children}
		</button>
	);
}
