import {FadeIn} from '@/components/motion';
import {TechMarquee} from './tech-marquee';

type Skill = {
	id: string;
	name: string;
};

export function TechStack({skills}: {skills: Skill[]}) {
	return (
		<section className="bg-sand-light py-24 text-charcoal">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<FadeIn>
					<div className="max-w-3xl">
						<p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-dark">
							Tech Stack
						</p>

						<h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
							Tools are just tools.
							<span className="block text-stone">What matters is what we build with them.</span>
						</h2>
					</div>
				</FadeIn>
			</div>

			<div className="mt-14">
				<TechMarquee skills={skills} />
			</div>
		</section>
	);
}
