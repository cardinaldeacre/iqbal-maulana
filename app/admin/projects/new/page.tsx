import Link from 'next/link';

import {
	AdminCheckbox,
	AdminFileInput,
	AdminInput,
	AdminSubmitButton,
	AdminTextarea,
} from '@/components/admin';
import {techStackOptions} from '@/app/constants/admin-options';
import {createProject} from '@/lib/actions/projects';
import {AdminMultiSelect} from '@/components/admin/admin-multi-select';
import {RichTextEditor} from '@/components/admin/rich-text-editor';

export default function NewProjectPage() {
	return (
		<main className="mx-auto max-w-3xl p-8">
			<Link href="/admin/projects" className="text-sm text-neutral-500">
				← Back
			</Link>

			<h1 className="mt-6 text-3xl font-bold">Add Project</h1>

			<form action={createProject} className="mt-8 space-y-6">
				<AdminInput label="Project Title" name="title" required />

				<AdminInput label="Slug" name="slug" required />

				{/* <AdminTextarea label="Description" name="description" rows={6} required /> */}
				<RichTextEditor
					label="Description"
					name="description"
					placeholder="Describe the project, its purpose, features, and technical implementation..."
				/>

				<AdminInput label="GitHub URL" name="github_url" type="url" />

				<AdminInput label="Live URL" name="live_url" type="url" />

				<AdminMultiSelect label="Tech Stack" name="tech_stack" options={techStackOptions} />

				<AdminInput
					label="Display Order"
					name="display_order"
					type="number"
					min="0"
					defaultValue="0"
				/>

				<AdminCheckbox label="Featured Project" name="is_featured" />

				<AdminFileInput
					label="Thumbnail"
					name="thumbnail"
					accept="image/jpeg,image/png,image/webp"
				/>

				<AdminSubmitButton>Create Project</AdminSubmitButton>
			</form>
		</main>
	);
}
