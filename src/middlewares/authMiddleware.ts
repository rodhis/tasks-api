import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { Task } from '../models/Task'

export interface AuthRequest extends Request {
    user?: { id: number }
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction): void {
    const token = req.cookies.token

    if (!token) {
        res.status(401).json({
            error: 'User not logged in',
            message: 'Login is required to access this resource',
        })
        return
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload

        if (typeof decoded.sub !== 'number') {
            res.status(401).json({
                error: 'Invalid token',
                message: 'The provided token has invalid format',
            })
            return
        }

        req.user = { id: decoded.sub }
        next()
    } catch (err) {
        res.status(401).json({
            error: 'Invalid or expired token',
            message: 'Login is required again',
        })
    }
}

export function authorizeTaskOwner(req: AuthRequest, res: Response, next: NextFunction): void {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            res.status(400).json({ error: 'Invalid ID' })
            return
        }

        const task = Task.findById(id)
        if (!task) {
            res.status(404).json({ error: 'Task not found' })
            return
        }

        if (task.ownerId !== req.user!.id) {
            res.status(403).json({ error: 'Unauthorized access' })
            return
        }

        next()
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
