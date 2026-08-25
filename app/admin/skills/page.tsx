import Link from 'next/link';

import {AdminEmptyState, AdminPageHeader} from '@/app/components/admin';

import {DeleteSkillButton} from '@/app/components/admin/skills/delete-skill-button';
import {getSkills} from '@/lib/services/skills';

export default async function SkillsPage() {
	const skills = await getSkills();

	return (
		<main className="p-8">
			<AdminPageHeader
				title="Skills"
				description="Manage technologies displayed in your portfolio."
				action={
					<Link
						href="/admin/skills/new"
						className="
                            rounded-xl
                            bg-gold
                            px-4 py-2
                            text-sm font-medium
                            text-charcoal
                            transition
                            hover:bg-gold-light
                            ">
						+ Add Skill
					</Link>
				}
			/>

			<div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{skills.length === 0 ? (
					<div className="sm:col-span-2 xl:col-span-3">
						<AdminEmptyState message="No skills yet." />
					</div>
				) : (
					skills.map((skill) => (
						<div
							key={skill.id}
							className="
          rounded-2xl border border-white/10
          bg-charcoal/60 p-5
          transition
          hover:border-gold/30
          hover:bg-charcoal/80
        ">
							<div className="flex items-start justify-between gap-4">
								<div>
									<h2 className="font-semibold text-white">{skill.name}</h2>

									<span
										className="
                mt-2 inline-block
                rounded-full
                border border-gold/20
                bg-gold/10
                px-2.5 py-1
                text-xs font-medium
                text-gold-light
              ">
										{skill.category ?? 'Uncategorized'}
									</span>

									{skill.icon_url && (
										<p className="mt-3 max-w-xs truncate text-xs text-white/35">{skill.icon_url}</p>
									)}
								</div>

								<div className="flex items-center gap-2">
									<Link
										href={`/admin/skills/${skill.id}/edit`}
										className="
                rounded-lg px-3 py-2
                text-sm font-medium text-white/70
                transition
                hover:bg-white/5 hover:text-white
              ">
										Edit
									</Link>

									<DeleteSkillButton id={skill.id} />
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</main>
	);
}
