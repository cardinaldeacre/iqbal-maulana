import Link from "next/link";

import { createAchievement } from "@/lib/actions/achievements";

export default function NewAchievementPage() {
    return (
        <main className="mx-auto max-w-3xl p-8">
            <Link
                href="/admin/achievements"
                className="text-sm text-neutral-500"
            >
                ← Back
            </Link>

            <h1 className="mt-6 text-3xl font-bold">
                Add Achievement
            </h1>

            <form
                action={createAchievement}
                className="mt-8 space-y-6"
            >
                <input
                    name="title"
                    required
                    placeholder="Achievement title"
                    className="w-full rounded-lg border p-3"
                />

                <input
                    name="organization"
                    placeholder="Organization"
                    className="w-full rounded-lg border p-3"
                />

                <textarea
                    name="description"
                    rows={5}
                    placeholder="Description"
                    className="w-full rounded-lg border p-3"
                />

                <input
                    name="year"
                    type="number"
                    min="2000"
                    max="2100"
                    required
                    className="w-full rounded-lg border p-3"
                />

                <input
                    name="credential_url"
                    type="url"
                    placeholder="Credential URL"
                    className="w-full rounded-lg border p-3"
                />

                <input
                    name="display_order"
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="w-full rounded-lg border p-3"
                />

                <input
                    name="image"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                />

                <button
                    type="submit"
                    className="rounded-lg bg-black px-5 py-3 text-white"
                >
                    Create Achievement
                </button>
            </form>
        </main>
    );
}