 import { GET_DOGS, FILTER_by_TEMP, GET_TEMPS, SEARCH_BREED  } from "../actions/index";
// import fetch from node-fetch; 

const initialState = {
    AllDogs:[],
    Dogs: [],
    Temps: []

};

export function rootReducer(state = initialState, action) {    
    if (action.type === GET_DOGS) {        
        return {
            ...state,
            AllDogs: action.payload,
            Dogs: action.payload
        };
    }
    
    if (action.type === SEARCH_BREED) {        
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
    if (action.type === GET_TEMPS){
        return {
            ...state,
            Temps: action.payload
        };
    }
    if (action.type === FILTER_by_TEMP){
        const perros = state.AllDogs;
        
        const filtrado=[];
        const filtering = perros.map((perro)=>{
            if(perro.temperament){
                if(perro.temperament.includes(action.payload)) filtrado.push(perro)
            }
            })
        return {
            ...state,
            Dogs: filtrado
        };
    }
        


    return state;
}

export default rootReducer;