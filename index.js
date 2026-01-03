import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import connectDB from './database/mongodb.js';
import trendingRouter from './routes/trending.route.js';

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes for trending movies
app.use('/api/v1/trending', trendingRouter);

// Start the server
app.listen(PORT, HOST, () => {
    connectDB();
    console.log(`Server is running on port ${PORT} and host ${HOST}`);
});

export default app;