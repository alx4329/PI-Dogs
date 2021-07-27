import React from 'react';

import './DogCard.css'
import { Link } from 'react-router-dom';


export default  function DogCard (nombre, temp, id){
    const imagen  =  "https://cdn2.thedogapi.com/images/"+id+".jpg"
    return (
        <div className="card">
            <Link to={`/dogs/${id}`}>
                <h4 className="card-title">{nombre}</h4>
            </Link>
            <div>
                <img className="iconoClima" src={imagen} width="80" height="80" alt="" />
                <h5>Temperament:{temp}</h5>
            </div>
            
        </div>
    )
}