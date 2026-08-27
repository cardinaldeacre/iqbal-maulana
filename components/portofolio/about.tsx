type AboutProps = {
	bio?: string | null;
};

export function About({bio}: AboutProps) {
	return (
		<section id="about" className="bg-ivory py-24 text-charcoal">
			<div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.4fr_0.6fr] lg:px-8">
				<div>
					<div className="mb-6 flex items-center gap-3">
						<span className="h-px w-10 bg-gold" />

						<p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-dark">
							About Me
						</p>
					</div>

					<h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
						Building software with purpose, not just features.
					</h2>

					<p className="mt-6 max-w-3xl text-base leading-8 text-stone sm:text-lg">
						{bio ??
							'I’m a software developer focused on building practical web and mobile applications that solve real-world problems.'}
					</p>
				</div>

				<div className="rounded-2xl border border-charcoal/10 bg-sand-light p-6">
					<p className="text-sm font-medium uppercase tracking-[0.2em] text-gold-dark">
						Quick Facts
					</p>

					<div className="mt-6 space-y-5">
						<div>
							<p className="text-xs uppercase tracking-wider text-stone">Focus</p>

							<p className="mt-1 font-medium">Web & Mobile Development</p>
						</div>

						<div>
							<p className="text-xs uppercase tracking-wider text-stone">Approach</p>

							<p className="mt-1 font-medium">Problem Solving & Practical Systems</p>
						</div>

						<div>
							<p className="text-xs uppercase tracking-wider text-stone">Interests</p>

							<p className="mt-1 font-medium">Full-Stack, Mobile, Backend & Product Engineering</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
