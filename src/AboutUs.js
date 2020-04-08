import React, { Component } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import './AboutUs.css';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="aboutus">
                <img src="wallpaper.jpg" className='wallpaper' alt='wallpaper'></img>
                <h1 className='title'>Shadespeare, Bard of Insults</h1>

                <div className='card-div'>
                    <img src="https://i.imgur.com/fX6acBr.jpg" alt="card background"  className="card-img"></img>
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
                    <img src="https://i.imgur.com/0cJB6KI.jpg" alt="card background" className="card-img"></img>
                    <div>
                        <h2 className='our-names'>Scott Harlan</h2>
                        <p> You Bastard </p>
                        <div className='our-links'>
                            <a href="https://www.linkedin.com/in/scottharlan-pnw/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                            <a href="https://github.com/SeHarlan" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='card-div'>
                        <img src="https://i.imgur.com/ohrFxBl.jpg" alt="card background" className="card-img"></img>
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
                        <img src="https://i.imgur.com/6p2qzIM.jpg" alt="card background" className="card-img"></img>
                        <div>
                            <h2 className='our-names'>James Eserjose</h2>
                            <p> You Bastard </p>
                            <div className='our-links'>
                                <a href="https://www.linkedin.com/in/jamesreserjose/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                <a href="https://github.com/ezjim" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
