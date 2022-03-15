import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './packages/home/Home';
import Archive from './packages/archive/Archive';
import ReactGA from 'react-ga';
import { Route,HashRouter } from "react-router-dom";
import Details from './packages/details/Details';
import Banner from './packages/border/index';

function initializeReactGA() {
    ReactGA.initialize(process.env.REACT_APP_GA);
    ReactGA.pageview('/');
    console.log("<3<3")
}

function App() {

  initializeReactGA();

  const [ content, setContent ] = useState([]);

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Homepage?api_key=${process.env.REACT_APP_AIRTABLE_KEY}`)
        .then(res => res.json())
        .then(data => data.records)
        .then(rec => {
          let _data = [];
          rec.forEach(item => {
            _data.push(item.fields)
          })

          return _data;
        })
        .then(dataset => setContent(dataset.sort((a,b) => b.year - a.year)))
        .catch(error => console.log(error));
  }, [])

  return (
  	<HashRouter>
      <Banner />
    	<Route exact path="/" render={(props) => <Home {...props} content={content} />}/>
    	<Route exact path="/archive" component={Archive} />
      <Route exact path="/peloton" render={(props) => <Details {...props} content={content.filter(item => item.title === 'Peloton')} />} />
      <Route exact path="/mejuri" render={(props) => <Details {...props} content={content.filter(item => item.title === 'Mejuri')} />} />
      <Route exact path="/sxsw frog50" render={(props) => <Details {...props} content={content.filter(item => item.title === 'SXSW frog50')} />} />
      <Route exact path="/venice biennale" render={(props) => <Details {...props} content={content.filter(item => item.title === 'Venice Biennale')} />} />
      <Route exact path="/florida blue" render={(props) => <Details {...props} content={content.filter(item => item.title === 'Florida Blue')} />} />
      <Route exact path="/reebok" render={(props) => <Details {...props} content={content.filter(item => item.title === 'Reebok')} />} />
      <Route exact path="/call me adele" render={(props) => <Details {...props} content={content.filter(item => item.title === 'Call Me Adele')} />} />
      <Route exact path="/blink of an eye" render={(props) => <Details {...props} content={content.filter(item => item.title === 'Blink of an Eye')} />} />
      <Route exact path="/creative coding" render={(props) => <Details {...props} content={content.filter(item => item.title === 'Creative Coding')} />} />
    </HashRouter>
  );
}

export default App;
