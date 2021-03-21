export const initialState = {
    movies: []
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_MOVIE_SUCCESS":
            return {
                ...state,
                movies: [...state.movies, action.movie]
            };
        case "FETCH_MOVIE_SUCCESS":
            return {
                ...state,
                movies: action.movies
            };
        default:
            return state;
    }
}