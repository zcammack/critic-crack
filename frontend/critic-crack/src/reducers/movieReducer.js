export const initialState = {
    movies: []
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_MOVIE_SUCCESS":
            return {
                ...state,
                movies: [...state.movies, action.movie, action.ADD_MOVIE_SUCCESS]
            };
        case "FETCH_MOVIES_SUCCESS":
            return {
                ...state,
                movies: action.movies
            };
        default:
            return state;
    }
}