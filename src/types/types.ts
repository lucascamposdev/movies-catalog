export type Movie = {
    id: number
    title: string
    overview: string
    poster_path:string
    vote_average: number
    release_date: string
    backdrop_path: string
    runtime: number
    genres: Genre[]
}

export type Genre = {
    id: number
    name: string
}
