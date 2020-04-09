import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import getQuote from './utils.js'
const chance = require('chance').Chance();




export default class Home extends Component {
  state = { 
    response: '',
    warningBool: true,
    text: '',
    promptCounter: 0
  }

  handleClick = async() => {
    try{

      const quoteData = await request.post('https://shadespeare.herokuapp.com/api/v1/tweets')
      
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
    const text = this.state.text
    const name = this.getName(text)
    const lameWord = this.getLame(text)
    const shadeWord = this.getShade(text)
    const helloWord = this.getHello(text)
    
    let response
    if (name) response = await this.nameResponse(name) 
    if (helloWord) response = await this.helloResponse(helloWord)
    if (lameWord) response = await this.lameResponse(lameWord)
    if (shadeWord) response = await this.shadeResponse(shadeWord)

    if (!response) {
      const quoteData = await request.post('https://shadespeare.herokuapp.com/api/v1/tweets')
      const quote = quoteData.body.tweetText
      const rebuttal = ['Hast thy nothing witty to say? ', 'Is thy quill dry? ', 'Are thine fingers broken? ', 'Hast thou had enough? ', 'Ist thou mute? ']
      //if text is empty reply with mute and dry quill, save others for text but no found response
      response = chance.pickone(rebuttal) + quote
    }
    this.setState({
      response: response,
      promptCounter: this.state.promptCounter + 1,
      text: ''
    })
  }
  helloResponse = (helloWord) => {
    const greeting = [' to you as well.', ' indeed...', ' back at thee!']
    const firstLetter = helloWord[0].toUpperCase();
    return firstLetter + helloWord.slice(1) + chance.pickone(greeting)
  }
  getHello = (text) => {
    if(!text) return
    const helloMatchRegex = text.match(/(hello|\bhi\b|wassup|\bsup\b|good morning|good day|morning|good evening|\byo\b|\bhey\b)/i)
    if(!helloMatchRegex) return
    return helloMatchRegex[1]
  }
  shadeResponse = (shadeWord) => {
    const shadeQuotes = [`Mine ${shadeWord}? Nay they are legend!`, `My brilliance requires such ${shadeWord}!`, `These ${shadeWord} are needed for obscuring your visage.`, `To spit fire like this you need ${shadeWord} like these.`, `Shadespeare requires ${shadeWord}.` ]
    return chance.pickone(shadeQuotes)
  }
  getShade = (text) => {
    if(!text) return
    const shadeMatchRegex = text.match(/(shades|sunglasses|glasses|spectacles|bifocals)/i)
    if(!shadeMatchRegex) return
    return shadeMatchRegex[1]
  }
  nameResponse = async(name) => {
    const quote = await getQuote()
    const start = ['Nice to meeteth thee ', 'The pleasure is mine ', 'What a pleasure ', 'Bless thee '];
    const exception = ['. Nonetheless, ', '. However, ', ', but ', '. Regardless ', ', yet ', ', even so '];
    return chance.pickone(start) + name + chance.pickone(exception) + quote;
  }
  getName = (text) => {
    if(!text) return
    const nameMatchRegex = text.match(/(my name is|i'm|\bim\b|\bi am\b|call me) (\w+)/i);
    if(!nameMatchRegex) return;
    const name = nameMatchRegex[2];
    const firstLetter = name[0].toUpperCase();
    return firstLetter + name.slice(1);
  }
  lameResponse = async(word) => {
    const quote = await getQuote()
    const start = ['No thine is ', 'Thee call me ', 'How dare thee say ', 'Ha! ']
    const exception = ['. Nonetheless, ', '. However, ', ', but ', '. Regardless ', ', yet ', ', even so '];
    return chance.pickone(start) + word + chance.pickone(exception) + quote;
  }
  getLame = (text) => {
    if(!text) return
    const lameMatchRegex = text.match(/(\blame\b|not smart|not very smart|poopface|stupid|not clever|\bbad\b|whack|lousy|not intelligent|pathetic|weak)/i)
    if(!lameMatchRegex) return
    return lameMatchRegex[1]
  }

  prompt = () => {
    const counter = this.state.promptCounter
    if (counter === 0) return 'Click not yond scroll!';
    if(counter === 1) return '...I hath tried to warneth thee. Might as well introduce thyself.';
    if(counter === 2) return 'Thy could comment on his shades or whatever.';
    if(counter === 3) return 'Wast he even that great a writer?';
    //a few more promts
    if(counter === 4) return 'Seems thou art getting the hang of this.'
    return 'Thou art on thine own now...'
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
          <button onClick={this.handleSubmit}><img className="scrollImage smallScroll"  src="scroll&pen.png" alt="the submit button" /> </button>
      </form>)
      }
        <p>
          <em>{this.prompt()}</em>
        </p>
      </div>
        
      <Link className="aboutUs" to='/about-us'>About the Authors</Link>
      <Link className="aboutProject" to='/about-project'>About Shadespeare</Link>
      </div>
    )
  }
}
