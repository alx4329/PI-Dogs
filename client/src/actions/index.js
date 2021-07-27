// import rootReducer from "../reducers";
// import axios from 'axios'

// export const GET_DOGS = 'GET_DOGS';


export function getDogs(breed) {
    
    //     }
    if (breed) {
            return function(dispatch){
                return fetch(`http://localhost:3001/dogs?name=${breed}`)
                    .then(response => response.json())
                    .then(json => {
                        dispatch({ type: 'SEARCH_BREED',
                        payload: json  });
                        });
            }

        } else {

    return function(dispatch){
        return fetch("http://localhost:3001/dogs")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'GET_DOGS',
                payload: json  });
                });
    }}
};

export function filtByTemper(){

}; 
export function filtByBreed(){

}; 


