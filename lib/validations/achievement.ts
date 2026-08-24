import { z } from "zod";

export const achievementSchema = z.object({
    title: z.string().trim().min(2).max(150),

    organization: z
        .string()
        .trim()
        .max(150)
        .optional(),

    description: z
        .string()
        .trim()
        .optional(),

    year: z.coerce
        .number()
        .int()
        .min(2000)
        .max(2100),

    credential_url: z
        .string()
        .trim()
        .url()
        .or(z.literal("")),

    display_order: z.coerce
        .number()
        .int()
        .min(0)
        .default(0),
});