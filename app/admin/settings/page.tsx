import {
    AdminFileInput,
    AdminInput,
    AdminPageHeader,
    AdminSubmitButton,
    AdminTextarea,
} from "@/app/components/admin";
import { saveProfile } from "@/lib/actions/profile";
import { getProfile } from "@/lib/services/profile";

export default async function SettingsPage() {
    const profile = await getProfile();

    const saveProfileWithId =
        saveProfile.bind(
            null,
            profile?.id ?? null
        );

    return (
        <main className="mx-auto max-w-3xl p-8">
            <AdminPageHeader
                title="Profile Settings"
                description="Manage information displayed on your public portfolio."
            />

            <form
                action={saveProfileWithId}
                className="mt-8 space-y-6"
            >
                <AdminInput
                    label="Name"
                    name="name"
                    required
                    defaultValue={profile?.name ?? ""}
                />

                <AdminInput
                    label="Headline"
                    name="headline"
                    required
                    placeholder="Full-Stack Developer"
                    defaultValue={profile?.headline ?? ""}
                />

                <AdminTextarea
                    label="Bio"
                    name="bio"
                    rows={7}
                    required
                    defaultValue={profile?.bio ?? ""}
                />

                <AdminInput
                    label="Public Email"
                    name="email"
                    type="email"
                    required
                    defaultValue={profile?.email ?? ""}
                />

                <AdminInput
                    label="GitHub URL"
                    name="github_url"
                    type="url"
                    defaultValue={profile?.github_url ?? ""}
                />

                <AdminInput
                    label="LinkedIn URL"
                    name="linkedin_url"
                    type="url"
                    defaultValue={profile?.linkedin_url ?? ""}
                />

                {profile?.avatar_url && (
                    <div>
                        <p className="mb-2 text-sm font-medium">
                            Current Avatar
                        </p>

                        <img
                            src={profile.avatar_url}
                            alt={profile.name}
                            className="h-24 w-24 rounded-full object-cover"
                        />
                    </div>
                )}

                <AdminFileInput
                    label={
                        profile?.avatar_url
                            ? "Replace Avatar"
                            : "Avatar"
                    }
                    name="avatar"
                    accept="image/jpeg,image/png,image/webp"
                />

                <AdminSubmitButton>
                    Save Profile
                </AdminSubmitButton>
            </form>
        </main>
    );
}