import { createClient } from "@/lib/supabase/server";

export async function getProfile() {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .limit(1)
        .maybeSingle();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}