'use client';

import {motion} from 'motion/react';

type FadeInProps = {
	children: React.ReactNode;
	delay?: number;
	className?: string;
};

export function FadeIn({children, delay = 0, className}: FadeInProps) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 24,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			viewport={{
				once: true,
				amount: 0.2,
			}}
			transition={{
				duration: 0.6,
				delay,
				ease: [0.22, 1, 0.36, 1],
			}}
			className={className}>
			{children}
		</motion.div>
	);
}
