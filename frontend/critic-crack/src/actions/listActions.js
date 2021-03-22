import { loadCategories } from "./categoryActions"
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_ERROR = "ADD_MOVIE_ERROR";
export const FETCH_MOVIES_START = "FETCH_MOVIES_START";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FECTH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

export function loadMovies() {
    return (dispatch) => {
        dispatch({ type: 'FETCH_MOVIES_START' });
        fetch("http://localhost:3001/movies")
            .then(response => response.json())
            .then(movies => 
                dispatch({
                    type: 'FETCH_MOVIES_SUCCESS',
                    movies
                }))
            .catch(error => {
                dispatch({
                    type: FECTH_MOVIES_ERROR,
                    error
                });
            });
    };
}

export function addMovie(movie) {
    return function(dispatch) {
        const body = JSON.stringify({ movie });
        const headers = {
            "Content-Type": "application/json"
        };
        fetch("http://localhost:3001/movies", { method: "POST", body, headers })
            .then(response => response.json())
            .then(movie => {
                dispatch(addMovieSuccess(movie));
            })
            .catch(error => {
                dispatch(addMovieError(error));
            });
    };
}

export function addModels() {
    return function(dispatch) {
        loadMovies()(dispatch);
        loadCategories()(dispatch);
    };
}

export function addMovieSuccess(movie) {
    return {
        type: ADD_MOVIE_SUCCESS,
        movie
    };
}

export function addMovieError(error) {
    return {
        type: ADD_MOVIE_ERROR,
        error
    };
}

export function fetchMoviesPending() {
    return {
        type: FETCH_MOVIES_START
    };
}

export function fetchMoviesSuccess(movies) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        movies
    };
}