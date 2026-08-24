"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/auth/admin";
import { createClient } from "@/lib/supabase/server";
import { skillSchema } from "@/lib/validations/skill";

function parseSkill(formData: FormData) {
    return skillSchema.safeParse({
        name: formData.get("name"),
        category: formData.get("category") ?? "",
        icon_url: formData.get("icon_url") ?? "",
        display_order: formData.get("display_order") ?? 0,
    });
}

export async function createSkill(
    formData: FormData
) {
    if (!(await isAdmin())) {
        throw new Error("Unauthorized");
    }

    const parsed = parseSkill(formData);

    if (!parsed.success) {
        throw new Error(
            parsed.error.issues
                .map((issue) => issue.message)
                .join(", ")
        );
    }

    const supabase = await createClient();

    const { error } = await supabase
        .from("skills")
        .insert({
            ...parsed.data,
            category: parsed.data.category || null,
            icon_url: parsed.data.icon_url || null,
        });

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/");
    revalidatePath("/admin/skills");

    redirect("/admin/skills");
}

export async function updateSkill(
    id: string,
    formData: FormData
) {
    if (!(await isAdmin())) {
        throw new Error("Unauthorized");
    }

    const parsed = parseSkill(formData);

    if (!parsed.success) {
        throw new Error(
            parsed.error.issues
                .map((issue) => issue.message)
                .join(", ")
        );
    }

    const supabase = await createClient();

    const { error } = await supabase
        .from("skills")
        .update({
            ...parsed.data,
            category: parsed.data.category || null,
            icon_url: parsed.data.icon_url || null,
        })
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/");
    revalidatePath("/admin/skills");

    redirect("/admin/skills");
}

export async function deleteSkill(id: string) {
    if (!(await isAdmin())) {
        throw new Error("Unauthorized");
    }

    const supabase = await createClient();

    const { error } = await supabase
        .from("skills")
        .delete()
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/");
    revalidatePath("/admin/skills");
}