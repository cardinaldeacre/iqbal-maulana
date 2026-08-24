import Link from "next/link";
import { notFound } from "next/navigation";

import { updateAchievement } from "@/lib/actions/achievements";
import { getAchievementById } from "@/lib/services/achievements";

interface EditAchievementPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditAchievementPage({
    params,
}: EditAchievementPageProps) {
    const { id } = await params;

    let achievement;

    try {
        achievement = await getAchievementById(id);
    } catch {
        notFound();
    }

    const updateAchievementWithId =
        updateAchievement.bind(null, id);

    return (
        <main className="mx-auto max-w-3xl p-8">
            <Link
                href="/admin/achievements"
                className="text-sm text-neutral-500"
            >
                ← Back to Achievements
            </Link>

            <h1 className="mt-6 text-3xl font-bold">
                Edit Project
            </h1>

            <form
                action={updateAchievementWithId}
                className="mt-8 space-y-6"
            >
                <div>
                    <label htmlFor="title">
                        Achievement Title
                    </label>

                    <input
                        id="title"
                        name="title"
                        required
                        defaultValue={achievement.title}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label htmlFor="organization">
                        Organization
                    </label>

                    <input
                        id="organization"
                        name="organization"
                        required
                        defaultValue={achievement.organization ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label htmlFor="description">
                        Description
                    </label>

                    <textarea
                        id="description"
                        name="description"
                        rows={6}
                        required
                        defaultValue={achievement.description ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="thumbnail"
                        className="mb-2 block"
                    >
                        Thumbnail
                    </label>

                    <input
                        id="thumbnail"
                        name="thumbnail"
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                    />
                </div>

                <div>
                    <label htmlFor="credential_url">
                        Credential URL
                    </label>

                    <input
                        id="credential_url"
                        name="credential_url"
                        type="url"
                        defaultValue={achievement.credential_url ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label htmlFor="year">
                        Year
                    </label>

                    <input
                        id="year"
                        name="year"
                        type="number"
                        min="2000"
                        max="2100"
                        defaultValue={achievement.year ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label htmlFor="display_order">
                        Display Order
                    </label>

                    <input
                        id="display_order"
                        name="display_order"
                        type="number"
                        min="0"
                        max="100"
                        defaultValue={achievement.display_order ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-lg bg-black px-5 py-3 text-white"
                >
                    Save Changes
                </button>
            </form>
        </main>
    );
}