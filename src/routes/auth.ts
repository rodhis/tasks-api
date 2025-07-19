import { Router, Request, Response, NextFunction } from 'express'
import { UserController } from '../controllers/UserController'

const authRouter = Router()

// Wrapper to handle async errors
type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>
function wrap(fn: AsyncHandler) {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(next)
    }
}

authRouter.post('/register', wrap(UserController.register))
authRouter.post('/login', wrap(UserController.login))
authRouter.post('/logout', wrap(UserController.logout))

export default authRouter
