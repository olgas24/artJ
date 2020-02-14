import axios from "axios";
import {BASE_URL, SET_PEOPLE, IS_LOADING, LOADING_FAIL} from "../constants";

export const isLoading = () => ({type: IS_LOADING});
export const setPeople = (people) => ({type: SET_PEOPLE, payload: people});
export const loadingFail = () => ({type: LOADING_FAIL});


export const getPeople = () => {
    return dispatch =>{
        dispatch(isLoading());
        axios.get(BASE_URL)
            .then(({data}) => dispatch(setPeople(data.result)))
            .catch((error) => {
                dispatch(loadingFail());
                console.error(error)
            });
    }
};