// import rootReducer from "../reducers";
// import axios from 'axios'

// export const GET_DOGS = 'GET_DOGS';


export function getDogs(breed) {
    // return async function() {
    //     const pedido = await fetch("http://localhost:3001/dogs");
    //     const todosLosPerros = await pedido.json(); 
    //     // console.log( todosLosPerros[0]);
    //     return  { type: 'GET_DOGS',
    //             payload: todosLosPerros  };
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


