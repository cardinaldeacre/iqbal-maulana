import Link from "next/link";
import { notFound } from "next/navigation";

import { updateExperience } from "@/lib/actions/experiences";
import { getExperienceById } from "@/lib/services/experiences";


interface EditExperiencePageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditExperiencePage({
    params,
}: EditExperiencePageProps) {
    const { id } = await params;

    let experience;

    try {
        experience = await getExperienceById(id);
    } catch {
        notFound();
    }

    const updateExperienceWithId =
        updateExperience.bind(null, id);

    return (
        <main className="mx-auto max-w-3xl p-8">
            <Link
                href="/admin/experiences"
                className="text-sm text-neutral-500"
            >
                ← Back
            </Link>

            <h1 className="mt-6 text-3xl font-bold">
                Edit Experience
            </h1>

            <form
                action={updateExperienceWithId}
                className="mt-8 space-y-6"
            >
                <input
                    name="organization"
                    required
                    defaultValue={experience.organization}
                    className="w-full rounded-lg border p-3"
                />

                <input
                    name="position"
                    required
                    defaultValue={experience.position}
                    className="w-full rounded-lg border p-3"
                />

                <textarea
                    name="description"
                    rows={5}
                    defaultValue={experience.description ?? ""}
                    className="w-full rounded-lg border p-3"
                />

                <div className="grid grid-cols-2 gap-4">
                    <input
                        name="start_date"
                        type="date"
                        required
                        defaultValue={experience.start_date}
                        className="rounded-lg border p-3"
                    />

                    <input
                        name="end_date"
                        type="date"
                        defaultValue={experience.end_date ?? ""}
                        className="rounded-lg border p-3"
                    />
                </div>

                <label className="flex items-center gap-3">
                    <input
                        name="is_current"
                        type="checkbox"
                        defaultChecked={experience.is_current}
                    />

                    Current position
                </label>

                <select
                    name="tech_stack"
                    multiple
                    defaultValue={experience.tech_stack}
                    className="w-full rounded-lg border p-3"
                >
                    <option value="Next.js">Next.js</option>
                    <option value="React">React</option>
                    <option value="Laravel">Laravel</option>
                    <option value="Flutter">Flutter</option>
                    <option value="Node.js">Node.js</option>
                    <option value="Express.js">Express.js</option>
                    <option value="PostgreSQL">PostgreSQL</option>
                    <option value="Supabase">Supabase</option>
                </select>

                <input
                    name="display_order"
                    type="number"
                    min="0"
                    defaultValue={experience.display_order}
                    className="w-full rounded-lg border p-3"
                />

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