import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
const chance = require('chance').Chance();



export default class Home extends Component {
  state = { 
    response: '',
    warningBool: true,
    text: null,
    promptCounter: 0
  }

  handleClick = async() => {
    try{

      const quoteData = await request.post('https://shadespeare-staging.herokuapp.com/api/v1/tweets')
      
      this.setState({
        response: quoteData.body.tweetText,
        warningBool: false,
        promptCounter: this.state.promptCounter + 1
      })
    } catch(err){
      console.log(err);
    }
  }
  handleText = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    const name = this.getName(this.state.text)
    const response = await this.nameResponse(name) 
    this.setState({
      response: response,
      promptCounter: this.state.promptCounter + 1 })
    
  }
  nameResponse = async(name) => {
    const quoteData = await request.post('https://shadespeare-staging.herokuapp.com/api/v1/tweets')
    let quote = quoteData.body.tweetText
    if(!quote.startsWith('I ') && !quote.startsWith('I\'ll')) {
      const firstLetter = quote[0].toLowerCase();
      quote = firstLetter + quote.slice(1);
    }
    const start = ['Nice to meeteth thee ', 'The pleasure is mine ', 'What a pleasure '];
    const exception = ['. Nonetheless, ', '. However, ', ', but ', '. Regardless ', ', yet', ', even so'];
    console.log('===============chance: ', chance.pickone(start) )
    return chance.pickone(start) + name + chance.pickone(exception) + quote;
  }
  getName = (text) => {
    if(!text) return
    const nameMatchRegex = text.match(/(my name is|i'm|im|i am|call me|thy name) (\w+)/i);
    if(!nameMatchRegex) return;
    const name = nameMatchRegex[2];
    const firstLetter = name[0].toUpperCase();
    return firstLetter + name.slice(1);
  }

  prompt = () => {
    const counter = this.state.promptCounter
    if (counter === 0) {
      return 'Whatev\'r thee doth click not yond scroll!';
    } else if(counter === 1) {
      return '...I hath tried to warneth thee. Might as well introduce thyself.';
    } else {
      return 'some other random prompts'
    }

  }
  render() {
    const opacity = this.state.warningBool ? {display: 'none'} : {display: 'inline-block'}
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


      {this.state.warningBool 
      ? <button><img className="scrollImage" src="scroll&pen.png" alt="the button" onClick={this.handleClick} /></button>
      : (<form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleText}></input>
          <button onClick={this.handleSubmit}><img className="scrollImage" src="scroll&pen.png" alt="the submit button" /> </button>
      </form>)
      }
        <p>
          <em>{this.prompt()}</em>
        </p>


        {/* <p>
          <em>{this.state.warningBool ? 'Whatev\'r thee doth click not yond scroll!' : '...I hath tried to warneth thee. Might as well introduce thyself.'}</em>
        </p> */}
      </div>
        
      <Link className="aboutUs" to='/about-us'>About the Authors</Link>
      <Link className="aboutProject" to='/about-project'>About Shadespeare</Link>
      </div>
    )
  }
}
