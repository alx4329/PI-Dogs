import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Pagination.css';
import { getDogs } from '../../actions/index';
// import DogCard from '../../components/DogCard/DogCard';
import { Link } from 'react-router-dom';


export  function Pagination(props) {
        // store.dispatch(()=>getDogs());
        const dispatch = useDispatch();
        useEffect(()=>{            
            dispatch(getDogs());
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);
        const dogsRedux = useSelector(state => state.Dogs)
        useEffect(()=>{            
            
            setDogs(dogsRedux)            
        },[dogsRedux]);
        // dispatch(getDogs())
        
        const [dogs, setDogs] = useState([]);
        console.log(dogs);
        
        
        const [currentPage,setCurrentPage]= useState(1);
        const [dogsPerPage]= useState(8);
        
        
        function handleClick(event) {
            setCurrentPage(Number(event.target.id));
        }


      // Logic for displaying current dogs
        const indexOfLastDog = currentPage * dogsPerPage;
        const indexOfFirstDog = indexOfLastDog - dogsPerPage;
        
        const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

        const renderDogs = currentDogs.map((Dog) => {
            // const image="https://cdn2.thedogapi.com/images/"+Dog.image.id+".jpg";
            // console.log(Dog)
            return (                
            
            <div className="card">
                <Link to={`/dogs/${Dog.id}`}>
                    <h4 className="card-title">{Dog.name}</h4>
                </Link>
                <div>
                    <img className="image" src={"https://cdn2.thedogapi.com/images/"+Dog.image.id+".jpg"} width="" height="300" alt="No encontro la imagen" />
                    <h5>Temperament: {Dog.temperament}</h5>
                </div>
        
            </div>
            )
            
        });
        // <li key={index}>{Dog}</li>;
    console.log(renderDogs)
    // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(dogs.length / dogsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <div className = 'showingOptions'>
                    <button>Show All Dogs</button>
                    <button>Show Api Dogs</button>
                    <button>Show My Dogs</button>

                </div>
            
                <div>
                    
                    <ul id="page-numbers">
                        {renderPageNumbers}
                    </ul>
                    <ul className= "cards">
                        <>{renderDogs}</>
                    </ul>
                </div>
            </div>
        );
            
    }

    export default (Pagination)

    // function mapStateToProps(state) {
    //     return {
    //         dogs: state.Dogs
    //     };
    //     };
    
    // function mapDispatchToProps(dispatch){
    //     return {
    //         getDogs:()=> dispatch(getDogs())
    //     }
    // };

    // export default connect(mapStateToProps, mapDispatchToProps)(Pagination);