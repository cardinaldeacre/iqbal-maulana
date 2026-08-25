import Link from "next/link";

import {
    AdminEmptyState,
    AdminPageHeader,
} from "@/app/components/admin";

import { DeleteAchievementButton } from "@/app/components/admin/achievement/delete-achievement-button";
import { getAchievements } from "@/lib/services/achievements";

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
                        className="rounded-lg bg-black px-4 py-2 text-white"
                    >
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
                            className="flex items-center justify-between rounded-xl border p-5"
                        >
                            <div>
                                <h2 className="font-semibold">
                                    {achievement.title}
                                </h2>

                                <p className="text-sm text-neutral-500">
                                    {achievement.organization ?? "—"}
                                    {" • "}
                                    {achievement.year ?? "—"}
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Link
                                    href={`/admin/achievements/${achievement.id}/edit`}
                                    className="text-sm font-medium"
                                >
                                    Edit
                                </Link>

                                <DeleteAchievementButton
                                    id={achievement.id}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}