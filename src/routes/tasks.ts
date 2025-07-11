import { Router } from 'express'
import { TaskController } from '../controllers/TaskController'
import { authenticate, authorizeTaskOwner } from '../middlewares/authMiddleware'

const tasksRouter = Router()
const taskController = new TaskController()

tasksRouter.get('/', authenticate, taskController.index)
tasksRouter.get('/:id', authenticate, authorizeTaskOwner, taskController.show)
tasksRouter.post('/', authenticate, taskController.create)
tasksRouter.put('/:id', authenticate, authorizeTaskOwner, taskController.update)
tasksRouter.delete('/:id', authenticate, authorizeTaskOwner, taskController.delete)

export default tasksRouter
