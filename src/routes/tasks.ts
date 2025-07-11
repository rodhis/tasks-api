import { Router } from 'express'
import { TaskController } from '../controllers/TaskController'
import { authenticate, authorizeTaskOwner } from '../middlewares/authMiddleware'

const tasksRouter = Router()

tasksRouter.get('/', authenticate, TaskController.index)
tasksRouter.get('/:id', authenticate, authorizeTaskOwner, TaskController.show)
tasksRouter.post('/', authenticate, TaskController.create)
tasksRouter.put('/:id', authenticate, authorizeTaskOwner, TaskController.update)
tasksRouter.delete('/:id', authenticate, authorizeTaskOwner, TaskController.delete)

export default tasksRouter
