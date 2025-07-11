import { Request, Response } from 'express'
import { Task } from '../models/Task'
import { HttpError } from '../errors/HttpError'
import { taskCreateSchema, taskUpdateSchema } from '../schemas/validationSchemas'
import { AuthRequest } from '../middlewares/authMiddleware'

export class TaskController {
    static index(req: AuthRequest, res: Response) {
        const allTasks = Task.findAll()
        const userTasks = allTasks.filter((task) => task.ownerId === req.user!.id)
        res.json(userTasks)
    }

    static show(req: Request, res: Response) {
        const { id } = req.params
        const task = Task.findById(+id)
        if (!task) throw new HttpError(404, 'Task not found')
        res.json(task)
    }

    static create(req: AuthRequest, res: Response) {
        const parsedBody = taskCreateSchema.parse(req.body)

        const newTask = Task.create({
            ...parsedBody,
            ownerId: req.user!.id,
        })
        res.status(201).json(newTask)
    }

    static update(req: Request, res: Response) {
        const { id } = req.params
        const parsedBody = taskUpdateSchema.parse(req.body)
        const updatedTask = Task.update(+id, parsedBody)
        if (!updatedTask) throw new HttpError(404, 'Task not found')
        res.status(200).json(updatedTask)
    }

    static delete(req: Request, res: Response) {
        const { id } = req.params
        const deletedTask = Task.delete(+id)
        if (!deletedTask) throw new HttpError(404, 'Task not found')
        res.status(204).send()
    }
}
