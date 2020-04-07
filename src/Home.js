import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'



export default class Home extends Component {
  state = { 
    response: 'Whatever you do, do not press this button'
  }

  handleClick = async() => {
    try{

      const quoteData = await request.post('https://shadespeare-staging.herokuapp.com/api/v1/tweets')
      // const quoteData = await request.post('http://localhost:7890/api/v1/tweets')
      this.setState({
        response: quoteData.body.tweetText
      })
    } catch(err){
      console.log(err);
    }
  }
    
  render() {
    return (
      <div>
      <header>  THIS IS HEADER    </header>

      <Link to='/about-us'>About Us</Link>
      <h2>
        {this.state.response}
      </h2>
      <button onClick={this.handleClick}>DONT PRESS</button>
        
      </div>
    )
  }
}
