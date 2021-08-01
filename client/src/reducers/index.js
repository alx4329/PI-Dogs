/* eslint-disable no-unused-vars */
 import { GET_DOGS, FILTER_by_TEMP, GET_TEMPS, SEARCH_BREED , ORD_AZA, ORD_AZD, ORD_WA, ORD_WD, TO_DETAIL, CREATE_DOG, BRING_DOGS  } from "../actions/index";
// import fetch from node-fetch; 

const initialState = {
    AllDogs:[],
    Dogs: [],
    Temps: [],
    DogToDetail: [],
    created: []
};

export function rootReducer(state = initialState, action) {    
    if (action.type === GET_DOGS) {      
        console.log(action.payload)  
        return {
            ...state,
            AllDogs: action.payload,
            Dogs: action.payload
        };
    }
    
    
    if (action.type === BRING_DOGS) {
        console.log(action.payload)
        if(action.payload === 'created') {            
            
            let perros = state.AllDogs.filter((item)=> (item.creadoPorUsuario))
            return {
                ...state,
                Dogs: perros
                    };
                } else { 
                    let perros = state.AllDogs.filter((item)=> (!item.creadoPorUsuario))
                    return {
                        ...state,
                        Dogs: perros
                            };
        }
    }
    if (action.type === SEARCH_BREED) {
        // console.log(action.payload)          
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
        // eslint-disable-next-line
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
    if( action.type === ORD_AZA){
        state.AllDogs= action.payload;
        state.Dogs= action.payload;
        let perros = state.AllDogs;     
        orderByString(perros,'name',1);
        console.log(perros);
        return {
            ...state,
            Dogs:perros
        }
    }
    if( action.type === ORD_AZD){
        state.AllDogs= action.payload;
        state.Dogs= action.payload;
        let perros = state.AllDogs;     
        orderByString(perros,'name',-1);
        // console.log(perros);
        return {
            ...state,
            Dogs: perros            
        }}
    if (action.type === ORD_WA){        
        let perros = action.payload;     
        let weights = perros.map((perro)=>{
            let values =perro.weight.metric.split(' - ');
            let average;
            if (values.length === 1 ) average = parseInt(values[0]);
            if (values.length === 2 ) average = (parseInt(values[0],10)+parseInt(values[1],10))/2;           
            perro.weight = average;            
            return average
        });
        orderByNumber(perros,'weight',1)
        // let i=0;
    //     let muestra = perros.map((perro)=> {
    //     console.log(perro.weight)
    //     console.log(i)
    //     i++;
    // })
        // console.log(perros)
        return {
            ...state,
            Dogs: perros            
        }}
    if (action.type === ORD_WD){        
        let perros = action.payload;     
        let weights = perros.map((perro)=>{
            let values =perro.weight.metric.split(' - ');
            let average;
            if (values.length === 1 ) average = parseInt(values[0]);
            if (values.length === 2 ) average = (parseInt(values[0],10)+parseInt(values[1],10))/2;           
            perro.weight = average;            
            return average
        });
        orderByNumber(perros,'weight',-1)
        // let i=0;
    //     let muestra = perros.map((perro)=> {
    //     console.log(perro.weight)
    //     console.log(i)
    //     i++;
    // })
        // console.log(perros)
        return {
            ...state,
            Dogs: perros            
        }}
    
    if(action.type === TO_DETAIL){
        return {
            ...state,
            DogToDetail: action.payload
        }
    }
    if (action.type === CREATE_DOG){
        console.log(action.payload)
        return {
            ...state,
            created: action.payload
        }
    }

    return state;
}
// eslint-disable-next-line no-extend-native
function orderByString(array,property,sortOrder,ignoreCase){
  if (sortOrder!==-1 && sortOrder!==1) sortOrder=1;
  array.sort(function(a,b){
    var stringA=a[property],stringB=b[property];
    // Si un valor es null o undefined, se convierte a cadena vacía.
    if (stringA===null) stringA = '';
    if (stringB===null) stringB = '';
    // Si ignoreCase es true, se convierten ambas variables a minúsculas.
    if (ignoreCase===true){stringA=stringA.toLowerCase();stringB=stringB.toLowerCase()}
    var res = 0;
    if (stringA<stringB) res = -1;
    else if (stringA>stringB) res = 1;
    return res*sortOrder;
  })
}

function orderByNumber (array, property,sortOrder){
    // Primero se verifica que la propiedad sortOrder tenga un dato válido.
    if (sortOrder!==-1 && sortOrder!==1) sortOrder=1;
    array.sort(function(a,b){
      // La función de ordenamiento devuelve la comparación entre property de a y b.
      // El resultado será afectado por sortOrder.
      return (a[property]-b[property])*sortOrder;
    })
  }




export default rootReducer;