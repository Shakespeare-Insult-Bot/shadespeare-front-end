import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import handleText from './services/api.js';
const chance = require('chance').Chance();

// create some additional components to help clean up conditionals in jsx
const Button = ({ loadingBool, handleClick = () => {} }) => (
  <>
    {
      loadingBool
        ? <img className="smallLoading" src="feather.gif" alt="loading" />
        : <button onClick={handleClick}><img className="scrollImage" src="scroll&pen.png" alt="the button" /></button>
    }
  </>
)

const Form = ({ loadingBool, text, handleText, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input type="text" value={text} onChange={handleText}></input>
    <Button loadingBool={loadingBool} />
  </form>
)

export default class Home extends Component {
  state = { 
    response: '',
    warningBool: true,
    text: '',
    promptCounter: 0,
    nameBool: true,
    loadingBool: false
  }

  handleClick = async() => {
    this.setState({ loadingBool: true })
    try{
      const quoteData = await request.post('https://shadespeare.herokuapp.com/api/v1/tweets')
      // dependent state change.
      // need to pass an arrow function
      this.setState(state => ({
        response: quoteData.body.tweetText,
        warningBool: false,
        promptCounter: state.promptCounter + 1
      }))
    } catch(err){
      console.log(err);
    }
    this.setState({ loadingBool: false })
  }

  handleText = ({ target }) => {
    this.setState({ text: target.value })
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    this.setState({ loadingBool: true })
    
    handleText()
      .then(response => {
        // dependent state change.
        // need to pass an arrow function
        this.setState(state => ({
          response,
          promptCounter: state.promptCounter + 1,
          text: '',
          loadingBool: false
        }))
      })
  }

  prompt = () => {
    const counter = this.state.promptCounter
    if(counter === 0) return 'Click not yond scroll!';
    if(counter === 1) return '...I hath tried to warneth thee. Might as well introduce thyself.';
    if(counter === 2) return 'Thy could comment on his shades.';
    if(counter === 3) return 'Thy could mention his works.';
    if(counter === 4) return 'Thy could request a sick burn.';
    if(counter === 5) return 'Thou could ask about who created him.';
    if(counter === 6) return 'Seems thou art getting the hang of this.'
    return 'Thou art on thine own now...'
  }

  render() {
    const { warningBool, loadingBool, text, response } = this.state;
    // handle loading at the top to remove extra conditionals in jsx
    if(loadingBool) return <img className="loadingGif" src="feather.gif" alt="loading" />

    const opacity = { display: warningBool ? 'none' : 'inline-block' }

    return (
      <div className="home-page">
      <div className="shadeField">
        <img style={opacity} className="shade" src="shades.png" alt="shadeTop" />
        {this.state.warningBool ? <img className="shadespeare" src="shadespeare.png" alt="shadespeare" /> :
        <h2 className="response">{response}
        <div className="fadingEffect" />
        </h2>}
        <img style={opacity} className="shade" src="shade-bottom.png" alt="bottom" />
      </div>
      
      <div className="buttonField">
      {this.state.warningBool
        ? <Button loadingBool={loadingBool} handleClick={this.handleClick} />
        : <Form
          loadingBool={loadingBool}
          handleSubmit={this.handleSubmit}
          text={text}
          handleText={this.handleText} />
      }
      <p><em>{this.prompt()}</em></p>
      </div>
      </div>
    )
  }
}
