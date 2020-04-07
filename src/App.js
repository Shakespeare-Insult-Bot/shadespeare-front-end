import React, { Component } from 'react'

import { BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
import Home from './Home.js'
// import AboutUs from './AboutUs.js'


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path ='/' component={Home}/>
        {/* <Route exact path ='/about-us' component={AboutUs}/> */}
      </div>
        
        
        </Router>
    )
  }
}
