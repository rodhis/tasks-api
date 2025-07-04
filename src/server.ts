import express from 'express'
import cookieParser from 'cookie-parser';
import tasksRouter from './routes/tasks'
import authRouter from './routes/auth';
import { errorHandler } from './middlewares/errorHandler'


const app = express()

app.use(express.json())
app.use(cookieParser());

app.use('/', authRouter);
app.use('/tasks', tasksRouter)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
