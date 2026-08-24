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