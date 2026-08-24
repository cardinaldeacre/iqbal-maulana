import { createClient } from "@/lib/supabase/server";

export async function getExperiences() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("experiences")
        .select("*")
        .order("display_order")
        .order("start_date", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function getExperienceById(id: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("experiences")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}