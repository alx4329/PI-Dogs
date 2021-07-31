import React, { useState } from "react";
import { getDogs } from "../../actions";
import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import './Buscador.css';
// import { addMovieFavorite } from "../../actions/index";
// import { getMovies } from "../../actions/index";

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
      <div>
        {/* <h2>Buscador</h2> */}
        <form className="form-container" onSubmit={(e) =>  handleSubmit(e)}>
          <div >
            {/* <label className="label" htmlFor="title">Find Me by Breed </label> */}
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
        {/* <ul>
          {
            this.props.movies.map((movie) => {
              var objetoMovie = {
                Title: movie.Title,
                imdbID: movie.imdbID
              }
              return (
                <li>
                <Link to= {`/movie/${movie.imdbID}`} >
                  <span>{movie.Title}</span>
                  </Link>
                  <button onClick ={() =>this.props.addMovieFavorite(objetoMovie) } >Agregar a favoritos</button>
                </li>
              )
            })
          }
        </ul> */}
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

