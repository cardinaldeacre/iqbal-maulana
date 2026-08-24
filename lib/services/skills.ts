import { createClient } from "@/lib/supabase/server";

export async function getSkills() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("display_order");

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function getSkillById(id: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("skills")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}