import { Handler, Request, Response } from "express";
import { Task } from "../models/Task";
import { z } from "zod";
import { HttpError } from "../errors/HttpError";

const taskCreateSchema = z.object({
    title: z.string().min(2).max(100),
    description: z.string().min(5).max(500),
    status: z.enum(["to-do", "in-progress", "done"]),
    priority: z.enum(["low", "medium", "high"])
});

const taskUpdateSchema = z.object({
    title: z.string().min(2).max(100).optional(),
    description: z.string().min(5).max(500).optional(),
    status: z.enum(["to-do", "in-progress", "done"]).optional(),
    priority: z.enum(["low", "medium", "high"]).optional()
})

export class TaskController {

    //GET: /api/tasks
    index: Handler = (req: Request, res: Response) => {
        const tasks = Task.findAll();
        res.json(tasks);
    }

    //POST: /api/tasks
    store = (req: Request, res: Response) => {
        const parsedBody = taskCreateSchema.parse(req.body);
        const newTask = Task.create(parsedBody);
        res.status(201).json(newTask);
    }

    //GET: /api/tasks/:id
    show: Handler = (req: Request, res: Response) => {
        const { id } = req.params;
        const task = Task.findById(+id);
        if (!task) throw new HttpError(404, "Task not found");
        res.json(task);
    }

    //PUT: /api/tasks/:id
    update: Handler = (req: Request, res: Response) => {
        const { id } = req.params;
        const parsedBody = taskUpdateSchema.parse(req.body);
        const updatedTask = Task.update(+id, parsedBody);
        if (!updatedTask) throw new HttpError(404, "Task not found");
        res.json(updatedTask);
    }
}