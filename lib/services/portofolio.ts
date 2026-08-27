import sanitizeHtml from 'sanitize-html';

import { createClient } from '@/lib/supabase/server';

const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
    allowedTags: [
        'p',
        'strong',
        'em',
        'h2',
        'h3',
        'ul',
        'ol',
        'li',
        'blockquote',
        'a',
        'code',
        'pre',
        'br',
    ],

    allowedAttributes: {
        a: ['href', 'target', 'rel'],
    },

    allowedSchemes: [
        'http',
        'https',
        'mailto',
    ],
};

export async function getPublicPortfolioData() {
    const supabase = await createClient();

    const [
        profileResult,
        projectsResult,
        skillsResult,
        experiencesResult,
        achievementsResult,
    ] = await Promise.all([
        supabase
            .from('profiles')
            .select('*')
            .limit(1)
            .maybeSingle(),

        supabase
            .from('projects')
            .select('*')
            .eq('is_featured', true)
            .order('display_order')
            .order('created_at', {
                ascending: false,
            }),

        supabase
            .from('skills')
            .select('*')
            .order('display_order'),

        supabase
            .from('experiences')
            .select('*')
            .order('display_order')
            .order('start_date', {
                ascending: false,
            }),

        supabase
            .from('achievements')
            .select('*')
            .order('display_order')
            .order('year', {
                ascending: false,
            }),
    ]);

    if (profileResult.error) {
        throw new Error(profileResult.error.message);
    }

    if (projectsResult.error) {
        throw new Error(projectsResult.error.message);
    }

    if (skillsResult.error) {
        throw new Error(skillsResult.error.message);
    }

    if (experiencesResult.error) {
        throw new Error(experiencesResult.error.message);
    }

    if (achievementsResult.error) {
        throw new Error(achievementsResult.error.message);
    }

    const featuredProjects = projectsResult.data.map(
        (project) => ({
            ...project,

            description: sanitizeHtml(
                project.description ?? '',
                SANITIZE_OPTIONS
            ),
        })
    );

    return {
        profile: profileResult.data,
        featuredProjects,
        skills: skillsResult.data,
        experiences: experiencesResult.data,
        achievements: achievementsResult.data,
    };
}