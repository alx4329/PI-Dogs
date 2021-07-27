// import { GET_DOGS } from "../actions/index";
// import fetch from node-fetch; 

const initialState = {
    Dogs: [],

};

export function rootReducer(state = initialState, action) {
    
    if (action.type === 'GET_DOGS') {        
        return {
            ...state,
            Dogs: action.payload
        };
    }
    
    if (action.type === 'SEARCH_BREED') {
        console.log(action.payload)
        let perros = action.payload.map((item)=> {
            item.image = {};
            item.image.id = item.reference_image_id
            return item
        })
        return {
            ...state,
            Dogs: perros
        };
    }

    return state;
}

export default rootReducer;