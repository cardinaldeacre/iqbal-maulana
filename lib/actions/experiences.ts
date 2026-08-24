"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/auth/admin";
import { createClient } from "@/lib/supabase/server";
import { experienceSchema } from "@/lib/validations/experience";
import { deleteStorageFolder } from "../services/storage";

function parseExperience(formData: FormData) {
    return experienceSchema.safeParse({
        organization: formData.get("organization"),
        position: formData.get("position"),
        description: formData.get("description") ?? "",
        start_date: formData.get("start_date"),
        end_date: formData.get("end_date") ?? "",
        is_current: formData.get("is_current") === "on",

        tech_stack: formData
            .getAll("tech_stack")
            .map(String)
            .filter(Boolean),

        display_order: formData.get("display_order") ?? 0,
    });
}

export async function createExperience(
    formData: FormData
) {
    if (!(await isAdmin())) {
        throw new Error("Unauthorized");
    }

    const parsed = parseExperience(formData);

    if (!parsed.success) {
        throw new Error(
            parsed.error.issues
                .map((issue) => issue.message)
                .join(", ")
        );
    }

    const supabase = await createClient();

    const { error } = await supabase
        .from("experiences")
        .insert({
            ...parsed.data,
            description: parsed.data.description || null,

            end_date: parsed.data.is_current
                ? null
                : parsed.data.end_date || null,
        });

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/");
    revalidatePath("/admin/experiences");

    redirect("/admin/experiences");
}

export async function updateExperience(
    id: string,
    formData: FormData
) {
    if (!(await isAdmin())) {
        throw new Error("Unauthorized");
    }

    const parsed = parseExperience(formData);

    if (!parsed.success) {
        throw new Error(
            parsed.error.issues
                .map((issue) => issue.message)
                .join(", ")
        );
    }

    const supabase = await createClient();

    const { error } = await supabase
        .from("experiences")
        .update({
            ...parsed.data,
            description: parsed.data.description || null,

            end_date: parsed.data.is_current
                ? null
                : parsed.data.end_date || null,
        })
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/");
    revalidatePath("/admin/experiences");

    redirect("/admin/experiences");
}

export async function deleteExperience(id: string) {
    if (!(await isAdmin())) {
        throw new Error("Unauthorized");
    }

    const supabase = await createClient();

    await deleteStorageFolder(`experiences/${id}`);

    const { error } = await supabase
        .from("experiences")
        .delete()
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/");
    revalidatePath("/admin/experiences");
}