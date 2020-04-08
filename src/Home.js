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
    return (
      <div className="home-page">

      <div className="shadeField">
        <img className="shadespeare" src="shadespeare.png" alt="shadespeare" />
        <h2 className="response">{this.state.response}</h2>
      </div>
      

      <div className="buttonField">
      <button><img className="scrollImage" src="scroll&pen.png" alt="the button" onClick={this.handleClick} /></button>
        <p>
          <em>{this.state.warningBool ? 'Whatev\'r thee doth click not yond scroll!' : '...I hath tried to warneth thee'}</em>
        </p>
      </div>
        
      <Link to='/about-us'>About Us</Link>
      </div>
    )
  }
}
