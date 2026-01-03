import 'dotenv/config';
import express from 'express';
import connectDB from './database/mongodb.js';
import trendingRouter from './routes/trending.route.js';

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes for trending movies
app.use('/api/v1/trending', trendingRouter);

// Start the server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

export default app;