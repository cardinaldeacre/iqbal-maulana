import Link from 'next/link';
import {notFound} from 'next/navigation';

import {AdminCheckbox, AdminInput, AdminSelect, AdminSubmitButton} from '@/components/admin';
import {techStackOptions} from '@/app/constants/admin-options';
import {updateExperience} from '@/lib/actions/experiences';
import {getExperienceById} from '@/lib/services/experiences';
import {RichTextEditor} from '@/components/admin/rich-text-editor';

interface EditExperiencePageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function EditExperiencePage({params}: EditExperiencePageProps) {
	const {id} = await params;

	let experience;

	try {
		experience = await getExperienceById(id);
	} catch {
		notFound();
	}

	const updateExperienceWithId = updateExperience.bind(null, id);

	return (
		<main className="mx-auto max-w-3xl p-8">
			<Link href="/admin/experiences" className="text-sm text-neutral-500">
				← Back
			</Link>

			<h1 className="mt-6 text-3xl font-bold">Edit Experience</h1>

			<form action={updateExperienceWithId} className="mt-8 space-y-6">
				<AdminInput
					label="Organization"
					name="organization"
					required
					defaultValue={experience.organization}
				/>

				<AdminInput label="Position" name="position" required defaultValue={experience.position} />

				<RichTextEditor
					label="Description"
					name="description"
					defaultValue={experience.description ?? ''}
				/>

				<div className="grid grid-cols-2 gap-4">
					<AdminInput
						label="Start Date"
						name="start_date"
						type="date"
						required
						defaultValue={experience.start_date}
					/>

					<AdminInput
						label="End Date"
						name="end_date"
						type="date"
						defaultValue={experience.end_date ?? ''}
					/>
				</div>

				<AdminCheckbox
					label="Current position"
					name="is_current"
					defaultChecked={experience.is_current}
				/>

				<AdminSelect
					label="Tech Stack"
					name="tech_stack"
					options={techStackOptions}
					multiple
					defaultValue={experience.tech_stack}
				/>

				<AdminInput
					label="Display Order"
					name="display_order"
					type="number"
					min="0"
					defaultValue={experience.display_order}
				/>

				<AdminSubmitButton>Save Changes</AdminSubmitButton>
			</form>
		</main>
	);
}
