import React, { Component } from 'react'
import { FaGithub } from 'react-icons/fa';
import './AboutUs.css'


export default class AboutProject extends Component {
  render() {
    return (
      <div className="aboutus">
        <img src="wallpaper.jpg" className='wallpaper' alt='wallpaper'></img>
        <h1 className='title'>Shadespeare, Bard of Insults</h1>
        
        <div>
          <h2>Markov generated bot that creates Shakspeare inspired insults</h2>
          <h4>Tech stack:</h4>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>Mongoose</li>
            <li>Supertest</li>
            <li>React</li>
            <li>Markov-chain-text</li>
            <li>Cors</li>
          </ul>
        </div>
        <div className="project-links">
          <a href='https://github.com/Shakespeare-Insult-Bot' target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </div>

                       


      </div>
    )
  }
}
