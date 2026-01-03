import mongoose from "mongoose";

// Trending Movie Schema
const trendingMovieSchema = new mongoose.Schema(
    {
        searchTerm: { type: String, required: true },
        count: { type: Number, required: true },
        poster_url: { type: String, required: true },
        movie_id: { type: String, required: true },   
    },
    { timestamps: true }
);

// Trending Movie Model
const TrendingMovie = mongoose.model("TrendingMovie", trendingMovieSchema);

export default TrendingMovie;