import Link from "next/link";

import {
    AdminEmptyState,
    AdminPageHeader,
} from "@/app/components/admin";

import { DeleteSkillButton } from "@/app/components/admin/skills/delete-skill-button";
import { getSkills } from "@/lib/services/skills";

export default async function SkillsPage() {
    const skills = await getSkills();

    return (
        <main className="p-8">
            <AdminPageHeader
                title="Skills"
                description="Manage technologies displayed in your portfolio."
                action={
                    <Link
                        href="/admin/skills/new"
                        className="rounded-lg bg-black px-4 py-2 text-white"
                    >
                        + Add Skill
                    </Link>
                }
            />

            <div className="mt-8 space-y-4">
                {skills.length === 0 ? (
                    <AdminEmptyState message="No skills yet." />
                ) : (
                    skills.map((skill) => (
                        <div
                            key={skill.id}
                            className="flex items-center justify-between rounded-xl border p-5"
                        >
                            <div>
                                <h2 className="font-semibold">
                                    {skill.name}
                                </h2>

                                <p className="text-sm text-neutral-500">
                                    {skill.category ?? "Uncategorized"}
                                </p>

                                {skill.icon_url && (
                                    <p className="mt-1 max-w-md truncate text-xs text-neutral-400">
                                        {skill.icon_url}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center gap-4">
                                <Link
                                    href={`/admin/skills/${skill.id}/edit`}
                                    className="text-sm font-medium"
                                >
                                    Edit
                                </Link>

                                <DeleteSkillButton id={skill.id} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}