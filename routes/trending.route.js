import { Router } from "express";
import { getTrendingMovies, updateSearchCount } from "../controller/trending.controller.js";

const trendingRouter = Router();

trendingRouter.get("/movies", getTrendingMovies);
trendingRouter.post("/update", updateSearchCount);

export default trendingRouter;