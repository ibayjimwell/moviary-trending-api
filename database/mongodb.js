import mongoose from "mongoose";
const DB_URI = process.env.DB_URI;

// Throw an error if no DB_URI
if (!DB_URI) {
    throw new Error('Please define the MONGODB_URI.');
}

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to the database.`)
    } catch (error) {
        console.error(`Error connecting to database. ${error}`);
        process.exit(1);
    }
}

export default connectDB;