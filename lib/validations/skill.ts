import { z } from "zod";

export const skillSchema = z.object({
    name: z.string().trim().min(1).max(100),

    category: z
        .string()
        .trim()
        .max(100)
        .optional(),

    icon_url: z
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