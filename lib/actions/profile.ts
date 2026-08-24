"use server";

import { revalidatePath } from "next/cache";

import { isAdmin } from "@/lib/auth/admin";
import { createClient } from "@/lib/supabase/server";
import { uploadProfileAvatar } from "@/lib/services/storage";
import { validateImage } from "@/lib/validations/file";
import { profileSchema } from "@/lib/validations/profile";

export async function saveProfile(
    profileId: string | null,
    formData: FormData
) {
    if (!(await isAdmin())) {
        throw new Error("Unauthorized");
    }

    const parsed = profileSchema.safeParse({
        name: formData.get("name"),
        headline: formData.get("headline"),
        bio: formData.get("bio"),
        email: formData.get("email"),
        github_url: formData.get("github_url") ?? "",
        linkedin_url:
            formData.get("linkedin_url") ?? "",
    });

    if (!parsed.success) {
        throw new Error(
            parsed.error.issues
                .map((issue) => issue.message)
                .join(", ")
        );
    }

    const supabase = await createClient();

    let id = profileId;

    if (id) {
        const { error } = await supabase
            .from("profiles")
            .update({
                ...parsed.data,
                github_url:
                    parsed.data.github_url || null,
                linkedin_url:
                    parsed.data.linkedin_url || null,
            })
            .eq("id", id);

        if (error) {
            throw new Error(error.message);
        }
    } else {
        const { data, error } = await supabase
            .from("profiles")
            .insert({
                ...parsed.data,
                github_url:
                    parsed.data.github_url || null,
                linkedin_url:
                    parsed.data.linkedin_url || null,
            })
            .select("id")
            .single();

        if (error) {
            throw new Error(error.message);
        }

        id = data.id;
    }

    const avatar = formData.get("avatar");

    if (
        avatar instanceof File &&
        avatar.size > 0 &&
        id
    ) {
        validateImage(avatar);

        const { publicUrl } =
            await uploadProfileAvatar(id, avatar);

        const { error } = await supabase
            .from("profiles")
            .update({
                avatar_url: publicUrl,
            })
            .eq("id", id);

        if (error) {
            throw new Error(error.message);
        }
    }

    revalidatePath("/");
    revalidatePath("/admin/settings");
}