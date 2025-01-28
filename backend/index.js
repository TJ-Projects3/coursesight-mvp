import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import courseRoutes from './routes/courseRoutes.js'

dotenv.config()

const app = express();
const port = process.env.PORT;


app.use(express.json())

app.use('/api/courses', courseRoutes)

app.listen(port, () => {
  connectDB()
  console.log("Server is running on localhost:" + port)
})