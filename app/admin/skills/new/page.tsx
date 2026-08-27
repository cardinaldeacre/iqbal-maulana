import Link from 'next/link';
import {AdminInput, AdminSelect, AdminSubmitButton} from '@/components/admin';
import {createSkill} from '@/lib/actions/skills';
import {skillCategories} from '@/app/constants/admin-options';

export default function NewSkillPage() {
	return (
		<main className="mx-auto max-w-3xl p-8">
			<Link href="/admin/skills" className="text-sm text-neutral-500">
				← Back
			</Link>

			<h1 className="mt-6 text-3xl font-bold">Add Skill</h1>

			<form action={createSkill} className="mt-8 space-y-6">
				<AdminInput label="Skill Name" name="name" required />

				<AdminSelect label="Category" name="category" options={skillCategories} />

				<AdminInput label="Icon URL" name="icon_url" type="url" />

				<AdminInput
					label="Display Order"
					name="display_order"
					type="number"
					min="0"
					defaultValue="0"
				/>

				<AdminSubmitButton>Create Skill</AdminSubmitButton>
			</form>
		</main>
	);
}
