import { Router } from 'express'
import { TaskController } from '../controllers/TaskController'
import { authenticate, authorizeTaskOwner } from '../middlewares/authMiddleware'

const tasksRouter = Router()
const taskController = new TaskController()

tasksRouter.get('/tasks', taskController.index)
tasksRouter.get('/tasks/:id', taskController.show)
tasksRouter.post('/tasks', authenticate, taskController.create)
tasksRouter.put('/tasks/:id', authenticate, authorizeTaskOwner, taskController.update)
tasksRouter.delete('/tasks/:id', authenticate, authorizeTaskOwner, taskController.delete)

export default tasksRouter
