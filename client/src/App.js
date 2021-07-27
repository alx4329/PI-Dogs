import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import { LandingPage } from './containers/LandingPage/LandingPage';
import NavBar from "./components/NavBar/NavBar";
import {Pagination} from './containers/Pagination/Pagination';
import {Buscador} from './components/Buscador/Buscador';
// import DogCard from './components/DogCard/DogCard';

function App() {
  return (
    <React.Fragment>
    <NavBar />
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/dogs" component={Pagination}/>
      <Route exact path="/dogs" component={Buscador}/>
     
    </React.Fragment>

  );
}

export default App;
