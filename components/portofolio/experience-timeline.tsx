'use client';

import {motion} from 'motion/react';

type Experience = {
	id: string;
	organization: string;
	position: string;
	description: string | null;
	start_date: string;
	end_date: string | null;
	is_current: boolean;
	tech_stack: string[];
};

type ExperienceTimelineProps = {
	experiences: Experience[];
};

export function ExperienceTimeline({experiences}: ExperienceTimelineProps) {
	return (
		<section
			id="experience"
			className="relative overflow-hidden bg-ivory py-28 text-charcoal sm:py-32">
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
							Experience
						</p>
					</div>

					<h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
						Places where I&apos;ve
						<span className="block text-stone">learned, built, and contributed.</span>
					</h2>
				</motion.div>

				{experiences.length === 0 ? (
					<p className="mt-16 text-stone">Experience data is coming soon.</p>
				) : (
					<div className="relative mt-20">
						<div className="absolute bottom-0 left-1.75 top-0 w-px bg-charcoal/10 md:left-1/2" />

						<motion.div
							initial={{scaleY: 0}}
							whileInView={{scaleY: 1}}
							viewport={{once: true, amount: 0.1}}
							transition={{
								duration: 1.3,
								ease: [0.22, 1, 0.36, 1],
							}}
							style={{transformOrigin: 'top'}}
							className="absolute bottom-0 left-1.75 top-0 w-px bg-gold md:left-1/2"
						/>

						<div className="space-y-16">
							{experiences.map((experience, index) => {
								const left = index % 2 === 0;

								return (
									<motion.article
										key={experience.id}
										initial={{
											opacity: 0,
											x: left ? -40 : 40,
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
											duration: 0.65,
											delay: index * 0.05,
											ease: [0.22, 1, 0.36, 1],
										}}
										className="
                                            relative grid gap-8 pl-10
                                            md:grid-cols-2
                                            md:pl-0
                                        ">
										<div className={[left ? 'md:pr-14' : 'md:col-start-2 md:pl-14'].join(' ')}>
											<div
												className="
                                                    rounded-3xl
                                                    border border-charcoal/10
                                                    bg-white/60
                                                    p-6
                                                    backdrop-blur-sm
                                                    transition
                                                    hover:-translate-y-1
                                                    hover:border-gold/30
                                                    hover:shadow-lg
                                                ">
												<div className="flex flex-wrap items-center justify-between gap-3">
													<div>
														<h3 className="text-xl font-semibold">{experience.position}</h3>

														<p className="mt-1 text-sm font-medium text-gold-dark">
															{experience.organization}
														</p>
													</div>

													<span className="text-xs text-stone">
														{experience.start_date}
														{' — '}
														{experience.is_current ? 'Present' : experience.end_date}
													</span>
												</div>

												{experience.description && (
													<div
														className="
															prose
															mt-5 max-w-none

															prose-p:my-2
															prose-p:leading-7
															prose-p:text-charcoal/75

															prose-headings:mt-5
															prose-headings:mb-2
															prose-headings:font-semibold
															prose-headings:text-charcoal

															prose-strong:font-semibold
															prose-strong:text-charcoal

															prose-em:text-charcoal/70

															prose-ul:my-3
															prose-ul:pl-5

															prose-ol:my-3
															prose-ol:pl-5

															prose-li:my-1
															prose-li:leading-7
															prose-li:text-charcoal/75
															prose-li:marker:text-gold-dark

															prose-blockquote:my-4
															prose-blockquote:border-gold
															prose-blockquote:text-charcoal/65

															prose-a:font-medium
															prose-a:text-gold-dark
															prose-a:underline
															prose-a:decoration-gold/40
															prose-a:underline-offset-4
															hover:prose-a:text-charcoal

															prose-code:rounded-md
															prose-code:bg-charcoal/5
															prose-code:px-1.5
															prose-code:py-0.5
															prose-code:text-charcoal

															prose-pre:bg-charcoal
															prose-pre:text-sand-light
														"
														dangerouslySetInnerHTML={{
															__html: experience.description,
														}}
													/>
												)}

												{experience.tech_stack.length > 0 && (
													<div className="mt-6 flex flex-wrap gap-2">
														{experience.tech_stack.map((tech) => (
															<span
																key={tech}
																className="
                                                                    rounded-full
                                                                    border border-charcoal/10
                                                                    bg-sand-light
                                                                    px-3 py-1.5
                                                                    text-xs
                                                                    text-charcoal
                                                                ">
																{tech}
															</span>
														))}
													</div>
												)}
											</div>
										</div>

										<div
											className="
                                            absolute left-0 top-7
                                            h-3.75 w-3.75
                                            rounded-full
                                            border-4 border-ivory
                                            bg-gold
                                            shadow-[0_0_0_1px_rgba(179,145,82,0.35)]
                                            md:left-1/2
                                            md:-translate-x-1/2
                                        "
										/>
									</motion.article>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
