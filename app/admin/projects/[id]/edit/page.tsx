import Link from "next/link";
import { notFound } from "next/navigation";

import { updateProject } from "@/lib/actions/projects";
import { getProjectById } from "@/lib/services/projects";

interface EditProjectPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditProjectPage({
    params,
}: EditProjectPageProps) {
    const { id } = await params;

    let project;

    try {
        project = await getProjectById(id);
    } catch {
        notFound();
    }

    const updateProjectWithId =
        updateProject.bind(null, id);

    return (
        <main className="mx-auto max-w-3xl p-8">
            <Link
                href="/admin/projects"
                className="text-sm text-neutral-500"
            >
                ← Back to Projects
            </Link>

            <h1 className="mt-6 text-3xl font-bold">
                Edit Project
            </h1>

            <form
                action={updateProjectWithId}
                className="mt-8 space-y-6"
            >
                <div>
                    <label htmlFor="title">
                        Project Title
                    </label>

                    <input
                        id="title"
                        name="title"
                        required
                        defaultValue={project.title}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label htmlFor="slug">
                        Slug
                    </label>

                    <input
                        id="slug"
                        name="slug"
                        required
                        defaultValue={project.slug}
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
                        defaultValue={project.description}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label htmlFor="github_url">
                        GitHub URL
                    </label>

                    <input
                        id="github_url"
                        name="github_url"
                        type="url"
                        defaultValue={project.github_url ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label htmlFor="live_url">
                        Live URL
                    </label>

                    <input
                        id="live_url"
                        name="live_url"
                        type="url"
                        defaultValue={project.live_url ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label htmlFor="tech_stack">
                        Tech Stack
                    </label>

                    <select
                        id="tech_stack"
                        name="tech_stack"
                        multiple
                        defaultValue={project.tech_stack}
                        className="w-full rounded-lg border p-3"
                    >
                        <option value="Next.js">
                            Next.js
                        </option>

                        <option value="React">
                            React
                        </option>

                        <option value="Flutter">
                            Flutter
                        </option>

                        <option value="Laravel">
                            Laravel
                        </option>

                        <option value="Supabase">
                            Supabase
                        </option>

                        <option value="PostgreSQL">
                            PostgreSQL
                        </option>
                    </select>
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
                        defaultValue={project.display_order}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <label className="flex gap-3">
                    <input
                        name="is_featured"
                        type="checkbox"
                        defaultChecked={project.is_featured}
                    />

                    Featured Project
                </label>

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