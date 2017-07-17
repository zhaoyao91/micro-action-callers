const requestBody = require('./request_body')

module.exports = async function requestOkBody (url, cmd, input) {
  const body = await requestBody(url, cmd, input)
  if (!body.ok) throw new Error(`failed to request ${url}: ${JSON.stringify(body)}`)
  else return body
}