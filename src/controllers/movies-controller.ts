import { Request, Response } from "express";
import { movieRepository } from "../repositories/movie-repository.js";
import { Movie, MovieEntity } from "../protocols/Movie.js";
import { MovieSchema } from "../schemas/movie-schema.js";
import { IUser } from "../protocols/User.js";


class MovieController {
    async listMovies(req: Request, res: Response){
        const resultado = await movieRepository.findMany();
    
        if(resultado){
            return res.send(resultado);
        }else{
            return res.send(`You don't own movies yet...`);
        }
    }
    
    async insertMovies(req: Request, res: Response){
        const newMovie = req.body as Movie;
        const {error} = MovieSchema.validate(newMovie);
        if(error){
            return res.status(400).send({
                message: error.message
            })
        }
        const resultado = await movieRepository.insertUnique(newMovie);
        return res.send(`Movie inserted ${resultado.rowCount}`);
    }
    async movieWatched(req: Request, res: Response){
        const id = parseInt(req.params.id);
    
        const movieInfo: boolean | Movie = await movieRepository.getMovieById(id);
        if (!movieInfo) {
            return res.send({ message: 'Movie not found!'});
        }
        else {
            await movieRepository.setMovieWatchedById(id);
            return res.send('Update done successfully!');
        }
    }
    async deleteMovies(req: Request, res: Response){
        const user: IUser = res.locals.saved;
        const id = parseInt(req.params.id);
        const movieInfo: boolean | Movie = await movieRepository.getMovieById(id);
        if (!movieInfo) {
            return res.send({ message: 'Movie not found!'});
        }else{
            await movieRepository.deleteMovieByIdMovie(id);
            res.send({message: 'Successfully deleted movie!'})

        }

    }
}




export const movieController = new MovieController();