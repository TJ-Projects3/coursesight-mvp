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
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());

// Routes
app.use('/api/courses', courseRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, ".next")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, ".next", "server", "pages", "index.html"));
  });
}

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