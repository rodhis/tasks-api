import { Router } from 'express'
import { TaskController } from '../controllers/TaskController'

const tasksRouter = Router()
const taskController = new TaskController()

tasksRouter.get('/tasks', taskController.index)
tasksRouter.post('/tasks', taskController.store)
tasksRouter.get('/tasks/:id', taskController.show)
tasksRouter.put('/tasks/:id', taskController.update)
tasksRouter.delete('/tasks/:id', taskController.delete)

export default tasksRouter
