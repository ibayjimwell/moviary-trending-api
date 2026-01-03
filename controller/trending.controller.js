import TrendingMovie from "../model/trending.model.js";

export const getTrendingMovies = async (req, res) => {
    try {
        // Query: Sort by 'count' in descending order, limit to 5 results
        const trendingMovies = await TrendingMovie.find()
            .sort({ count: -1 })
            .limit(5);

        res.status(200).json({
            success: true,
            data: trendingMovies
        });
    } catch (error) {
        console.error(`Error in getTrendingMovies: ${error.message}`);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateSearchCount = async (req, res) => {
    const { searchTerm, movie } = req.body;

    if (!searchTerm || !movie) {
        return res.status(400).json({ success: false, message: "Search term and movie data are required" });
    }

    try {
        // We find by movie_id instead of searchTerm to ensure one entry per movie
        const result = await TrendingMovie.findOneAndUpdate(
            { movie_id: movie.id.toString() }, // Unique Filter
            { 
                $inc: { count: 1 }, // Increment the count
                $set: { 
                    // Update these in case the movie data changed (e.g. new poster)
                    searchTerm: searchTerm.toLowerCase(), 
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
            },
            { 
                upsert: true, // Create it if it doesn't exist
                setDefaultsOnInsert: true 
            }
        );

        res.status(200).json({ success: true , message: "Search count updated successfully" });
    } catch (error) {
        console.error(`Error in updateSearchCount: ${error.message}`);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};