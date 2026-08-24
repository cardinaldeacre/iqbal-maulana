import { createClient } from "@/lib/supabase/server";

export async function getAchievements() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("achievements")
        .select("*")
        .order("display_order")
        .order("year", { ascending: false });

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function getAchievementById(
    id: string
) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("achievements")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}