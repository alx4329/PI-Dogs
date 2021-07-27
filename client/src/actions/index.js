// import rootReducer from "../reducers";
// import axios from 'axios'

export const GET_DOGS = 'GET_DOGS';
export const FILTER_by_TEMP = 'FILTER_by_TEMP';
export const GET_TEMPS = 'GET_TEMPS';
export const SEARCH_BREED = 'SEARCH_BREED';


export function getDogs(breed) {
    
    //     }
    if (breed) {
            return function(dispatch){
                return fetch(`http://localhost:3001/dogs?name=${breed}`)
                    .then(response => response.json())
                    .then(json => {
                        dispatch({ type: SEARCH_BREED,
                        payload: json  });
                        });
            }

        } else {

            return function(dispatch){
                return fetch("http://localhost:3001/dogs")
                    .then(response => response.json())
                    .then(json => {
                        dispatch({ type: GET_DOGS,
                        payload: json  });
                        });
            }
        }
};

export function filtByTemper(value){
        return function(dispatch){
            dispatch({ type: FILTER_by_TEMP,
                payload: value
            })
        }
}; 
export function filtByBreed(){

}; 

export function getTemps(){
    return function(dispatch){
                return fetch("http://localhost:3001/temperament")
                    .then(response => response.json())
                    .then(json => {
                        dispatch({ type: 'GET_TEMPS',
                        payload: json  });
                        });
            }
}


