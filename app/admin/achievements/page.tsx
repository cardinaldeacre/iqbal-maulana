import Link from 'next/link';

import {AdminEmptyState, AdminPageHeader} from '@/app/components/admin';

import {DeleteAchievementButton} from '@/app/components/admin/achievement/delete-achievement-button';
import {getAchievements} from '@/lib/services/achievements';

export default async function AchievementsPage() {
	const achievements = await getAchievements();

	return (
		<main className="p-8">
			<AdminPageHeader
				title="Achievements"
				description="Manage awards, certifications, and achievements."
				action={
					<Link
						href="/admin/achievements/new"
						className="
                            rounded-xl
                            bg-gold
                            px-4 py-2
                            text-sm font-medium
                            text-charcoal
                            transition
                            hover:bg-gold-light
                            ">
						+ Add Achievement
					</Link>
				}
			/>

			<div className="mt-8 space-y-4">
				{achievements.length === 0 ? (
					<AdminEmptyState message="No achievements yet." />
				) : (
					achievements.map((achievement) => (
						<div
							key={achievement.id}
							className="
          flex items-center justify-between gap-4
          rounded-2xl border border-white/10
          bg-charcoal/60 p-5
          transition
          hover:border-gold/40
          hover:bg-charcoal/80
        ">
							<div className="min-w-0">
								<div className="flex flex-wrap items-center gap-2">
									<h2 className="font-semibold text-white">{achievement.title}</h2>

									{achievement.year && (
										<span
											className="
                  rounded-full
                  border border-gold/30
                  bg-gold/10
                  px-2.5 py-1
                  text-xs font-medium
                  text-gold-light
                ">
											{achievement.year}
										</span>
									)}
								</div>

								<p className="mt-1 text-sm text-white/55">{achievement.organization ?? '—'}</p>

								{achievement.description && (
									<p className="mt-2 line-clamp-2 max-w-2xl text-sm text-white/35">
										{achievement.description}
									</p>
								)}
							</div>

							<div className="flex shrink-0 items-center gap-2">
								<Link
									href={`/admin/achievements/${achievement.id}/edit`}
									className="
              rounded-lg px-3 py-2
              text-sm font-medium text-white/70
              transition
              hover:bg-white/5 hover:text-white
            ">
									Edit
								</Link>

								<DeleteAchievementButton id={achievement.id} />
							</div>
						</div>
					))
				)}
			</div>
		</main>
	);
}
