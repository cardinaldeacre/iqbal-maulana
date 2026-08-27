'use client';

import {motion} from 'motion/react';
import Image from 'next/image';

type Skill = {
	id: string;
	name: string;
	icon_url?: string | null;
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
				{items.map((skill, index) => {
					const loopIndex = index >= skills.length ? 2 : 1;
					return (
						<div
							key={`${skill.id}-${loopIndex}`}
							className="
							group flex items-center gap-3
							rounded-2xl
							border border-charcoal/10
							bg-white/40
							px-4 py-3
							backdrop-blur-sm
							transition-all duration-900
							hover:-translate-y-1
							hover:border-gold/40
							hover:bg-white/70
							hover:shadow-lg
						">
							{skill.icon_url && (
								<div
									className="
										flex size-10 shrink-0
										items-center justify-center
										rounded-xl
										bg-sand
										p-2
										transition-transform duration-900
										group-hover:scale-110
									">
									<Image
										src={skill.icon_url}
										alt={`${skill.name} icon`}
										width={24}
										height={24}
										unoptimized
									/>
								</div>
							)}

							<div className="min-w-0">
								<p className="font-semibold text-charcoal">{skill.name}</p>
							</div>
						</div>
					);
				})}
			</motion.div>
		</div>
	);
}
