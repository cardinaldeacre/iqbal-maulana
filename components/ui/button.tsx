import {Button as ButtonPrimitive} from '@base-ui/react/button';
import {cva, type VariantProps} from 'class-variance-authority';

import {cn} from '@/lib/utils';

const buttonVariants = cva(
	[
		'group/button',
		'inline-flex shrink-0 items-center justify-center',
		'whitespace-nowrap select-none',
		'rounded-xl border border-transparent',
		'text-sm font-semibold',
		'transition-all duration-200',
		'outline-none',
		'focus-visible:ring-2',
		'focus-visible:ring-gold/40',
		'focus-visible:ring-offset-2',
		'focus-visible:ring-offset-charcoal',
		'active:scale-[0.98]',
		'disabled:pointer-events-none',
		'disabled:opacity-50',
		'[&_svg]:pointer-events-none',
		'[&_svg]:shrink-0',
		'[&_svg]:transition-transform',
		'group-hover/button:[&_svg]:translate-x-0.5',
	].join(' '),
	{
		variants: {
			variant: {
				default: [
					'bg-gold',
					'text-charcoal',
					'shadow-sm',
					'hover:bg-gold-light',
					'hover:shadow-md',
				].join(' '),

				outline: [
					'border-white/15',
					'bg-white/[0.03]',
					'text-white',
					'backdrop-blur-sm',
					'hover:border-gold/30',
					'hover:bg-white/[0.07]',
					'hover:text-gold-light',
				].join(' '),

				secondary: ['bg-sand-light', 'text-charcoal', 'hover:bg-sand'].join(' '),

				ghost: ['bg-transparent', 'text-white/70', 'hover:bg-white/5', 'hover:text-white'].join(
					' '
				),

				destructive: [
					'bg-red-500/10',
					'text-red-400',
					'hover:bg-red-500/20',
					'hover:text-red-300',
					'focus-visible:ring-red-500/30',
				].join(' '),

				link: [
					'h-auto',
					'rounded-none',
					'bg-transparent',
					'p-0',
					'text-gold-light',
					'underline-offset-4',
					'hover:text-gold',
					'hover:underline',
				].join(' '),
			},

			size: {
				default: 'h-10 gap-2 px-4',

				xs: ['h-8', 'gap-1.5', 'rounded-lg', 'px-3', 'text-xs', '[&_svg]:size-3.5'].join(' '),

				sm: ['h-9', 'gap-2', 'rounded-lg', 'px-3.5', 'text-xs', '[&_svg]:size-3.5'].join(' '),

				lg: ['h-11', 'gap-2.5', 'rounded-xl', 'px-5', 'text-sm', '[&_svg]:size-4'].join(' '),

				xl: ['h-12', 'gap-2.5', 'rounded-2xl', 'px-6', 'text-base', '[&_svg]:size-4.5'].join(' '),

				icon: 'size-10 rounded-xl [&_svg]:size-4',

				'icon-sm': 'size-9 rounded-lg [&_svg]:size-3.5',

				'icon-lg': 'size-11 rounded-xl [&_svg]:size-4.5',
			},
		},

		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

function Button({
	className,
	variant = 'default',
	size = 'default',
	...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
	return (
		<ButtonPrimitive
			data-slot="button"
			className={cn(
				buttonVariants({
					variant,
					size,
					className,
				})
			)}
			{...props}
		/>
	);
}

export {Button, buttonVariants};
