import request from 'superagent'

export default async function() {
  const quoteData = await request.post('https://shadespeare-staging.herokuapp.com/api/v1/tweets')
  let quote = quoteData.body.tweetText
  if(!quote.startsWith('I ') && !quote.startsWith('I\'ll')) {
    const firstLetter = quote[0].toLowerCase();
    quote = firstLetter + quote.slice(1);
  }
  return quote
}