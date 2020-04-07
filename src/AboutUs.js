import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

import './AboutUs.css';


export default class AboutUs extends Component {
    render() {
        return (
            <div id="about-us-container">
                <div>
                    <div className="aboutus">
                    {/* <h1>The Groupies</h1> */}
                    <ul className="groupies-card">
                        <li className='groupies-au-li'>
                                <img src="https://i.imgur.com/sVBXISQ.jpg" alt="card background"  className="card-img"></img>
                                <img className="member-photo" src="https://media-exp1.licdn.com/dms/image/C5603AQGuTnFZSlQTDg/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=wVw2waRURUwVMkWgV8GIph1_tOW8m23Fsoh7wOhgK8s" alt=""></img>
                            <h2 className='our-names'>Fiona Ochs</h2>
                                <div className='our-links'>
                                    <a href="https://www.linkedin.com/in/fionaochs/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                    <a href="https://github.com/fionaochs" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                                </div>
                        </li>
                        <li className='groupies-au-li'>
                                <img src="https://i.imgur.com/NLiBfrW.jpg" alt="card background" className="card-img"></img>
                                <img className="member-photo"  src="https://media-exp1.licdn.com/dms/image/C5603AQHcT7B0DKuFSw/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=1W4a_TKG8xcr7wFIcFelSYo4bVZzQ4VyclVHNq_d4po" alt=""></img>
                            <h2 className='our-names'>Scott Harlan</h2>
                                <div className='our-links'>
                                    <a href="https://www.linkedin.com/in/scottharlan-pnw/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                    <a href="https://github.com/SeHarlan" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                                </div>
                        </li>
                        <li className='groupies-au-li'>
                                <img src="https://i.imgur.com/VisAFzG.jpg" alt="card background" className="card-img"></img>
                                <img className="owen-member-photo" src="https://media-exp1.licdn.com/dms/image/C5603AQFvsrhqG1QcOw/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=H3FhlHeke0mS-7Qcr2ldCbKwatOBHdqbWi7-xXOb-p8" alt=""></img>
                            <h2 className='our-names'>Cody Brown</h2>
                                <div className='our-links'>
                                    <a href="https://www.linkedin.com/in/codylylebrown/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                    <a href="https://github.com/cody2934" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                                </div>
                        </li>
                        <li className='groupies-au-li'>
                                <img src="https://i.imgur.com/cy4zZMq.png" alt="card background" className="card-img"></img>
                                <img className="member-photo" src="https://media-exp1.licdn.com/dms/image/C4E03AQFDbslqaS_lag/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=LXKYIGGuym-k5aSQ7nu9GRNhaOgjHck31YLvQ3mhnaM" alt=""></img>
                            <h2 className='our-names'>James Eserjose</h2>
                                <div className='our-links'>
                                    <a href="https://www.linkedin.com/in/jamesreserjose/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className="social-icon" /></a>
                                    <a href="https://github.com/ezjim" target="_brel=" rel="noopener noreferrer"><FaGithub className="social-icon" /></a>
                                </div>
                        </li>
                    </ul>
                    {/* <Link id='concert-link' to="/concerts">Back to concerts</Link> */}
                    </div>
                </div>
            </div>
        )
    }
}
