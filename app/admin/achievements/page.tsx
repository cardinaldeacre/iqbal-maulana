import Link from "next/link";

import { getAchievements } from "@/lib/services/achievements";
import { DeleteAchievementButton } from "@/app/components/admin/achievement/delete-achievement-button";

export default async function AchievementsPage() {
    const achievements = await getAchievements();

    return (
        <main className="p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Achievements
                    </h1>

                    <p className="mt-1 text-neutral-500">
                        Manage your achievements and credentials.
                    </p>
                </div>

                <Link
                    href="/admin/achievements/new"
                    className="rounded-lg bg-black px-4 py-2 text-white"
                >
                    + Add Achievement
                </Link>
            </div>

            <div className="mt-8 space-y-4">
                {achievements.length === 0 ? (
                    <div className="rounded-xl border p-8 text-center text-neutral-500">
                        No achievements yet.
                    </div>
                ) : (
                    achievements.map((achievement) => (
                        <div
                            key={achievement.id}
                            className="flex items-center justify-between rounded-xl border p-5"
                        >
                            <div>
                                <h2 className="font-semibold">
                                    {achievement.title}
                                </h2>

                                <p className="text-sm text-neutral-500">
                                    {achievement.organization}
                                </p>

                                <p className="mt-1 text-xs text-neutral-400">
                                    {achievement.year}
                                </p>
                            </div>

                            <Link
                                href={`/admin/achievements/${achievement.id}/edit`}
                                className="text-sm font-medium"
                            >
                                Edit
                            </Link>
                            <DeleteAchievementButton id={achievement.id} />
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}