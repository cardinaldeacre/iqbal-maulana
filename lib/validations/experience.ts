import { z } from "zod";

export const experienceSchema = z
    .object({
        organization: z.string().trim().min(2).max(150),
        position: z.string().trim().min(2).max(150),
        description: z.string().trim().optional(),

        start_date: z.string().min(1),
        end_date: z.string().optional(),

        is_current: z.boolean().default(false),

        tech_stack: z.array(z.string()).default([]),

        display_order: z.coerce
            .number()
            .int()
            .min(0)
            .default(0),
    })
    .refine(
        (data) => data.is_current || Boolean(data.end_date),
        {
            message:
                "End date is required when this is not a current position.",
            path: ["end_date"],
        }
    );