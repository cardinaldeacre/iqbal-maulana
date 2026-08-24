import Link from "next/link";
import { notFound } from "next/navigation";

import { updateSkill } from "@/lib/actions/skills";
import { getSkillById } from "@/lib/services/skills";

interface EditSkillPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function EditSkillPage({
    params,
}: EditSkillPageProps) {
    const { id } = await params;

    let skill;

    try {
        skill = await getSkillById(id);
    } catch {
        notFound();
    }

    const updateSkillWithId =
        updateSkill.bind(null, id);

    return (
        <main className="mx-auto max-w-3xl p-8">
            <Link
                href="/admin/skills"
                className="text-sm text-neutral-500"
            >
                ← Back
            </Link>

            <h1 className="mt-6 text-3xl font-bold">
                Edit Skill
            </h1>

            <form
                action={updateSkillWithId}
                className="mt-8 space-y-6"
            >
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                    >
                        Skill Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        required
                        defaultValue={skill.name}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="category"
                        className="mb-2 block text-sm font-medium"
                    >
                        Category
                    </label>

                    <select
                        id="category"
                        name="category"
                        defaultValue={skill.category ?? ""}
                        className="w-full rounded-lg border p-3"
                    >
                        <option value="">Select category</option>
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Database">Database</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Tools">Tools</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="icon_url"
                        className="mb-2 block text-sm font-medium"
                    >
                        Icon URL
                    </label>

                    <input
                        id="icon_url"
                        name="icon_url"
                        type="url"
                        defaultValue={skill.icon_url ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
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
                        defaultValue={skill.display_order}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

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