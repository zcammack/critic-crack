export const initialState = {
    movies: [],
    requesting: false
};

export default function movieReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_MOVIE_SUCCESS":
            return {
                ...state,
                movies: [...state.movies],
                requesting: true
            };
        case "FETCH_MOVIES_SUCCESS":
            return {
                ...state,
                movies: action.movies,
                requesting: false
            };
        default:
            return state;
    }
}