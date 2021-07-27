import React, { Component } from "react";

import { Link } from 'react-router-dom';
import './LandingPage.css';


export class LandingPage extends Component {
  
  render() {
    
    return (
   
      <div >
        <h2>Welcome to the great world of DOGS!</h2>
            <Link to= '/dogs' >
                  <button>Start</button>
            </Link>
        
      </div>
      
    );
  }
}



export default (LandingPage);
// function mapStateToProps(state) {
//   return {
//     favoriteMovies: state.moviesFavourites}
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     // removeMovieFavorite: (imdbID) => dispatch(removeMovieFavorite(imdbID)),
    
//   };
// }

// export default connect(  mapStateToProps,  mapDispatchToProps
// )(ConnectedList);
