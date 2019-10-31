import React from 'react';
import './App.css';
import Landing from './packages/landing/Landing';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_GA);
    ReactGA.pageview('/');
    console.log("<3")
}

function App() {

  initializeReactGA();

  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
