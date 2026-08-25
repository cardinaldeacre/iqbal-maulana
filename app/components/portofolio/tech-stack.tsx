type Skill = {
	id: string;
	name: string;
	category: string | null;
	icon_url: string | null;
};

type TechStackProps = {
	skills: Skill[];
};

export function TechStack({skills}: TechStackProps) {
	const groupedSkills = skills.reduce<Record<string, Skill[]>>((groups, skill) => {
		const category = skill.category ?? 'Other';

		if (!groups[category]) {
			groups[category] = [];
		}

		groups[category].push(skill);

		return groups;
	}, {});

	return (
		<section className="bg-sand-light py-24 text-charcoal">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mb-12 max-w-2xl">
					<div className="mb-4 flex items-center gap-3">
						<span className="h-px w-10 bg-gold" />

						<p className="text-sm font-medium uppercase tracking-[0.25em] text-gold-dark">
							Tech Stack
						</p>
					</div>

					<h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Tools I use to build.</h2>

					<p className="mt-4 text-stone">
						Technologies I work with across frontend, backend, mobile, databases, and development
						tools.
					</p>
				</div>

				{skills.length === 0 ? (
					<p className="text-stone">No technologies added yet.</p>
				) : (
					<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{Object.entries(groupedSkills).map(([category, categorySkills]) => (
							<div
								key={category}
								className="
                    rounded-2xl
                    border border-charcoal/10
                    bg-ivory
                    p-6
                    transition
                    hover:-translate-y-1
                    hover:border-gold/30
                    hover:shadow-lg
                  ">
								<div className="flex items-center justify-between">
									<h3 className="font-semibold">{category}</h3>

									<span className="text-xs text-stone">{categorySkills.length}</span>
								</div>

								<div className="mt-5 flex flex-wrap gap-2">
									{categorySkills.map((skill) => (
										<span
											key={skill.id}
											className="
                            rounded-full
                            border border-charcoal/10
                            bg-white
                            px-3 py-1.5
                            text-sm
                            text-charcoal
                          ">
											{skill.name}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
