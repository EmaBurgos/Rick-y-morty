import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return { ...state, allCharacters: [...state.allCharacters, action.payload], 
                myFavorites: [...state.allCharacters, action.payload]};

        case REMOVE_FAVORITE:
            return { ...state, 
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload),};

        case FILTER:
            const filterByGender = [...state.allCharacters].filter((char)=>
            char.gender === action.payload)
            return {
                ...state,
                myFavorites: filterByGender,
            };

            case ORDER:
                const filterByOrder = [...state.allCharacters].sort((a,b) =>{
                    if(a.id > b.id){
                        return action.payload === "Ascendete" ? 1 : -1;
                    } else if (a.id < b.id){
                        return action.payload === "Descendente" ? 1 : -1;
                    } else {
                        return 0;
                    }
                });
                return {
                    ...state,
                    myFavorites: filterByOrder,
                }
        

        default:
            return{ ...state};
    }

};

export default rootReducer;