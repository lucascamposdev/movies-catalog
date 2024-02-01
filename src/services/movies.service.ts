const token = import.meta.env.VITE_API_TOKEN;
const baseURL = import.meta.env.VITE_API_URL;

import endpoints from "@utils/endpoints";
import { Movie } from "../types/types";
import requestConfig from "../utils/requestConfig";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";


export const getMovies = async(endpoint: string, signal: AbortSignal): Promise<Movie[] | undefined> => {

    const config: AxiosRequestConfig = requestConfig('GET', token, signal);

    try{
        const response: AxiosResponse = await axios.get(endpoint, config)

        return response.data.results
    }   
    catch(err: any){
        console.error('Erro na requisição GET:', err.message);
    }
}

interface SearchMoviesResponse {
    results: Movie[] ;
    totalPages: number;
  }

export const searchMovies = async(query: string, pageNum: number, signal: AbortSignal): Promise<SearchMoviesResponse> => {

    if(!query) return { results: [], totalPages: 0};

    const config: AxiosRequestConfig = requestConfig('GET', token, signal);
    const endpoint = baseURL + `/search/movie?query=${query}&include_adult=false&language=en-US&page=${pageNum}`

    try{
        const response: AxiosResponse = await axios.get(endpoint, config)

        const results = response.data.results
        const totalPages = response.data.total_pages
        return { results, totalPages }
    }   
    catch(err: any){
    if (!axios.isCancel(err)) {
        console.error('Erro:', err);
        }
        return { results: [], totalPages: 0};
    }
}

export const getMovieById = async(id: number, signal: AbortSignal): Promise<Movie | undefined> => {

    const config: AxiosRequestConfig = requestConfig('GET', token, signal);
    const endpoint = endpoints.movie_by_id + id

    try{
        const response: AxiosResponse = await axios.get(endpoint, config)

        return response.data
    }   
    catch(err: any){
        console.error('Erro na requisição GET:', err.message);
    }
}


