'use client';

import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'motion/react';
import {ArrowUpRight} from 'lucide-react';
import {Badge} from '@/components/ui/badge';

type Project = {
	id: string;
	title: string;
	slug: string;
	description: string;
	tech_stack: string[];
	thumbnail_url: string | null;
	github_url: string | null;
	live_url: string | null;
	is_featured: boolean;
};

type ProjectShowcaseProps = {
	project: Project;
	index: number;
};

export function ProjectShowcase({project, index}: ProjectShowcaseProps) {
	const reversed = index % 2 !== 0;

	const number = String(index + 1).padStart(2, '0');

	return (
		<motion.article
			initial={{
				opacity: 0,
				y: 60,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			viewport={{
				once: true,
				amount: 0.15,
			}}
			transition={{
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			}}
			className="
                grid items-center gap-10
                lg:grid-cols-2
                lg:gap-16
            ">
			<motion.div
				initial={{
					opacity: 0,
					x: reversed ? 50 : -50,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				viewport={{
					once: true,
					amount: 0.2,
				}}
				transition={{
					duration: 0.8,
					delay: 0.1,
					ease: [0.22, 1, 0.36, 1],
				}}
				className={reversed ? 'lg:order-2' : undefined}>
				<div
					className="
                        group relative
                        aspect-video
                        overflow-hidden
                        rounded-3xl
                        border border-white/10
                        bg-charcoal
                    ">
					{project.thumbnail_url ? (
						<Image
							src={project.thumbnail_url}
							alt={project.title}
							fill
							sizes="
                (max-width: 1024px) 100vw,
                50vw
              "
							className="
                                object-cover
                                transition-transform
                                duration-700
                                ease-out
                                group-hover:scale-[1.04]
                            "
						/>
					) : (
						<div className="flex h-full items-center justify-center">
							<span className="text-sm text-white/30">No project preview</span>
						</div>
					)}

					<div
						className="
                        pointer-events-none
                        absolute inset-0
                        bg-linear-to-t
                        from-charcoal/50
                        via-transparent
                        to-transparent
                        opacity-60
                        "
					/>

					<span
						className="
                        absolute bottom-5 left-6
                        text-6xl font-bold
                        tracking-[-0.06em]
                        text-white/10
                        sm:text-7xl
                        ">
						{number}
					</span>

					<div
						className="
                        pointer-events-none
                        absolute inset-0
                        rounded-3xl
                        ring-1 ring-inset
                        ring-gold/0
                        transition
                        duration-500
                        group-hover:ring-gold/30
                        "
					/>
				</div>
			</motion.div>

			{/* Content */}
			<motion.div
				initial={{
					opacity: 0,
					x: reversed ? -40 : 40,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				viewport={{
					once: true,
					amount: 0.2,
				}}
				transition={{
					duration: 0.75,
					delay: 0.18,
					ease: [0.22, 1, 0.36, 1],
				}}
				className={reversed ? 'lg:order-1' : undefined}>
				<div className="flex items-center gap-3">
					<span className="h-px w-8 bg-gold" />

					<span
						className="
                        text-xs font-medium
                        uppercase
                        tracking-[0.25em]
                        text-gold-light
                        ">
						Featured Project
					</span>
				</div>

				<h3
					className="
                        mt-5
                        text-4xl font-bold
                        tracking-[-0.035em]
                        text-white
                        sm:text-5xl
                    ">
					{project.title}
				</h3>

				<div
					className="
						prose prose-invert
						mt-5 max-w-xl

						prose-p:text-white/50
						prose-p:leading-8

						prose-headings:text-white
						prose-strong:text-white

						prose-a:text-gold-light
						prose-a:no-underline
						hover:prose-a:underline

						prose-blockquote:border-gold
						prose-blockquote:text-white/60

						prose-li:text-white/50
						prose-li:marker:text-gold

						prose-code:text-gold-light
					"
					dangerouslySetInnerHTML={{
						__html: project.description,
					}}
				/>

				{project.tech_stack.length > 0 && (
					<div className="mt-7 flex flex-wrap gap-2">
						{project.tech_stack.map((tech) => (
							<Badge
								key={tech}
								variant="outline"
								className="
                                    rounded-full
                                    border-white/10
                                    bg-white/5
                                    px-3 py-1.5
                                    font-normal
                                    text-white/60
                                ">
								{tech}
							</Badge>
						))}
					</div>
				)}

				<div className="mt-8 flex flex-wrap gap-3">
					{project.live_url && (
						<Link
							href={project.live_url}
							target="_blank"
							rel="noopener noreferrer"
							className="
                                inline-flex
                                items-center
                                justify-center
                                rounded-xl
                                bg-gold
                                px-4 py-2.5
                                text-sm font-medium
                                text-charcoal
                                transition-colors
                                hover:bg-gold-light
                            ">
							Live Project
							<ArrowUpRight className="ml-2 size-4" />
						</Link>
					)}

					{project.github_url && (
						<Link
							href={project.github_url}
							target="_blank"
							rel="noopener noreferrer"
							className="
                                inline-flex
                                items-center
                                justify-center
                                rounded-xl
                                border border-white/15
                                bg-transparent
                                px-4 py-2.5
                                text-sm font-medium
                                text-white
                                transition-colors
                                hover:border-gold/30
                                hover:bg-white/5
                                hover:text-white
                            ">
							Github Source
						</Link>
					)}
				</div>
			</motion.div>
		</motion.article>
	);
}
