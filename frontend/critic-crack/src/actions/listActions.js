import { loadCategorie, loadCategories } from "./categoryActions"
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_ERROR = "ADD_MOVIE_ERROR";
export const FETCH_MOVIES_START = "FETCH_MOVIES_START";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FECTH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

export function addMovieSuccess(movie) {
    return {
        type: ADD_MOVIE_SUCCESS,
        movie
    };
}

export function addMovieError(movie) {
    return {
        type: ADD_MOVIE_ERROR,
        movie
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

export function addMovie(movie) {
    return function(dispatch) {
        const body = JSON.stringify({ activity });
        const headers = {
            "Content-Type": "application/json"
        };
        fetch("/movies", { method: "POST", body, headers })
            .then(response => response.json())
            .then(movie => {
                dispatch(addMovieSuccess(movie));
            })
            .catch(error => {
                dispatch(addMovieError(error));
            });
    };
}

export function loadMovies() {
    return function(dispatch) {
        dispatch({ type: FETCH_MOVIES_START });
        fetch("/movies")
            .then(response => response.json())
            .then(movies => {
                dispatch({
                    type: FETCH_MOVIES_SUCCESS,
                    movies
                });
            })
            .catch(error => {
                dispatch({
                    type: FECTH_MOVIES_ERROR,
                    error
                });
            });
    };
}

export function addModels() {
    return function(dispatch) {
        loadMovies()(dispatch);
        loadCategories()(dispatch);
    };
}