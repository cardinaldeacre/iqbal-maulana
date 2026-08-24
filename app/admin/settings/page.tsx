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
            <div>
                <h1 className="text-3xl font-bold">
                    Profile Settings
                </h1>

                <p className="mt-1 text-neutral-500">
                    Manage information displayed on your
                    portfolio.
                </p>
            </div>

            <form
                action={saveProfileWithId}
                className="mt-8 space-y-6"
            >
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        required
                        defaultValue={profile?.name ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="headline"
                        className="mb-2 block text-sm font-medium"
                    >
                        Headline
                    </label>

                    <input
                        id="headline"
                        name="headline"
                        required
                        placeholder="Full-Stack Developer"
                        defaultValue={profile?.headline ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="bio"
                        className="mb-2 block text-sm font-medium"
                    >
                        Bio
                    </label>

                    <textarea
                        id="bio"
                        name="bio"
                        required
                        rows={7}
                        defaultValue={profile?.bio ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                    >
                        Public Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        defaultValue={profile?.email ?? ""}
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="github_url"
                        className="mb-2 block text-sm font-medium"
                    >
                        GitHub URL
                    </label>

                    <input
                        id="github_url"
                        name="github_url"
                        type="url"
                        defaultValue={
                            profile?.github_url ?? ""
                        }
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="linkedin_url"
                        className="mb-2 block text-sm font-medium"
                    >
                        LinkedIn URL
                    </label>

                    <input
                        id="linkedin_url"
                        name="linkedin_url"
                        type="url"
                        defaultValue={
                            profile?.linkedin_url ?? ""
                        }
                        className="w-full rounded-lg border p-3"
                    />
                </div>

                <div>
                    <label
                        htmlFor="avatar"
                        className="mb-2 block text-sm font-medium"
                    >
                        Avatar
                    </label>

                    {profile?.avatar_url && (
                        <div className="mb-3">
                            {/* sementara pakai img,
                  nanti kita ganti next/image */}
                            <img
                                src={profile.avatar_url}
                                alt="Current avatar"
                                className="h-24 w-24 rounded-full object-cover"
                            />
                        </div>
                    )}

                    <input
                        id="avatar"
                        name="avatar"
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-lg bg-black px-5 py-3 text-white"
                >
                    Save Profile
                </button>
            </form>
        </main>
    );
}