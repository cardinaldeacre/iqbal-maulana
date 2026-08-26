'use client';

import {motion} from 'motion/react';

type Skill = {
	id: string;
	name: string;
};

export function TechMarquee({skills}: {skills: Skill[]}) {
	const items = [...skills, ...skills];

	return (
		<div className="overflow-hidden border-y border-charcoal/10 bg-sand-light py-5">
			<motion.div
				className="flex w-max items-center gap-3"
				animate={{
					x: ['0%', '-50%'],
				}}
				transition={{
					duration: 28,
					repeat: Infinity,
					ease: 'linear',
				}}>
				{items.map((skill, index) => (
					<div
						key={`${skill.id}-${index}`}
						className="
                            flex items-center gap-3
                            rounded-full
                            border border-charcoal/10
                            bg-ivory
                            px-4 py-2
                            text-sm font-medium
                            text-charcoal
                            ">
						<span className="size-1.5 rounded-full bg-gold" />

						{skill.name}
					</div>
				))}
			</motion.div>
		</div>
	);
}
