import express from "express";
import { middleware } from "../middlewares/authentication-middleware.js";
import { movieController } from "../controllers/movies-controller.js";

const moviesRouter = express.Router();

moviesRouter.get('/movies', movieController.listMovies); 
moviesRouter.post('/movies', middleware.verifyUserByEmail, movieController.insertMovies); 
moviesRouter.put('/movies/:id', movieController.movieWatched);
moviesRouter.delete('/movies/:id',middleware.verifyUserByEmail, movieController.deleteMovies);


export { moviesRouter};