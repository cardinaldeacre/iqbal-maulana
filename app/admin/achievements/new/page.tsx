import Link from "next/link";

import {
    AdminFileInput,
    AdminInput,
    AdminSubmitButton,
    AdminTextarea,
} from "@/app/components/admin";

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
                <AdminInput
                    label="Title"
                    name="title"
                    required
                />

                <AdminInput
                    label="Organization"
                    name="organization"
                />

                <AdminTextarea
                    label="Description"
                    name="description"
                    rows={5}
                />

                <AdminInput
                    label="Year"
                    name="year"
                    type="number"
                    min="2000"
                    max="2100"
                    required
                />

                <AdminInput
                    label="Credential URL"
                    name="credential_url"
                    type="url"
                />

                <AdminInput
                    label="Display Order"
                    name="display_order"
                    type="number"
                    min="0"
                    defaultValue="0"
                />

                <AdminFileInput
                    label="Achievement Image"
                    name="image"
                    accept="image/jpeg,image/png,image/webp"
                />

                <AdminSubmitButton>
                    Create Achievement
                </AdminSubmitButton>
            </form>
        </main>
    );
}