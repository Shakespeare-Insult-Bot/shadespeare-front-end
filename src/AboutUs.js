import React, { Component } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import './AboutUs.css';

// create components to prevent code duplication
const Developer = ({ name, quote, github, linkedIn }) => (
  <div className='card-div'>
    <img src="https://i.imgur.com/hAIRYe1.png" alt="card background"  className="card-img"></img>
    <div>
      <h2 className='our-names'>{name}</h2>
      <p>"{quote}" <em>-Shadespeare</em></p>
      <div className='our-links'>
        <a href={`https://www.linkedin.com/in/${linkedIn}/`} target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
        <a href={`https://github.com/${github}`} target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
      </div>
    </div>
  </div>
)

export default class AboutUs extends Component {
  render() {
    return (
      <div className="aboutus">
        <img src="wallpaper.jpg" className='wallpaper' alt='wallpaper'></img>
        <h1 className='title'>Shadespeare, Bard of Insults</h1>
        <Developer
          name="Fiona Ochs"
          quote="Thine be a hamster and lack gall."
          github="fionaochs"
          linkedIn="fionaochs" />
        
        <Developer
          name="Scott Harlan"
          quote="Well, every one can master a piece of trash like you."
          github="SeHarlan"
          linkedIn="scottharlan-pnw" />

        <Developer
          name="Cody Brown"
          quote="You Bastard"
          github="cody2934"
          linkedIn="codylylebrown" />

        <Developer
          name="James Eserjose"
          quote="As much pleasure, just so much joy, when thee leave the room."
          github="ezjim"
          linkedIn="jamesreserjose" />
      </div>
    )
  }
}
