"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/auth/admin";
import { createClient } from "@/lib/supabase/server";
import { projectSchema } from "@/lib/validations/project";
import { validateImage } from "../validations/file";
import { deleteStorageFolder, uploadAchievementImage } from "../services/storage";
import { achievementSchema } from "../validations/achievement";

export async function createAchievement(formData: FormData) {
    const admin = await isAdmin();

    if (!admin) {
        redirect("/login");
    }

    const parsed = achievementSchema.safeParse({
        title: formData.get("title"),
        organization: formData.get("organization"),
        description: formData.get("description"),

        year: formData.get("year"),
        credential_url: formData.get("credential_url") ?? "",

        display_order: formData.get("display_order") ?? 0,
    });

    if (!parsed.success) {
        throw new Error(
            parsed.error.issues
                .map((issue) => issue.message)
                .join(", ")
        );
    }

    const supabase = await createClient();

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    console.log("Storage user:", user?.id);
    console.log("Storage auth error:", userError);

    const { data: achievement, error } = await supabase
        .from("achievements")
        .insert({
            ...parsed.data,
        })
        .select("id")
        .single();

    if (error) {
        throw new Error(error.message);
    }

    if (!achievement) {
        throw new Error("Failed to create achievement.");
    }

    const imageFile = formData.get("image") as File | null;

    if (imageFile instanceof File && imageFile.size > 0) {
        validateImage(imageFile);

        const { publicUrl } = await uploadAchievementImage(achievement.id, imageFile);

        const { error: updateError } = await supabase
            .from("achievements")
            .update({ image_url: publicUrl })
            .eq("id", achievement.id);

        if (updateError) {
            throw new Error(updateError.message);
        }
    }

    revalidatePath("/admin/achievements");
    revalidatePath("/");

    redirect("/admin/achievements");
}

export async function updateAchievement(id: string, formData: FormData) {
    const admin = await isAdmin();

    if (!admin) {
        redirect("/login");
    }

    const parsed = achievementSchema.safeParse({
        title: formData.get("title"),
        organization: formData.get("organization"),
        description: formData.get("description"),

        year: formData.get("year"),
        credential_url: formData.get("credential_url") ?? "",

        display_order: formData.get("display_order") ?? 0,
    });

    if (!parsed.success) {
        throw new Error(
            parsed.error.issues
                .map((issue) => issue.message)
                .join(", ")
        );
    }

    const supabase = await createClient();

    const { error } = await supabase
        .from("achievements")
        .update({
            ...parsed.data,
        })
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    const imageFile = formData.get("image") as File | null;

    if (imageFile instanceof File && imageFile.size > 0) {
        validateImage(imageFile);

        const { publicUrl } = await uploadAchievementImage(id, imageFile);

        const { error: updateError } = await supabase
            .from("achievements")
            .update({ image_url: publicUrl })
            .eq("id", id);

        if (updateError) {
            throw new Error(updateError.message);
        }
    }

    revalidatePath("/admin/achievements");
    revalidatePath("/");

    redirect("/admin/achievements");
}

export async function deleteAchievement(id: string) {
    const admin = await isAdmin();

    if (!admin) {
        redirect("/login");
    }

    const supabase = await createClient();

    const { error } = await supabase
        .from("achievements")
        .delete()
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    await deleteStorageFolder(`achievements/${id}`);

    revalidatePath("/admin/achievements");
    revalidatePath("/");

    redirect("/admin/achievements");
}   
