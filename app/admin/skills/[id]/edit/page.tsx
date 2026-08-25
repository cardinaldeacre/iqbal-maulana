import Link from 'next/link';
import {notFound} from 'next/navigation';
import {AdminInput, AdminSelect, AdminSubmitButton} from '@/app/components/admin';
import {updateSkill} from '@/lib/actions/skills';
import {getSkillById} from '@/lib/services/skills';
import {skillCategories} from '@/app/constants/admin-options';
interface EditSkillPageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function EditSkillPage({params}: EditSkillPageProps) {
	const {id} = await params;

	let skill;

	try {
		skill = await getSkillById(id);
	} catch {
		notFound();
	}

	const updateSkillWithId = updateSkill.bind(null, id);

	return (
		<main className="mx-auto max-w-3xl p-8">
			<Link href="/admin/skills" className="text-sm text-neutral-500">
				← Back
			</Link>

			<h1 className="mt-6 text-3xl font-bold">Edit Skill</h1>

			<form action={updateSkillWithId} className="mt-8 space-y-6">
				<AdminInput label="Skill Name" name="name" defaultValue={skill.name} required />

				<AdminSelect
					label="Category"
					name="category"
					defaultValue={skill.category ?? ''}
					options={skillCategories}
				/>

				<AdminInput
					label="Icon URL"
					name="icon_url"
					defaultValue={skill.icon_url ?? ''}
					type="url"
				/>

				<AdminInput
					label="Display Order"
					name="display_order"
					type="number"
					min="0"
					defaultValue={skill.display_order}
				/>

				<AdminSubmitButton>Save Changes</AdminSubmitButton>
			</form>
		</main>
	);
}
