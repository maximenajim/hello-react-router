import React, { Component } from 'react';
import Home from './Home';
import About from './About';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
       <div>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
         </ul>

         <hr/>

         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
       </div>
     </Router>
    );
  }
}

export default App;
