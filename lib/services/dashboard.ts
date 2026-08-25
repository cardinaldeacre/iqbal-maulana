import { createClient } from "@/lib/supabase/server";

export async function getDashboardSummary() {
    const supabase = await createClient();

    const [
        projects,
        experiences,
        skills,
        achievements,
    ] = await Promise.all([
        supabase
            .from("projects")
            .select("*", {
                count: "exact",
                head: true,
            }),

        supabase
            .from("experiences")
            .select("*", {
                count: "exact",
                head: true,
            }),

        supabase
            .from("skills")
            .select("*", {
                count: "exact",
                head: true,
            }),

        supabase
            .from("achievements")
            .select("*", {
                count: "exact",
                head: true,
            }),
    ]);

    return {
        projects: projects.count ?? 0,
        experiences: experiences.count ?? 0,
        skills: skills.count ?? 0,
        achievements: achievements.count ?? 0,
    };
}