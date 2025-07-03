import express from 'express'
import { router } from './routes/tasks'
import { errorHandler } from './middlewares/errorHandler'

const app = express()

app.use(express.json())

app.use('/api', router)

app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
