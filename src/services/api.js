import getQuote from '../utils.js'

// move all this stuff into a service file
// this helps keep your components clean
export const noKeywordsResponse = async() => {
  const quoteData = await request.post('https://shadespeare.herokuapp.com/api/v1/tweets')
  const quote = quoteData.body.tweetText
  const rebuttal = ['Hast thy nothing witty to say? ', 'Hast thou had enough? ', quote]
  return chance.weighted(rebuttal, [1,1,3])
}

export const noInputResponse = async() => {
  const quoteData = await request.post('https://shadespeare.herokuapp.com/api/v1/tweets')
  const quote = quoteData.body.tweetText
  const rebuttal = ['Is thy quill dry? ', 'Are thine fingers broken? ', 'Ist thou mute? ', quote]
  return chance.weighted(rebuttal, [1,1,1,3])
}

export const getHello = (text) => {
if(!text) return
  const helloMatchRegex = text.match(/(hello|\bhi\b|wassup|\bsup\b|good morning|good day|morning|good evening|\byo\b|\bhey\b|good morrow)/i)
  if(!helloMatchRegex) return
  return helloMatchRegex[1]
}

export const helloResponse = (helloWord) => {
  const greeting = [' to you as well.', ' indeed...', ' back at thee!']
  const firstLetter = helloWord[0].toUpperCase();
  return firstLetter + helloWord.slice(1) + chance.pickone(greeting)
}

export const getShade = (text) => {
  if(!text) return
  const shadeMatchRegex = text.match(/(\bshades\b|sunglasses|glasses|spectacles|bifocals)/i)
  if(!shadeMatchRegex) return
  return shadeMatchRegex[1]
}

export const shadeResponse = (shadeWord) => {
  const shadeQuotes = [`Mine ${shadeWord}? Nay they are legend!`, `My brilliance requires such ${shadeWord}!`, `These ${shadeWord} are needed for obscuring your visage.`, `To spit fire like this you need ${shadeWord} like these.`, `Shadespeare requires ${shadeWord}.` ]
  return chance.pickone(shadeQuotes)
}

export const getName = (text) => {
  if(!text) return
  const nameMatchRegex = text.match(/(my name is|i'm|\bim\b|\bi am\b|call me) (\w+)/i);
  if(!nameMatchRegex) return;
  const name = nameMatchRegex[2];
  const firstLetter = name[0].toUpperCase();
  return firstLetter + name.slice(1);
}

export const nameResponse = async(name) => {
  const quote = await getQuote()
  const start = ['Nice to meeteth thee ', 'The pleasure is mine ', 'What a pleasure ', 'Bless thee '];
  const exception = ['. Nonetheless, ', '. However, ', ', but ', '. Regardless ', ', yet ', ', even so '];
  return chance.pickone(start) + name + chance.pickone(exception) + quote;
}

export const getLame = (text) => {
  if(!text) return
  const lameMatchRegex = text.match(/(\blame\b|not smart|not very smart|poopface|stupid|not clever|\bbad\b|whack|lousy|not intelligent|pathetic|weak|sucks|suck|dumb)/i)
  if(!lameMatchRegex) return
  return lameMatchRegex[1]
}

export const lameResponse = async(word) => {
  const quote = await getQuote()
  const start = ['No thine is ', 'Thee call me ', 'How dare thee say ', 'Ha! ']
  const exception = ['. Nonetheless, ', '. However, ', ', but ', '. Regardless ', ', yet ', ', even so '];
  return chance.pickone(start) + word + chance.pickone(exception) + quote;
}

export const getGoodbye = (text) => {
  if(!text) return
  const byeMatchRegex = text.match(/(goodbye|see ya|later|bye|adios|farewell|toodles|adieu|so long)/i)
  if(!byeMatchRegex) return
  return byeMatchRegex[1]
}

export const byeResponse = async(word) => {
  const quote = await getQuote()
  const middle = [' indeed. I\'ll leave thee with this, ', ' ha! You coward ', '? So thee hast had enough, ']
  const firstLetter = word[0].toUpperCase();
  return firstLetter + word.slice(1) + chance.pickone(middle) + quote;
}

export const getMaker = (text) => {
  if(!text) return
  const makerMatchRegex = text.match(/(creators|creator|who made you|makers|maker|devs|developers|inventors|inventor|origins|origin|who created you|who developed you)/i)
  if(!makerMatchRegex) return
  return makerMatchRegex[1]
}

export const makerResponse = async(word) => {
  const makerResponses = ['Why the masters of the universe of course. ', 'The gods bestowed life upon me. ', 'Don\'t thee know? World renown authors. ','Thine lords and lady of Alchemy. ']
  return chance.pickone(makerResponses) + 'Clicketh the link down beloweth and to thine left.'
}

export const getRoast = (text) => {
  if(!text) return
  const roastMatchRegex = text.match(/(roast me|roast|hit me|punchline|shoot|insult|try your best|nice burn|sick burn|burn)/i)
  if(!roastMatchRegex) return
  return roastMatchRegex[1]
}

export const roastResponse = async(word) => {
  const quote = await getQuote()
  const roastResponse = [' you say, ','? So I shall, ','? Try and handle my shade, ']
  const firstLetter = word[0].toUpperCase();
  return firstLetter + word.slice(1) + chance.pickone(roastResponse) + quote
}

export const getPlays = (text) => {
  if (!text) return
  const playsMatchRegex = text.match(/(plays|play|romeo|juliet|hamlet|macbeth|othello|cleopatra|caesor|henry|mercutio|writing|works|work|midsummer|much ado|merchant|twelth|verona)/i)
  if(!playsMatchRegex) return
  return playsMatchRegex[1]
}

export const playsResponse = async(word) => {
  const playsResponses = ['Ah, not my best work.', 'Twas not me ;)','Yes, yes, I knoweth I am good.', 'Thy should see what I am crafting now.', 'Only a hint of my true power.']
  return chance.pickone(playsResponses)
}

export default () => {
  const text = this.state.text
  const name = getName(text)
  const lameWord = getLame(text)
  const shadeWord = getShade(text)
  const helloWord = getHello(text)
  const byeWord = getGoodbye(text)
  const makerWord = getMaker(text)
  const roastWord = getRoast(text)
  const playsWord = getPlays(text)
  
  if (helloWord) return helloResponse(helloWord)
  if (lameWord) return lameResponse(lameWord)
  if (shadeWord) return shadeResponse(shadeWord)
  if (makerWord) return makerResponse(makerWord)
  if (roastWord) return roastResponse(roastWord)
  if (playsWord) return playsResponse(playsWord)
  if (name) return nameResponse(name)
  if(byeWord) return byeResponse(byeWord)
  if (!text) return noInputResponse()
  
  return noKeywordsResponse()
}
