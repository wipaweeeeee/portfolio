import React from 'react';
import './App.css';
import Landing from './packages/landing/Landing';
import Archive from './packages/archive/Archive';
import ReactGA from 'react-ga';
import {
  Route,
  HashRouter
} from "react-router-dom";

function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_GA);
    ReactGA.pageview('/');
    console.log("<3")
}

function App() {

  initializeReactGA();

  return (
  	<HashRouter>
    	<Route exact path="/" component={Landing} />
    	<Route exact path="/archive" component={Archive} />
    </HashRouter>
  );
}

export default App;
