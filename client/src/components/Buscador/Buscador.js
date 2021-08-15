import React, { useState } from "react";
import { getDogs } from "../../actions";
import { useDispatch } from "react-redux";
import { bringDogs } from "../../actions";
import './Buscador.css';


export function Buscador (props) {
  const [dogToFind, setDogToFind] = useState(['']);
  const dispatch = useDispatch();
  
  function handleChange(event) {
    setDogToFind( event.target.value );
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getDogs(dogToFind));
    
  }
    return (
      <div className= 'bar2'>
        <div className = 'showingOptions'>
                    <button onClick= {()=> dispatch(getDogs())}>Show All Dogs</button>
                    <button onClick= {()=> dispatch(bringDogs('api'))}>Show Api Dogs</button>
                    <button onClick= {()=> dispatch(bringDogs('created'))}>Show My Dogs</button>

                </div>
        <form className="form-container" onSubmit={(e) =>  handleSubmit(e)}>
          <div >
            <input
              type="text"
              id="namanyay-search-box"
              className="input"
              autoComplete="off"
              placeholder= "Who are you looking for?"
              value={dogToFind}
              onChange={(e) => handleChange(e)}
            />
          <button id="namanyay-search-btn" type="submit">Search</button>
          </div>
        </form>
        
      </div>
    );
  
}

export default Buscador;

// function mapStateToProps(state) {
//   return {
//     movies: state.moviesLoaded
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
//     getMovies: title => dispatch(getMovies(title))
//   };
// }

// export default connect(  mapStateToProps,  mapDispatchToProps
// )(Buscador);

