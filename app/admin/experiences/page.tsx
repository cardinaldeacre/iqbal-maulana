import Link from "next/link";

import {
    AdminEmptyState,
    AdminPageHeader,
} from "@/app/components/admin";

import { DeleteExperienceButton } from "@/app/components/admin/experiences/delete-experience-button";
import { getExperiences } from "@/lib/services/experiences";

export default async function ExperiencesPage() {
    const experiences = await getExperiences();

    return (
        <main className="p-8">
            <AdminPageHeader
                title="Experiences"
                description="Manage work and organizational experiences."
                action={
                    <Link
                        href="/admin/experiences/new"
                        className="rounded-lg bg-black px-4 py-2 text-white"
                    >
                        + Add Experience
                    </Link>
                }
            />

            <div className="mt-8 space-y-4">
                {experiences.length === 0 ? (
                    <AdminEmptyState message="No experiences yet." />
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

                            <div className="flex items-center gap-4">
                                <Link
                                    href={`/admin/experiences/${experience.id}/edit`}
                                    className="text-sm font-medium"
                                >
                                    Edit
                                </Link>

                                <DeleteExperienceButton
                                    id={experience.id}
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}