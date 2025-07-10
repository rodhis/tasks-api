import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { Task } from '../models/Task';

export interface AuthRequest extends Request {
  user?: { id: number };
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: 'Não autenticado' });

    let payload: JwtPayload;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    if (typeof decoded !== 'object' || decoded === null) {
      throw new Error('Payload inválido');
    }
    payload = decoded;
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }

  const sub = payload.sub;
  if (typeof sub !== 'number') {
    return res.status(401).json({ error: 'Token inválido: subject inválido' });
  }

  req.user = { id: sub };
  next();
}


