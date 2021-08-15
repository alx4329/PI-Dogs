import './App.css';
import { Route } from "react-router-dom";
import React from 'react';
import { LandingPage } from './containers/LandingPage/LandingPage';
import NavBar from "./components/NavBar/NavBar";
import {Pagination} from './containers/Pagination/Pagination';
import {Buscador} from './components/Buscador/Buscador';
import {LeftSideBar} from './containers/LeftSideBar/LeftSideBar'
import {RightSideBar} from './containers/RightSideBar/RightSideBar'
import {DogDetail} from './components/DogCard/DogDetail';
import {Create} from './components/Create/Create';

function App() {
  return (
    <React.Fragment>
    

      <Route exact path="/" component={LandingPage}/>
      <Route path={["/dogs","/create"]} component={NavBar}/>
      <Route exact path="/dogs" component={Buscador}/>
      <Route exact path="/dogs" component={RightSideBar}/>
      <Route exact path="/dogs" component={LeftSideBar}/>
      <Route exact path="/dogs" component={Pagination}/>
      <Route exact path="/dogs/:id" component={DogDetail}/>
      <Route exact path="/create" component = {Create} />
     
    </React.Fragment>

  );
}

export default App;
