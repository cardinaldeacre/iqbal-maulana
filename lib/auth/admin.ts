import { createClient } from "@/lib/supabase/server";

export async function isAdmin() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getClaims();

    if (error || !data?.claims?.sub) {
        return false;
    }

    const userId = data.claims.sub;

    const { data: admin } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", userId)
        .maybeSingle();

    return Boolean(admin);
}
