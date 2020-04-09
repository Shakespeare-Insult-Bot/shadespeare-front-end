import React, { Component } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom'

import './AboutUs.css';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="aboutus">
                <img src="wallpaper.jpg" className='wallpaper' alt='wallpaper'></img>
                <h1 className='title'>Shadespeare, Bard of Insults</h1>

                <div className='card-div'>
                    <img src="https://i.imgur.com/hAIRYe1.png" alt="card background"  className="card-img"></img>
                    <div>
                        
                        <h2 className='our-names'>Fiona Ochs</h2>
                        <p> You Bastard </p>
                        <div className='our-links'>
                            <a href="https://www.linkedin.com/in/fionaochs/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                            <a href="https://github.com/fionaochs" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                        </div>
                    </div>
                </div>

                <div className='card-div'>
                    <img src="https://i.imgur.com/WlLReq6.png" alt="card background" className="card-img"></img>
                    <div className="scott">
                        <h2 className='our-names'>Scott Harlan</h2>
                        <p> You Bastard </p>
                        <div className='our-links'>
                            <a href="https://www.linkedin.com/in/scottharlan-pnw/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                            <a href="https://github.com/SeHarlan" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='card-div'>
                        <img src="https://i.imgur.com/KmTHuQH.png" alt="card background" className="card-img"></img>
                        <div>
                            <h2 className='our-names'>Cody Brown</h2>
                            <p> You Bastard </p>
                            <div className='our-links'>
                                <a href="https://www.linkedin.com/in/codylylebrown/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                <a href="https://github.com/cody2934" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                            </div>
                        </div>
                    </div>

                      
                    <div className='card-div'>
                        <img src="https://i.imgur.com/R0wRlu4.png" alt="card background" className="card-img"></img>
                        <div>
                            <h2 className='our-names'>James Eserjose</h2>
                            <p> You Bastard </p>
                            <div className='our-links'>
                                <a href="https://www.linkedin.com/in/jamesreserjose/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                <a href="https://github.com/ezjim" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                            </div>
                        </div>
                    </div>
                    <Link className="home" to='/'>Back to home</Link>
                    <Link className="about-Project" to='/about-project'>About Shadespeare</Link>
                </div>
                
                
                )
            }
        }
