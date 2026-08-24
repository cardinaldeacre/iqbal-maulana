import Link from "next/link";

import { createProject } from "@/lib/actions/projects";

export default function NewProjectPage() {
    return (
        <main className="mx-auto max-w-3xl p-8">
            <Link
                href="/admin/projects"
                className="text-sm text-neutral-500"
            >
                ← Back to Projects
            </Link>

            <h1 className="mt-6 text-3xl font-bold">
                Add Project
            </h1>

            <form
                action={createProject}
                className="mt-8 space-y-6"
            >
                <div>
                    <label
                        htmlFor="title"
                        className="mb-2 block text-sm font-medium"
                    >
                        Project Title
                    </label>

                    <input
                        id="title"
                        name="title"
                        required
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="slug"
                        className="mb-2 block text-sm font-medium"
                    >
                        Slug
                    </label>

                    <input
                        id="slug"
                        name="slug"
                        required
                        placeholder="waristmate"
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium"
                    >
                        Description
                    </label>

                    <textarea
                        id="description"
                        name="description"
                        required
                        rows={6}
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
                    <label
                        htmlFor="github_url"
                        className="mb-2 block text-sm font-medium"
                    >
                        GitHub URL
                    </label>

                    <input
                        id="github_url"
                        name="github_url"
                        type="url"
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="live_url"
                        className="mb-2 block text-sm font-medium"
                    >
                        Live URL
                    </label>

                    <input
                        id="live_url"
                        name="live_url"
                        type="url"
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="tech_stack"
                        className="mb-2 block text-sm font-medium"
                    >
                        Tech Stack
                    </label>

                    <select
                        id="tech_stack"
                        name="tech_stack"
                        multiple
                        className="w-full rounded-lg border p-3"
                    >
                        <option value="Laravel">Laravel</option>
                        <option value="Yii2">Yii2</option>
                        <option value="Next.js">Next.js</option>
                        <option value="React">React</option>
                        <option value="Flutter">Flutter</option>
                        <option value="Kotlin">Kotlin</option>
                        <option value="Tailwind">Tailwind</option>
                        <option value="Python">Python</option>
                        <option value="Supabase">Supabase</option>
                        <option value="Docker">Docker</option>
                        <option value="PostgreSQL">
                            PostgreSQL
                        </option>
                        <option value="MySQL">
                            MySQL
                        </option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="display_order"
                        className="mb-2 block text-sm font-medium"
                    >
                        Display Order
                    </label>

                    <input
                        id="display_order"
                        name="display_order"
                        type="number"
                        min="0"
                        defaultValue="0"
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <label className="flex items-center gap-3">
                    <input
                        name="is_featured"
                        type="checkbox"
                    />

                    Featured Project
                </label>

                <button
                    type="submit"
                    className="rounded-lg bg-black px-5 py-3 font-medium text-white"
                >
                    Create Project
                </button>
            </form>
        </main>
    );
}