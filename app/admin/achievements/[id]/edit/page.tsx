import Link from "next/link";
import { notFound } from "next/navigation";

import {
    AdminFileInput,
    AdminInput,
    AdminSubmitButton,
    AdminTextarea,
} from "@/app/components/admin";

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
                ← Back
            </Link>

            <h1 className="mt-6 text-3xl font-bold">
                Edit Achievement
            </h1>

            <form
                action={updateAchievementWithId}
                className="mt-8 space-y-6"
            >
                <AdminInput
                    label="Title"
                    name="title"
                    required
                    defaultValue={achievement.title}
                />

                <AdminInput
                    label="Organization"
                    name="organization"
                    defaultValue={achievement.organization ?? ""}
                />

                <AdminTextarea
                    label="Description"
                    name="description"
                    rows={5}
                    defaultValue={achievement.description ?? ""}
                />

                <AdminInput
                    label="Year"
                    name="year"
                    type="number"
                    min="2000"
                    max="2100"
                    required
                    defaultValue={achievement.year ?? ""}
                />

                <AdminInput
                    label="Credential URL"
                    name="credential_url"
                    type="url"
                    defaultValue={achievement.credential_url ?? ""}
                />

                <AdminInput
                    label="Display Order"
                    name="display_order"
                    type="number"
                    min="0"
                    defaultValue={achievement.display_order}
                />

                <AdminFileInput
                    label="Replace Image"
                    name="image"
                    accept="image/jpeg,image/png,image/webp"
                />

                <AdminSubmitButton>
                    Save Changes
                </AdminSubmitButton>
            </form>
        </main>
    );
}