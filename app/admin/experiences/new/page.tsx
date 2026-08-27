import Link from 'next/link';

import {AdminCheckbox, AdminInput, AdminSubmitButton} from '@/components/admin';
import {techStackOptions} from '@/app/constants/admin-options';
import {createExperience} from '@/lib/actions/experiences';
import {RichTextEditor} from '@/components/admin/rich-text-editor';
import {AdminMultiSelect} from '@/components/admin/admin-multi-select';

export default function NewExperiencePage() {
	return (
		<main className="mx-auto max-w-3xl p-8">
			<Link href="/admin/experiences" className="text-sm text-neutral-500">
				← Back
			</Link>

			<h1 className="mt-6 text-3xl font-bold">Add Experience</h1>

			<form action={createExperience} className="mt-8 space-y-6">
				<AdminInput label="Organization" name="organization" required />

				<AdminInput label="Position" name="position" required />

				<RichTextEditor label="Description" name="description" />

				<div className="grid grid-cols-2 gap-4">
					<AdminInput label="Start Date" name="start_date" type="date" required />

					<AdminInput label="End Date" name="end_date" type="date" />
				</div>

				<AdminCheckbox label="Current position" name="is_current" />

				<AdminInput
					label="Display Order"
					name="display_order"
					type="number"
					min="0"
					defaultValue="0"
				/>

				<AdminSubmitButton>Create Experience</AdminSubmitButton>
			</form>
		</main>
	);
}
