import express from 'express'
import tasksRouter from './routes/tasks'
import { errorHandler } from './middlewares/errorHandler'

const app = express()

app.use(express.json())

app.use('/tasks', tasksRouter)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
