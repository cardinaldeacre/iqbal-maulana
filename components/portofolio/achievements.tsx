'use client';

import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'motion/react';
import {ArrowUpRight} from 'lucide-react';

type Achievement = {
	id: string;
	title: string;
	organization: string | null;
	description: string | null;
	year: number | null;
	image_url: string | null;
	credential_url: string | null;
};

type AchievementsProps = {
	achievements: Achievement[];
};

export function Achievements({achievements}: AchievementsProps) {
	return (
		<section
			id="achievements"
			className="relative overflow-hidden bg-sand-light py-28 text-charcoal sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<motion.div
					initial={{opacity: 0, y: 30}}
					whileInView={{opacity: 1, y: 0}}
					viewport={{once: true, amount: 0.2}}
					transition={{
						duration: 0.65,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="max-w-3xl">
					<div className="flex items-center gap-3">
						<span className="h-px w-10 bg-gold" />

						<p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-dark">
							Achievements & Certifications
						</p>
					</div>

					<h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
						Milestones that shaped
						<span className="block text-stone">the journey.</span>
					</h2>

					<p className="mt-6 max-w-2xl leading-8 text-stone">
						A few achievements, competitions, and programs that reflect the learning and experience
						behind the work.
					</p>
				</motion.div>

				{achievements.length === 0 ? (
					<p className="mt-16 text-stone">Achievement data is coming soon.</p>
				) : (
					<div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{achievements.map((achievement, index) => (
							<motion.article
								key={achievement.id}
								initial={{
									opacity: 0,
									y: 35,
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
									delay: index * 0.06,
									ease: [0.22, 1, 0.36, 1],
								}}
								whileHover={{
									y: -6,
								}}
								className="
                                    group overflow-hidden rounded-3xl
                                    border border-charcoal/10
                                    bg-ivory
                                    transition
                                    hover:border-gold/30
                                    hover:shadow-xl
                                    ">
								<div className="relative aspect-video overflow-hidden bg-sand">
									{achievement.image_url ? (
										<Image
											src={achievement.image_url}
											alt={achievement.title}
											fill
											sizes="
                                                (max-width: 768px) 100vw,
                                                (max-width: 1280px) 50vw,
                                                33vw
                                            "
											className="
                                                object-cover
                                                transition-transform
                                                duration-700
                                                group-hover:scale-[1.04]
                                            "
										/>
									) : (
										<div className="flex h-full items-center justify-center">
											<span className="text-sm text-charcoal/30">No preview</span>
										</div>
									)}

									{achievement.year && (
										<span
											className="
                                                absolute right-4 top-4
                                                rounded-full
                                                border border-white/30
                                                bg-charcoal/75
                                                px-3 py-1
                                                text-xs font-medium
                                                text-gold-light
                                                backdrop-blur
                                            ">
											{achievement.year}
										</span>
									)}
								</div>

								<div className="p-6">
									<h3 className="text-xl font-semibold tracking-tight">{achievement.title}</h3>

									{achievement.organization && (
										<p className="mt-2 text-sm font-medium text-gold-dark">
											{achievement.organization}
										</p>
									)}

									{achievement.description && (
										<p className="mt-4 line-clamp-3 leading-7 text-stone">
											{achievement.description}
										</p>
									)}

									{achievement.credential_url && (
										<Link
											href={achievement.credential_url}
											target="_blank"
											rel="noopener noreferrer"
											className="
                                                mt-6 inline-flex items-center gap-2
                                                text-sm font-semibold
                                                text-charcoal
                                                transition
                                                hover:text-gold-dark
                                            ">
											View Credential
											<ArrowUpRight className="size-4" />
										</Link>
									)}
								</div>
							</motion.article>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
