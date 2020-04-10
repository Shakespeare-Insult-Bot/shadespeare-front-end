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
    promptCounter: 0,
    nameBool: true,
    loadingBool: false
  }

  handleClick = async() => {
    this.setState({loadingBool: true})
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
    this.setState({loadingBool: false})
  }

  handleText = (e) => {
    this.setState({text: e.target.value})
  }

  handleSubmit = async(e) => {
    e.preventDefault()
    this.setState({loadingBool: true})
    
    try {
      const text = this.state.text
      const name = this.getName(text)
      const lameWord = this.getLame(text)
      const shadeWord = this.getShade(text)
      const helloWord = this.getHello(text)
      const byeWord = this.getGoodbye(text)
      const makerWord = this.getMaker(text)
      const roastWord = this.getRoast(text)
      const playsWord = this.getPlays(text)
      
      let response
      if (helloWord) response = await this.helloResponse(helloWord)
      if (lameWord) response = await this.lameResponse(lameWord)
      if (shadeWord) response = await this.shadeResponse(shadeWord)
      if (makerWord) response = await this.makerResponse(makerWord)
      if (roastWord) response = await this.roastResponse(roastWord)
      if (playsWord) response = await this.playsResponse(playsWord)
      if (name && this.state.nameBool) {
        response = await this.nameResponse(name) 
        this.setState({nameBool: false})
      }
      if(byeWord) response = await this.byeResponse(byeWord)
      if (!text) response = await this.noInputResponse()
      if (!response) response = await this.noKeywordsResponse()
      this.setState({
        response: response,
        promptCounter: this.state.promptCounter + 1,
        text: ''
      })
    } catch(err) {
      console.log(err)
    }
    this.setState({loadingBool: false})
  }

  noKeywordsResponse = async() => {
    const quoteData = await request.post('https://shadespeare.herokuapp.com/api/v1/tweets')
    const quote = quoteData.body.tweetText
    const rebuttal = ['Hast thy nothing witty to say? ', 'Hast thou had enough? ', quote]
    return chance.weighted(rebuttal, [1,1,3])
  }
  noInputResponse = async() => {
    const quoteData = await request.post('https://shadespeare.herokuapp.com/api/v1/tweets')
    const quote = quoteData.body.tweetText
    const rebuttal = ['Is thy quill dry? ', 'Are thine fingers broken? ', 'Ist thou mute? ', quote]
    return chance.weighted(rebuttal, [1,1,1,3])
  }
  getHello = (text) => {
  if(!text) return
    const helloMatchRegex = text.match(/(hello|\bhi\b|wassup|\bsup\b|good morning|good day|morning|good evening|\byo\b|\bhey\b|good morrow)/i)
    if(!helloMatchRegex) return
    return helloMatchRegex[1]
  }
  helloResponse = (helloWord) => {
    const greeting = [' to you as well.', ' indeed...', ' back at thee!']
    const firstLetter = helloWord[0].toUpperCase();
    return firstLetter + helloWord.slice(1) + chance.pickone(greeting)
  }
  getShade = (text) => {
    if(!text) return
    const shadeMatchRegex = text.match(/(\bshades\b|sunglasses|glasses|spectacles|bifocals)/i)
    if(!shadeMatchRegex) return
    return shadeMatchRegex[1]
  }
  shadeResponse = (shadeWord) => {
    const shadeQuotes = [`Mine ${shadeWord}? Nay they are legend!`, `My brilliance requires such ${shadeWord}!`, `These ${shadeWord} are needed for obscuring your visage.`, `To spit fire like this you need ${shadeWord} like these.`, `Shadespeare requires ${shadeWord}.` ]
    return chance.pickone(shadeQuotes)
  }
  getName = (text) => {
    if(!text) return
    const nameMatchRegex = text.match(/(my name is|i'm|\bim\b|\bi am\b|call me) (\w+)/i);
    if(!nameMatchRegex) return;
    const name = nameMatchRegex[2];
    const firstLetter = name[0].toUpperCase();
    return firstLetter + name.slice(1);
  }
  nameResponse = async(name) => {
    const quote = await getQuote()
    const start = ['Nice to meeteth thee ', 'The pleasure is mine ', 'What a pleasure ', 'Bless thee '];
    const exception = ['. Nonetheless, ', '. However, ', ', but ', '. Regardless ', ', yet ', ', even so '];
    return chance.pickone(start) + name + chance.pickone(exception) + quote;
  }
  getLame = (text) => {
    if(!text) return
    const lameMatchRegex = text.match(/(\blame\b|not smart|not very smart|poopface|stupid|not clever|\bbad\b|whack|lousy|not intelligent|pathetic|weak|sucks|suck|dumb)/i)
    if(!lameMatchRegex) return
    return lameMatchRegex[1]
  }
  lameResponse = async(word) => {
    const quote = await getQuote()
    const start = ['No thine is ', 'Thee call me ', 'How dare thee say ', 'Ha! ']
    const exception = ['. Nonetheless, ', '. However, ', ', but ', '. Regardless ', ', yet ', ', even so '];
    return chance.pickone(start) + word + chance.pickone(exception) + quote;
  }
  getGoodbye = (text) => {
    if(!text) return
    const byeMatchRegex = text.match(/(goodbye|see ya|later|bye|adios|farewell|toodles|adieu|so long)/i)
    if(!byeMatchRegex) return
    return byeMatchRegex[1]
  }
  byeResponse = async(word) => {
    const quote = await getQuote()
    const middle = [' indeed. I\'ll leave thee with this, ', ' ha! You coward ', '? So thee hast had enough, ']
    const firstLetter = word[0].toUpperCase();
    return firstLetter + word.slice(1) + chance.pickone(middle) + quote;
  }
  getMaker = (text) => {
    if(!text) return
    const makerMatchRegex = text.match(/(creators|creator|who made you|makers|maker|devs|developers|inventors|inventor|origins|origin|who created you|who developed you)/i)
    if(!makerMatchRegex) return
    return makerMatchRegex[1]
  }
  makerResponse = async(word) => {
    const makerResponses = ['Why the masters of the universe of course. ', 'The gods bestowed life upon me. ', 'Don\'t thee know? World renown authors. ','Thine lords and lady of Alchemy. ']
    return chance.pickone(makerResponses) + 'Clicketh the link down beloweth and to thine left.'
  }
  getRoast = (text) => {
    if(!text) return
    const roastMatchRegex = text.match(/(roast me|roast|hit me|punchline|shoot|insult|try your best|nice burn|sick burn|burn)/i)
    if(!roastMatchRegex) return
    return roastMatchRegex[1]
  }
  roastResponse = async(word) => {
    const quote = await getQuote()
    const roastResponse = [' you say, ','? So I shall, ','? Try and handle my shade, ']
    const firstLetter = word[0].toUpperCase();
    return firstLetter + word.slice(1) + chance.pickone(roastResponse) + quote
  }
  getPlays = (text) => {
    if (!text) return
    const playsMatchRegex = text.match(/(plays|play|romeo|juliet|hamlet|macbeth|othello|cleopatra|caesor|henry|mercutio|writing|works|work|midsummer|much ado|merchant|twelth|verona)/i)
    if(!playsMatchRegex) return
    return playsMatchRegex[1]
  }
  playsResponse = async(word) => {
    const playsResponses = ['Ah, not my best work.', 'Twas not me ;)','Yes, yes, I knoweth I am good.', 'Thy should see what I am crafting now.', 'Only a hint of my true power.']
    return chance.pickone(playsResponses)
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
        ? ( this.state.loadingBool 
          ? (<img className="loadingGif" src="feather.gif" alt="loading" />)
          :<button><img className="scrollImage" src="scroll&pen.png" alt="the button" onClick={this.handleClick} /></button>)
        : (<form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleText}></input>
            {this.state.loadingBool 
            ? (<img className="smallLoading" src="feather.gif" alt="loading" />)
            : <button onClick={this.handleSubmit}><img className="scrollImage smallScroll"  src="scroll&pen.png" alt="the submit button" /> </button>}
          </form>)
      }
      <p><em>{this.prompt()}</em></p>
      </div>
      <Link className="aboutUs" to='/about-us'>About the Authors</Link>
      <Link className="aboutProject" to='/about-project'>About Shadespeare</Link>
      </div>
    )
  }
}