import React, { Component } from 'react'
import { FaGithub } from 'react-icons/fa';
import './AboutUs.css'
import { Link } from 'react-router-dom'


export default class AboutProject extends Component {
  render() {
    return (
      <div className="about--us">
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
            <li>Twilio</li>
            <li>Chance</li>
          </ul>
        </div>
        <div className="project-links">
          <a href='https://github.com/Shakespeare-Insult-Bot' target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
        </div>
        <div>
          <Link className="about-Us" to='/about-us'>About the Authors</Link>
        </div>   
          <Link className="home" to='/'>Back to home</Link>
                       
      </div>
    )
  }
}


