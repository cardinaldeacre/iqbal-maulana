import Link from 'next/link';

import {AdminEmptyState, AdminPageHeader} from '@/app/components/admin';

import {DeleteExperienceButton} from '@/app/components/admin/experiences/delete-experience-button';
import {getExperiences} from '@/lib/services/experiences';

export default async function ExperiencesPage() {
	const experiences = await getExperiences();

	return (
		<main className="p-8">
			<AdminPageHeader
				title="Experiences"
				description="Manage work and organizational experiences."
				action={
					<Link href="/admin/experiences/new" className="rounded-lg bg-black px-4 py-2 text-white">
						+ Add Experience
					</Link>
				}
			/>

			<div className="mt-8 space-y-4">
				{experiences.length === 0 ? (
					<AdminEmptyState message="No experiences yet." />
				) : (
					experiences.map((experience) => (
						<div
							key={experience.id}
							className="
                                flex items-center justify-between gap-4
                                rounded-2xl border border-white/10
                                bg-charcoal/60 p-5
                                transition
                                hover:border-gold/30
                                hover:bg-charcoal/80
                                ">
							<div className="min-w-0">
								<h2 className="font-semibold text-white">{experience.position}</h2>

								<p className="mt-1 text-sm text-white/60">{experience.organization}</p>

								<p className="mt-2 text-xs text-white/35">
									{experience.start_date}
									{' — '}
									{experience.is_current ? 'Present' : experience.end_date}
								</p>

								{experience.tech_stack.length > 0 && (
									<div className="mt-3 flex flex-wrap gap-2">
										{experience.tech_stack.map((tech) => (
											<span
												key={tech}
												className="
                                                    rounded-lg
                                                    border border-white/10
                                                    bg-white/5
                                                    px-2.5 py-1
                                                    text-xs text-white/60
                                                ">
												{tech}
											</span>
										))}
									</div>
								)}
							</div>

							<div className="flex shrink-0 items-center gap-2">
								<Link
									href={`/admin/experiences/${experience.id}/edit`}
									className="
              rounded-lg px-3 py-2
              text-sm font-medium text-white/70
              transition
              hover:bg-white/5 hover:text-white
            ">
									Edit
								</Link>

								<DeleteExperienceButton id={experience.id} />
							</div>
						</div>
					))
				)}
			</div>
		</main>
	);
}
