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
    // LLAMAR ACCION QUE MODIFIQUE LOS PERROS
    // this.props.getMovies(this.state.title)
  }

  
    
    
    return (
      <div>
        {/* <h2>Buscador</h2> */}
        <form className="form-container" onSubmit={(e) =>  handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Find Me by Breed </label>
            <input
              type="text"
              id="dogToFind"
              autoComplete="off"
              value={dogToFind}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit">Search</button>
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

