'use client';

import {motion} from 'motion/react';

export function StaggerContainer({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{
				once: true,
				amount: 0.2,
			}}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: 0.08,
					},
				},
			}}
			className={className}>
			{children}
		</motion.div>
	);
}
