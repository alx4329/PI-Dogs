import fetch from "node-fetch";

export const GET_DOGS = 'GET_DOGS';
export const FILTER_by_TEMP = 'FILTER_by_TEMP';
export const GET_TEMPS = 'GET_TEMPS';
export const SEARCH_BREED = 'SEARCH_BREED';
export const BRING_DOGS = 'BRING_DOGS';
export const ORD_AZA = 'ORD_AZA';
export const ORD_AZD = 'ORD_AZD';
export const ORD_WA = 'ORD_WA';
export const ORD_WD = 'ORD_WD';
export const TO_DETAIL = 'TO_DETAIL';
export const CREATE_DOG = 'CREATE_DOG';

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
export function bringDogToDetail(id){
    return function(dispatch){
        return fetch(`http://localhost:3001/dogs/${id}`)
            .then(response => response.json())
                        .then(json => {
                            dispatch({ type: TO_DETAIL,
                            payload: json  });
                            });
    }
}

export function filtByTemper(value){
        return function(dispatch){
            dispatch({ type: FILTER_by_TEMP,
                payload: value
            })
        }
}; 
export function bringDogs(option){
    return function(dispatch){
        return fetch(`http://localhost:3001/dogs?select=${option}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_DOGS,
                payload: json  });
                });
     
            

        } 
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

export function orderBy(by){    
    return function(dispatch){
        
                return fetch("http://localhost:3001/dogs")
                    .then(response => response.json())
                    .then(json => {
                        if(by === 'AZA'){dispatch({ type: ORD_AZA, payload: json})}
                    if(by === 'AZD'){
                        dispatch({ type: 'ORD_AZD',payload: json});
                    }
                    if(by === 'WA'){
                        dispatch({ type: ORD_WA,payload: json});
                    }
                    if(by === 'WD'){
                    dispatch({ type: ORD_WD,payload: json});
                    }
                                
                    })
                            }
                        }

export function postNewBreed(state){
    return function(dispatch){
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }
        return fetch("http://localhost:3001/dog",config)
            .then(response => response.json())
            .then( json => {
                console.log(json)
                dispatch({ type: CREATE_DOG,
                        payload: json  });
            })
    }
}


