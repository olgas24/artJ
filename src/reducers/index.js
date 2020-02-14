import {combineReducers} from "redux";

import {people} from "./people";
import {loading} from "./loading";

export const rootReducer = combineReducers({
    loading: loading,
    data: people
});