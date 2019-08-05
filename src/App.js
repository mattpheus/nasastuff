import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Apod from './components/Apod/';
import Asteroids from './components/Asteroids';
import Epic from './components/Epic';
import MarsPhoto from './components/MarsPhotos'


function App() {
  return (
    
    <div className="appcontainer">
    <Link to="/"></Link>
        <nav>
            <ul>
              <li><Link to="/Apod">A.P.O.D</Link></li>
              <li><Link to="/Asteroids">Asteroids</Link></li>
              <li><Link to="/Epic">E.P.I.C</Link></li>
              <li><Link to="/MarsPhotos">Mars Rover</Link></li>
            </ul>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" render={() => (<Home />)} />
            <Route path="/Apod" render={() => (<Apod />)} />
            <Route path="/Asteroids" render={() => (<Asteroids />)} />
            <Route path="/Epic" render={() => (<Epic />)} />
            <Route path="/MarsPhotos" render={() => (<MarsPhoto />)} />
          </Switch>
        </main>
    </div>


  );
}

export default App;
