import { z } from "zod";

export const projectSchema = z.object({
    title: z
        .string()
        .trim()
        .min(2, { message: "Title is required" })
        .max(100, { message: "Title must be less than 100 characters" }),

    slug: z
        .string()
        .trim()
        .min(2, { message: "Slug is required" })
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: "Slug must be lowercase and can only contain letters, numbers, and hyphens",
        }),

    description: z
        .string()
        .trim()
        .min(10, { message: "Description is required" }),

    github_url: z
        .string()
        .trim()
        .url()
        .or(z.literal("")),

    live_url: z
        .string()
        .trim()
        .url()
        .or(z.literal("")),

    tech_stack: z.array(z.string()).default([]),

    is_featured: z.boolean().default(false),

    display_order: z.coerce.number().int().min(0),
})

export type ProjectInput = z.infer<typeof projectSchema>;