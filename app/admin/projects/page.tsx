import Link from "next/link";

import {
    AdminEmptyState,
    AdminPageHeader,
} from "@/app/components/admin";
import { DeleteProjectButton } from "@/app/components/admin/projects/delete-project-button";
import { getProjects } from "@/lib/services/projects";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <main className="p-8">
            <AdminPageHeader
                title="Projects"
                description="Manage projects displayed in your portfolio."
                action={
                    <Link
                        href="/admin/projects/new"
                        className="rounded-lg bg-black px-4 py-2 text-white"
                    >
                        + Add Project
                    </Link>
                }
            />

            <div className="mt-8 space-y-4">
                {projects.length === 0 ? (
                    <AdminEmptyState message="No projects yet." />
                ) : (
                    projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex items-center justify-between rounded-xl border p-5"
                        >
                            <div>
                                <div className="flex items-center gap-2">
                                    <h2 className="font-semibold">
                                        {project.title}
                                    </h2>

                                    {project.is_featured && (
                                        <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs">
                                            Featured
                                        </span>
                                    )}
                                </div>

                                <p className="mt-1 text-sm text-neutral-500">
                                    /{project.slug}
                                </p>

                                {project.tech_stack.length > 0 && (
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {project.tech_stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded bg-neutral-100 px-2 py-1 text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-4">
                                <Link
                                    href={`/admin/projects/${project.id}/edit`}
                                    className="text-sm font-medium"
                                >
                                    Edit
                                </Link>

                                <DeleteProjectButton id={project.id} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}