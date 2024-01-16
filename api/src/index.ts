import express, { Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'API testing is working!' })
})

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Database connection established'))
  .catch((err) => console.log(err))

app.listen(3000, () => console.log(`Server running on port 3000`))
