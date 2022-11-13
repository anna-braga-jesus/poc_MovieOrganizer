"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieController = void 0;
const movie_repository_js_1 = require("../repositories/movie-repository.js");
const movie_schema_js_1 = require("../schemas/movie-schema.js");
class MovieController {
    async listMovies(req, res) {
        const resultado = await movie_repository_js_1.movieRepository.findMany();
        if (resultado) {
            return res.send(resultado);
        }
        else {
            return res.send(`You don't own movies yet...`);
        }
    }
    async insertMovies(req, res) {
        const newMovie = req.body;
        const { error } = movie_schema_js_1.MovieSchema.validate(newMovie);
        if (error) {
            return res.status(400).send({
                message: error.message
            });
        }
        const resultado = await movie_repository_js_1.movieRepository.insertUnique(newMovie);
        return res.send(`Movie inserted ${resultado.rowCount}`);
    }
    async movieWatched(req, res) {
        const id = parseInt(req.params.id);
        const movieInfo = await movie_repository_js_1.movieRepository.getMovieById(id);
        if (!movieInfo) {
            return res.send({ message: 'Movie not found!' });
        }
        else {
            await movie_repository_js_1.movieRepository.setMovieWatchedById(id);
            return res.send('Update done successfully!');
        }
    }
    async deleteMovies(req, res) {
        const user = res.locals.saved;
        const id = parseInt(req.params.id);
        await movie_repository_js_1.movieRepository.deleteMovieByIdMovie(id);
        res.send({ message: 'Successfully deleted movie!' });
    }
}
exports.movieController = new MovieController();
