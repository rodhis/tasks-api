import { Handler, Request, Response } from "express";
import { Task } from "../models/Task";
import { z } from "zod";

const taskSchema = z.object({
    title: z.string().min(2).max(100),
    description: z.string().min(5).max(500),
    status: z.enum(["to-do", "in-progress", "done"]),
    priority: z.enum(["low", "medium", "high"])
});

export class TaskController {
    index: Handler = (req: Request, res: Response) => {
        const tasks = Task.findAll();
        res.json(tasks);
    }

    store = (req: Request, res: Response) => {
        const newTask = Task.create(req.body);
        res.status(201).json(newTask);
    }
}