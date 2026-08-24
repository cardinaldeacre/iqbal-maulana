"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/auth/admin";
import { createClient } from "@/lib/supabase/server";
import { projectSchema } from "@/lib/validations/project";

export async function createProject(formData: FormData) {
    const admin = await isAdmin();

    if (!admin) {
        redirect("/login");
    }

    const parsed = projectSchema.safeParse({
        title: formData.get("title"),
        slug: formData.get("slug"),
        description: formData.get("description"),

        github_url: formData.get("github_url") ?? "",
        live_url: formData.get("live_url") ?? "",

        tech_stack: formData.getAll("tech_stack").map(String).filter(Boolean),
        is_featured: formData.get("is_featured") === "on",
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
        .from("projects")
        .insert({
            ...parsed.data,

            github_url:
                parsed.data.github_url || null,

            live_url:
                parsed.data.live_url || null,
        });

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/admin/projects");
    revalidatePath("/");

    redirect("/admin/projects");
}

export async function updateProject(id: string, formData: FormData) {
    const admin = await isAdmin();

    if (!admin) {
        redirect("/login");
    }

    const parsed = projectSchema.safeParse({
        title: formData.get("title"),
        slug: formData.get("slug"),
        description: formData.get("description"),

        github_url: formData.get("github_url") ?? "",
        live_url: formData.get("live_url") ?? "",

        tech_stack: formData.getAll("tech_stack").map(String).filter(Boolean),
        is_featured: formData.get("is_featured") === "on",
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
        .from("projects")
        .update({
            ...parsed.data,

            github_url:
                parsed.data.github_url || null,

            live_url:
                parsed.data.live_url || null,
        })
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/admin/projects");
    revalidatePath(`/admin/projects/${id}/edit`);
    revalidatePath("/");
    revalidatePath(`/projects/${parsed.data.slug}`);

    redirect("/admin/projects");
}

export async function deleteProject(id: string) {
    const admin = await isAdmin();

    if (!admin) {
        redirect("/login");
    }

    const supabase = await createClient();
    const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/admin/projects");
    revalidatePath("/");
}