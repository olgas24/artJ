import {IS_LOADING, LOADING_FAIL, SET_PEOPLE} from "../constants";

const initialValues = {
    isLoading: false
};

export const loading = (state = initialValues, action) => {
    switch(action.type){
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case SET_PEOPLE:
        case LOADING_FAIL:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};