import movieReducer from "./movieReducer";
import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";

export default combineReducers({ movieReducer, categoryReducer });