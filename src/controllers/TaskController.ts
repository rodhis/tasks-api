import { Handler, Request, Response } from 'express'
import { Task } from '../models/Task'
import { HttpError } from '../errors/HttpError'
import { taskCreateSchema, taskUpdateSchema } from '../schemas/validationSchemas'

export class TaskController {
    //GET: /api/tasks
    index: Handler = (req: Request, res: Response) => {
        const tasks = Task.findAll()
        res.json(tasks)
    }

    //GET: /api/tasks/:id
    show: Handler = (req: Request, res: Response) => {
        const { id } = req.params
        const task = Task.findById(+id)
        if (!task) throw new HttpError(404, 'Task not found')
        res.json(task)
    }

    //POST: /api/tasks
    store = (req: Request, res: Response) => {
        const parsedBody = taskCreateSchema.parse(req.body)
        const newTask = Task.create(parsedBody)
        res.status(201).json(newTask)
    }

    //PUT: /api/tasks/:id
    update: Handler = (req: Request, res: Response) => {
        const { id } = req.params
        const parsedBody = taskUpdateSchema.parse(req.body)
        const updatedTask = Task.update(+id, parsedBody)
        if (!updatedTask) throw new HttpError(404, 'Task not found')
        res.status(201).json(updatedTask)
    }

    //DELETE: /api/tasks/:id
    delete: Handler = (req: Request, res: Response) => {
        const { id } = req.params
        const deletedTask = Task.delete(+id)
        if (!deletedTask) throw new HttpError(404, 'Task not found')
        res.status(200).json(deletedTask)
    }
}
