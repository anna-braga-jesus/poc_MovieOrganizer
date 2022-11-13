import { Movie, MovieEntity } from "../protocols/Movie.js";
import { connection } from "../database/database.js"
import {QueryResult} from 'pg';

class MovieRepository {
    async findMany():Promise<MovieEntity[] | boolean> {
        const query = await connection.query(`SELECT * FROM films;`);
        const myMovies: MovieEntity[] = [...query.rows];
        if(myMovies.length === 0){
            return false;
        }
        else{
            return myMovies;
        }
    };
    
    async insertUnique(movie: Movie): Promise<QueryResult<MovieEntity>>{
        return connection.query(`
        INSERT INTO films (name, plataform, genero, status ) VALUES ($1, $2, $3, $4);
        `, [movie.name, movie.plataform, movie.genero, movie.status])
    }
    async updateUnique(movie: Movie): Promise<QueryResult<MovieEntity>> {
        return connection.query(`UPDATE * FROM films WHERE status = $1;`, [movie.status]);
    }
    async getMovieById(id: number): Promise<Movie | boolean>{
        const query = await connection.query(`SELECT * FROM films WHERE id = $1;`, [id]);
        if(query.rows[0] !== undefined){
            const myMovie: Movie = {...query.rows[0]};
            return myMovie;
        }
        else 
        {
            return false;
        }
    }
    async setMovieWatchedById(id: number): Promise<void>{
        await connection.query(`UPDATE films SET status = true WHERE id = $1`, [id]);
    }
    async deleteMovieByIdMovie(id: number): Promise<void>{
        await connection.query('DELETE FROM films WHERE id = $1;', [id]);

    }
}


export const  movieRepository = new MovieRepository();