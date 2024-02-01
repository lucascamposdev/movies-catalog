const baseURL = import.meta.env.VITE_API_URL;

const endpoints = {
    popular: baseURL + '/movie/popular',
    top_rated: baseURL + '/movie/top_rated',
    now_playing: baseURL + '/movie/now_playing',
    popular_by_genre: baseURL + '/discover/movie?with_genres=',
    best_by_genre: baseURL + '/discover/movie?&sort_by=vote_average.desc&vote_count.gte=500&with_genres=',
    biggest_revenue_by_genre: baseURL + '/discover/movie?&sort_by=revenue.desc&with_genres=',
    newest_by_genre: baseURL + '/discover/movie?&sort_by=primary_release_date.desc&vote_count.gte=100&with_genres=', 
    movie_by_id: baseURL + '/movie/',
} 

export default endpoints;