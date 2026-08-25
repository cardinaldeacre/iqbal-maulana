import { createClient } from '@/lib/supabase/server';

export async function getPortfolio() {
    const supabase = await createClient();

    const [
        profileResult,
        projectsResult,
        skillsResult,
        experiencesResult,
        achievementsResult,
    ] = await Promise.all([
        supabase.from('profiles').select('*').limit(1).maybeSingle(),
        supabase.from('projects').select('*').eq('is_featured', true).order('display_order').order("created_at", { ascending: false }),
        supabase.from('skills').select('*').order('display_order'),
        supabase.from('experiences').select('*').order('display_order').order("start_date", { ascending: false }),
        supabase.from('achievements').select('*').order('display_order').order("year", { ascending: false }),
    ]);

    if (profileResult.error) {
        throw new Error(profileResult.error.message);
    }

    if (projectsResult.error) {
        throw new Error(projectsResult.error.message);
    }

    if (experiencesResult.error) {
        throw new Error(experiencesResult.error.message);
    }

    if (skillsResult.error) {
        throw new Error(skillsResult.error.message);
    }

    if (achievementsResult.error) {
        throw new Error(achievementsResult.error.message);
    }

    return {
        profile: profileResult.data,
        featuredProjects: projectsResult.data,
        skills: skillsResult.data,
        experiences: experiencesResult.data,
        achievements: achievementsResult.data,
    };
}