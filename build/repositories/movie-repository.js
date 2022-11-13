"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRepository = void 0;
const database_js_1 = require("../database/database.js");
class MovieRepository {
    async findMany() {
        const query = await database_js_1.connection.query(`SELECT * FROM films;`);
        const myMovies = [...query.rows];
        if (myMovies.length === 0) {
            return false;
        }
        else {
            return myMovies;
        }
    }
    ;
    async insertUnique(movie) {
        return database_js_1.connection.query(`
        INSERT INTO films (name, plataform, genero, status ) VALUES ($1, $2, $3, $4);
        `, [movie.name, movie.plataform, movie.genero, movie.status]);
    }
    async updateUnique(movie) {
        return database_js_1.connection.query(`UPDATE * FROM films WHERE status = $1;`, [movie.status]);
    }
    async getMovieById(id) {
        const query = await database_js_1.connection.query(`SELECT * FROM films WHERE id = $1;`, [id]);
        if (query.rows[0] !== undefined) {
            const myMovie = { ...query.rows[0] };
            return myMovie;
        }
        else {
            return false;
        }
    }
    async setMovieWatchedById(id) {
        await database_js_1.connection.query(`UPDATE films SET status = true WHERE id = $1`, [id]);
    }
    async deleteMovieByIdMovie(id) {
        await database_js_1.connection.query('DELETE FROM films WHERE id = $1;', [id]);
    }
}
exports.movieRepository = new MovieRepository();
