import { z } from "zod";

export const profileSchema = z.object({
    name: z
        .string()
        .trim()
        .max(100),

    headline: z
        .string()
        .trim()
        .min(2)
        .max(150),

    bio: z
        .string()
        .trim()
        .min(10)
        .max(2000),

    email: z
        .string()
        .trim()
        .email(),

    github_url: z
        .string()
        .trim()
        .url()
        .or(z.literal("")),

    linkedin_url: z
        .string()
        .trim()
        .url()
        .or(z.literal("")),
});

export type ProfileInput =
    z.infer<typeof profileSchema>;