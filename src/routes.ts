import { Router } from 'express'
import { TaskController } from './controllers/TaskController'

const router = Router()
const taskController = new TaskController()

router.get('/api/tasks', taskController.index)
router.post('/api/tasks', taskController.store)
router.get('/api/tasks/:id', taskController.show)
router.put('/api/tasks/:id', taskController.update)
router.delete('/api/tasks/:id', taskController.delete)

export { router }
