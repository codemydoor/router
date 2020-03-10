import React from 'react';
import {BrowserRouter as Router, Route, Link} from'react-router-dom'
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contacts';
import Services from './component/Services';
import Portfolio from './component/Portfolio';


function App() {
  return (
    <Router>
    <div>
     

      <Link to ="/">Home</Link>
      <Link to ="/About">About</Link>
      <Link to ="/Contact">Contact</Link>
      <Link to ="/Services">Services</Link>
      <Link to ="/Portfolio">Portfolio</Link>
      </div>
   
    <Route exact={true} path='/' component={Home} />
    <Route exact={true} path='/about' component={About} />
    <Route exact={true} path='/contact' component={Contact} />
    <Route exact={true} path='/services' component={Services} />
    <Route exact={true} path='/portfolio' component={Portfolio} />
    

    </Router>
  
  )
}

export default App;
