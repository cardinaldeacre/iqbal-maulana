import {FadeIn} from '@/components/motion';
import {TechSpiral} from './tech-spiral';

type Skill = {
	id: string;
	name: string;
	category: string | null;
	icon_url: string | null;
};

export function TechStack({skills}: {skills: Skill[]}) {
	return (
		<section className="bg-sand-light py-24 text-charcoal">
			<div
				className="
          mx-auto grid max-w-7xl
          items-center
          gap-12
          px-6
          lg:grid-cols-[0.8fr_1.2fr]
          lg:gap-16
          lg:px-8
        ">
				<FadeIn>
					<div className="max-w-2xl">
						<p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-dark">
							Tech Stack
						</p>

						<h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
							Tools are just tools.
							<span className="block text-stone">What matters is what we build with them.</span>
						</h2>

						<p className="mt-6 max-w-xl text-base leading-8 text-stone sm:text-lg">
							Technologies I work with across web, mobile, backend, database, and deployment.
						</p>
					</div>
				</FadeIn>

				<div
					className="
            relative
            min-w-0
            overflow-hidden
          ">
					<TechSpiral skills={skills} />
				</div>
			</div>
		</section>
	);
}
