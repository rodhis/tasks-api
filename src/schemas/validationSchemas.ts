import { z } from "zod";

export const taskCreateSchema = z.object({
    title: z.string().min(2).max(100),
    description: z.string().min(5).max(500),
    status: z.enum(["to-do", "in-progress", "done"]),
    priority: z.enum(["low", "medium", "high"]),
    ownerId: z.number().int().positive()
});

export const taskUpdateSchema = z.object({
    title: z.string().min(2).max(100).optional(),
    description: z.string().min(5).max(500).optional(),
    status: z.enum(["to-do", "in-progress", "done"]).optional(),
    priority: z.enum(["low", "medium", "high"]).optional(),
    ownerId: z.number().int().positive().optional()
})