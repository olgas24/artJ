import {SET_PEOPLE} from "../constants";

const initialValues = {
    people: [],
    genders: []
};

export const people = (state = initialValues, action) => {
    switch (action.type){
        case SET_PEOPLE:
            const genders = action.payload.reduce((acc, item) => {
                if (!acc.includes(item.gender)){
                    acc.push(item.gender);
                }
                return acc;
            }, ["both"]);

            // const now = new Date().getTime();
            //
            // const age = action.payload.map((item) => {
            //     return item.map(elem => {
            //         return elem.age = Math.floor((now - Date.parse(elem.dob)) / (1000 * 60 * 60 * 24 * 365));
            //     });
            //     console.log(1)
            //
            // });
            // console.log("age", age);

            const sortedArr = action.payload.sort((a, b) => {
                if ((a.first_name) > (b.first_name)){
                    return 1;
                }if ((a.first_name) < (b.first_name)){
                    return -1;
                }
                return 0;
            });
            let people = {...sortedArr};

            return {
                ...state,
                people: action.payload,
                genders
            };
            default:
            return state;
    }
};