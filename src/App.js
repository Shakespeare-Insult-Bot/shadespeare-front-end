import React, { Component } from 'react'
import { BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home.js'
import AboutUs from './AboutUs.js'
import AboutProject from './AboutProject.js'
import './App.css'


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path ='/' component={Home}/>
          <Route exact path ='/about-us' component={AboutUs}/>
          <Route exact path = '/about-project' component={AboutProject} />
        </div>
      </Router>
    )
  }
}
