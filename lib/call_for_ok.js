const callForBody = require('./call_for_body')

module.exports = async function callForOk (url, cmd, input) {
  const body = await callForBody(url, cmd, input)
  if (!body.ok) throw new Error(`failed to request ${url}: ${JSON.stringify(body)}`)
  else return body.output
}