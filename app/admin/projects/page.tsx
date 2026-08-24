import Link from "next/link";
import { getProjects } from "@/lib/services/projects";
import { DeleteProjectButton } from "@/app/components/admin/projects/delete-project-button";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <main className="p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Projects
                    </h1>

                    <p className="mt-1 text-neutral-500">
                        Manage portfolio projects.
                    </p>
                </div>

                <Link
                    href="/admin/projects/new"
                    className="rounded-lg bg-black px-4 py-2 text-white"
                >
                    + Add Project
                </Link>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border">
                {projects.length === 0 ? (
                    <div className="p-10 text-center text-neutral-500">
                        No projects yet.
                    </div>
                ) : (
                    <div className="divide-y">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="flex items-center justify-between p-5"
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

                                    <div className="mt-2 flex gap-2">
                                        {project.tech_stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded bg-neutral-100 px-2 py-1 text-xs"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
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
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
