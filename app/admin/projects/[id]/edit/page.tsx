import Link from 'next/link';
import {notFound} from 'next/navigation';

import {
	AdminCheckbox,
	AdminFileInput,
	AdminInput,
	AdminSelect,
	AdminSubmitButton,
	AdminTextarea,
} from '@/components/admin';
import {techStackOptions} from '@/app/constants/admin-options';
import {updateProject} from '@/lib/actions/projects';
import {getProjectById} from '@/lib/services/projects';

interface EditProjectPageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function EditProjectPage({params}: EditProjectPageProps) {
	const {id} = await params;

	let project;

	try {
		project = await getProjectById(id);
	} catch {
		notFound();
	}

	const updateProjectWithId = updateProject.bind(null, id);

	return (
		<main className="mx-auto max-w-3xl p-8">
			<Link href="/admin/projects" className="text-sm text-neutral-500">
				← Back
			</Link>

			<h1 className="mt-6 text-3xl font-bold">Edit Project</h1>

			<form action={updateProjectWithId} className="mt-8 space-y-6">
				<AdminInput label="Project Title" name="title" required defaultValue={project.title} />

				<AdminInput label="Slug" name="slug" required defaultValue={project.slug} />

				<AdminTextarea
					label="Description"
					name="description"
					rows={6}
					required
					defaultValue={project.description}
				/>

				<AdminInput
					label="GitHub URL"
					name="github_url"
					type="url"
					defaultValue={project.github_url ?? ''}
				/>

				<AdminInput
					label="Live URL"
					name="live_url"
					type="url"
					defaultValue={project.live_url ?? ''}
				/>

				<AdminSelect
					label="Tech Stack"
					name="tech_stack"
					multiple
					options={techStackOptions}
					defaultValue={project.tech_stack}
				/>

				<AdminInput
					label="Display Order"
					name="display_order"
					type="number"
					min="0"
					defaultValue={project.display_order}
				/>

				<AdminCheckbox
					label="Featured Project"
					name="is_featured"
					defaultChecked={project.is_featured}
				/>

				{project.thumbnail_url && (
					<div>
						<p className="mb-2 text-sm font-medium">Current Thumbnail</p>

						<img
							src={project.thumbnail_url}
							alt={project.title}
							className="h-32 rounded-lg object-cover"
						/>
					</div>
				)}

				<AdminFileInput
					label="Replace Thumbnail"
					name="thumbnail"
					accept="image/jpeg,image/png,image/webp"
				/>

				<AdminSubmitButton>Save Changes</AdminSubmitButton>
			</form>
		</main>
	);
}
