import {FadeIn} from '@/components/motion';

import {ProjectShowcase} from './project-showcase';

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

type FeaturedProjectsProps = {
	projects: Project[];
};

export function FeaturedProjects({projects}: FeaturedProjectsProps) {
	return (
		<section
			id="projects"
			className="
                relative overflow-hidden
                bg-graphite
                py-28
                text-white
                sm:py-32
            ">
			<div
				className="
                    absolute inset-x-0 top-0
                    h-px
                    bg-linear-to-r
                    from-transparent
                    via-gold/40
                    to-transparent
                "
			/>
			<div
				className="
                pointer-events-none
                absolute left-1/2 top-0
                h-125 w-175
                -translate-x-1/2
                rounded-full
                bg-gold/4
                blur-3xl
                "
			/>

			<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
				<FadeIn>
					<div className="max-w-3xl">
						<div className="flex items-center gap-3">
							<span className="h-px w-10 bg-gold" />

							<p
								className="
                                text-sm font-medium
                                uppercase
                                tracking-[0.25em]
                                text-gold-light
                                ">
								Selected Work
							</p>
						</div>

						<h2
							className="
                                mt-5
                                text-4xl font-bold
                                tracking-[-0.04em]
                                sm:text-6xl
                            ">
							Projects built around
							<span className="block text-white/35">real problems.</span>
						</h2>

						<p className="mt-6 max-w-2xl leading-8 text-white/45">
							A selection of products and systems I&apos;ve designed and developed, from mobile
							applications to full-stack web platforms.
						</p>
					</div>
				</FadeIn>

				{projects.length === 0 ? (
					<div
						className="
                        mt-20 rounded-3xl
                        border border-dashed
                        border-white/10
                        p-12 text-center
                        text-white/40
                        ">
						Featured projects are coming soon.
					</div>
				) : (
					<div className="mt-24 space-y-32">
						{projects.map((project, index) => (
							<ProjectShowcase key={project.id} project={project} index={index} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}
