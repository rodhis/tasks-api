import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../models/User'

export class UserController {
    static async register(req: Request, res: Response) {
        const { username, password } = req.body

        if (!username || !password || password.length < 6) {
            return res.status(400).json({ error: 'Username inválido ou senha muito curta' })
        }
        if (User.findByUsername(username)) {
            return res.status(409).json({ error: 'Username já existe' })
        }

        const user = User.create(username, password)
        return res.status(201).json({ id: user.id, username: user.username })
    }

    static async login(req: Request, res: Response) {
        const { username, password } = req.body
        const user = User.findByUsername(username)
        if (!user || !(await user.verifyPassword(password))) {
            return res.status(401).json({ error: 'Credenciais inválidas' })
        }

        const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' })
        res.cookie('token', token, { httpOnly: true })
        return res.json({ message: 'Autenticado' })
    }

    static async logout(req: Request, res: Response) {
        res.clearCookie('token')
        return res.json({ message: 'Logout efetuado com sucesso' })
    }
}
