import Link from "next/link";

import { getExperiences } from "@/lib/services/experiences";
import { DeleteExperienceButton } from "@/app/components/admin/experiences/delete-experience-button copy";

export default async function ExperiencesPage() {
    const experiences = await getExperiences();

    return (
        <main className="p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Experiences
                    </h1>

                    <p className="mt-1 text-neutral-500">
                        Manage work and organizational experiences.
                    </p>
                </div>

                <Link
                    href="/admin/experiences/new"
                    className="rounded-lg bg-black px-4 py-2 text-white"
                >
                    + Add Experience
                </Link>
            </div>

            <div className="mt-8 space-y-4">
                {experiences.length === 0 ? (
                    <div className="rounded-xl border p-8 text-center text-neutral-500">
                        No experiences yet.
                    </div>
                ) : (
                    experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className="flex items-center justify-between rounded-xl border p-5"
                        >
                            <div>
                                <h2 className="font-semibold">
                                    {experience.position}
                                </h2>

                                <p className="text-sm text-neutral-500">
                                    {experience.organization}
                                </p>

                                <p className="mt-1 text-xs text-neutral-400">
                                    {experience.start_date}
                                    {" — "}
                                    {experience.is_current
                                        ? "Present"
                                        : experience.end_date}
                                </p>
                            </div>

                            <Link
                                href={`/admin/experiences/${experience.id}/edit`}
                                className="text-sm font-medium"
                            >
                                Edit
                            </Link>
                            <DeleteExperienceButton id={experience.id} />
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}