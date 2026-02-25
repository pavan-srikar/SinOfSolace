import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// 1. Correct Imports
import authRoutes from './middleware/auth.js'; // Points to Login/Register logic
import chatRoutes from './routes/chat.js';
import taskRoutes from './routes/tasks.js';

const app = express();

// 2. Global Middleware (Order Matters!)
app.use(cors());
app.use(express.json());

// 3. Define Routes
app.use('/api/auth', authRoutes); // Login & Signup
app.use('/api/chat', chatRoutes); // Protected by authenticateToken inside chat.ts
app.use('/api/tasks', taskRoutes); // Protected by authenticateToken inside tasks.ts

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 RPG Engine running on port ${PORT}`));