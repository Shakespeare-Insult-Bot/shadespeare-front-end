import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'



export default class Home extends Component {
  state = { 
    response: '',
    warningBool: true 
  }

  handleClick = async() => {
    try{

      const quoteData = await request.post('https://shadespeare-staging.herokuapp.com/api/v1/tweets')
      // const quoteData = await request.post('http://localhost:7890/api/v1/tweets')
      this.setState({
        response: quoteData.body.tweetText,
        warningBool: false
      })
    } catch(err){
      console.log(err);
    }
  }
    
  render() {
    const opacity = this.state.warningBool ? {opacity: 0} : {opacity: 1}
    return (
      <div className="home-page">

      <div className="shadeField">
        <img style={opacity} className="shade" src="shades.png" alt="shadeTop" />

        {this.state.warningBool ? <img className="shadespeare" src="shadespeare.png" alt="shadespeare" /> :
        <h2 className="response">{this.state.response}
        <div className="fadingEffect" />
        </h2>}

        <img style={opacity} className="shade" src="shade-bottom.png" alt="bottom" />

      </div>
      

      <div className="buttonField">
      <button><img className="scrollImage" src="scroll&pen.png" alt="the button" onClick={this.handleClick} /></button>
        <p>
          <em>{this.state.warningBool ? 'Whatev\'r thee doth click not yond scroll!' : '...I hath tried to warneth thee'}</em>
        </p>
      </div>
        
      <Link className="aboutUs" to='/about-us'>About Us</Link>
      </div>
    )
  }
}
