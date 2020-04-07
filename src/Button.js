import React, { Component } from 'react'
import request from 'superagent'



export default class Button extends Component {

  handleClick = async() => {
    const quoteData = await request.get('https://git.heroku.com/shadespeare-staging.git')
  } 
  render() {
    return (
    

      <button onClick={handleClick} >

      </button>
        
     
    )
  }
}
