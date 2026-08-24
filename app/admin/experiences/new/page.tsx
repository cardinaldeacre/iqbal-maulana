import Link from "next/link";

import { createExperience } from "@/lib/actions/experiences";

export default function NewExperiencePage() {
    return (
        <main className="mx-auto max-w-3xl p-8">
            <Link
                href="/admin/experiences"
                className="text-sm text-neutral-500"
            >
                ← Back
            </Link>

            <h1 className="mt-6 text-3xl font-bold">
                Add Experience
            </h1>

            <form
                action={createExperience}
                className="mt-8 space-y-6"
            >
                <input
                    name="organization"
                    placeholder="Organization"
                    required
                    className="w-full rounded-lg border p-3"
                />

                <input
                    name="position"
                    placeholder="Position"
                    required
                    className="w-full rounded-lg border p-3"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    rows={5}
                    className="w-full rounded-lg border p-3"
                />

                <div className="grid grid-cols-2 gap-4">
                    <input
                        name="start_date"
                        type="date"
                        required
                        className="rounded-lg border p-3"
                    />

                    <input
                        name="end_date"
                        type="date"
                        className="rounded-lg border p-3"
                    />
                </div>

                <label className="flex items-center gap-3">
                    <input
                        name="is_current"
                        type="checkbox"
                    />

                    Current position
                </label>

                <select
                    name="tech_stack"
                    multiple
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
                    defaultValue="0"
                    className="w-full rounded-lg border p-3"
                />

                <button
                    type="submit"
                    className="rounded-lg bg-black px-5 py-3 text-white"
                >
                    Create Experience
                </button>
            </form>
        </main>
    );
}