import { combineReducers } from "@reduxjs/toolkit";
import countryReducer from "./countryReducer";
import genreReducer from "./genreReducer";
import cinemaReducer from "./cinemaReducer";

const rootReducer = combineReducers({
    country: countryReducer,
    genre: genreReducer,
    cinema: cinemaReducer
});

export default rootReducer;