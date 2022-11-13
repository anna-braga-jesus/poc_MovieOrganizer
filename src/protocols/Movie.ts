//tabela do banco
export type MovieEntity = {
    id?: number,
    name: string,
    plataform: string,
    genero:string[],
    status: string | boolean,
}

export type Movie = Omit<MovieEntity, "id">

export type NewMovie = Partial<MovieEntity>