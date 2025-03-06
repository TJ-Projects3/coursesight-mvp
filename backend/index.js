import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import courseRoutes from './routes/courseRoutes.js';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve()

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://course-sight-git-test-tiwalayo-oluwalades-projects.vercel.app',
    'https://course-sight-oarw69pyo-tiwalayo-oluwalades-projects.vercel.app',
  ].filter(Boolean),
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Apply CORS middleware before routes
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());

// Routes
app.use('/api/courses', courseRoutes);

// Start server only after DB connection
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
    process.exit(1);
  });

export default app;