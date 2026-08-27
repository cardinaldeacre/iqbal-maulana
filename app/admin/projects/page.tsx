import Link from 'next/link';

import {AdminEmptyState, AdminPageHeader} from '@/components/admin';
import {DeleteProjectButton} from '@/components/admin/projects/delete-project-button';
import {getProjects} from '@/lib/services/projects';

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<main className="p-8">
			<AdminPageHeader
				title="Projects"
				description="Manage projects displayed in your portfolio."
				action={
					<Link
						href="/admin/projects/new"
						className="
                            rounded-xl
                            bg-gold
                            px-4 py-2
                            text-sm font-medium
                            text-charcoal
                            transition
                            hover:bg-gold-light
                            ">
						+ Add Project
					</Link>
				}
			/>

			<div className="mt-8 space-y-4">
				{projects.length === 0 ? (
					<AdminEmptyState message="No projects yet." />
				) : (
					projects.map((project) => (
						<div
							key={project.id}
							className="
          flex items-center justify-between gap-4
          rounded-2xl border border-white/10
          bg-charcoal/60 p-5
          transition
          hover:border-gold/30
          hover:bg-charcoal/80
        ">
							<div className="min-w-0">
								<div className="flex flex-wrap items-center gap-2">
									<h2 className="font-semibold text-white">{project.title}</h2>

									{project.is_featured && (
										<span
											className="
                  rounded-full
                  border border-gold/30
                  bg-gold/10
                  px-2.5 py-1
                  text-xs font-medium
                  text-gold-light
                ">
											Featured
										</span>
									)}
								</div>

								<p className="mt-1 text-sm text-white/40">/{project.slug}</p>

								{project.tech_stack.length > 0 && (
									<div className="mt-3 flex flex-wrap gap-2">
										{project.tech_stack.map((tech) => (
											<span
												key={tech}
												className="
                    rounded-lg
                    border border-white/10
                    bg-white/5
                    px-2.5 py-1
                    text-xs
                    text-white/60
                  ">
												{tech}
											</span>
										))}
									</div>
								)}
							</div>

							<div className="flex shrink-0 items-center gap-2">
								<Link
									href={`/admin/projects/${project.id}/edit`}
									className="
                                        rounded-lg px-3 py-2
                                        text-sm font-medium text-white/70
                                        transition
                                        hover:bg-white/5
                                        hover:text-white
                                        ">
									Edit
								</Link>

								<DeleteProjectButton id={project.id} />
							</div>
						</div>
					))
				)}
			</div>
		</main>
	);
}
