import React from 'react';

import './DogCard.css'
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// nombre : dog.name,
//             temperamento : dog.temperament,
//             altura: dog.height.metric,
//             peso: dog.weight.metric,
//             img: dog.image,
//             vida: dog.life_span
//             imageId: dog.image.id

export  function DogCard (props){
    let dog = useSelector( state => state.DogToDetail);
    console.log(dog);
    const imagen  =  "https://cdn2.thedogapi.com/images/"+dog.imageId+".jpg"
    return (
        <div className="card">
            
                <h4 className="card-title">{dog.nombre}</h4>
                <img className="iconoClima" src={imagen} width="" height="500" alt="" />
            
            <div>
                <h5>Temperament:{dog.temperamento}</h5>
                <h5>Height: {dog.altura} cm</h5>
                <h5>Weight: {dog.peso} kg</h5>
                <h5>Life Span: {dog.vida}</h5>
            </div>
            
        </div>
    )
}

export default (DogCard)