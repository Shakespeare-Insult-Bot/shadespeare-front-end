import request from 'superagent'


export const apiURL = "https://shadespeare-api.herokuapp.com/api/v1/tweets"

export default async function () {
  const quoteData = await request.post(apiURL)
  let quote = quoteData.body.tweetText
  if (!quote.startsWith('I ') && !quote.startsWith('I\'ll')) {
    const firstLetter = quote[0].toLowerCase();
    quote = firstLetter + quote.slice(1);
  }
  return quote
}