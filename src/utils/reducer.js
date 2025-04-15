import { SET_WEATHER } from "./Action_type";

const initialState = {
    data:{}
}

const weatherReducer =(state= initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                data: action.payload,
              };
        default:
            return state;
    }
    
}

export default weatherReducer