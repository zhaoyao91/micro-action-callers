const requestResponse = require('./request_response')

module.exports = async function requestBody (url, cmd, input) {
  const res = await requestResponse(url, cmd, input)
  if (!res.ok) {
    throw new Error(`failed to request ${url}: ${await res.text()}`)
  }
  else if (res.headers.get('content-type') !== 'application/json') {
    throw new Error(`invalid body received from ${url}: ${await res.text()}`)
  }
  else {
    const body = await res.json()
    if (typeof body === 'string' || Array.isArray(body) || body === null) {
      throw new Error(`invalid body received from ${url}: ${body}`)
    }
    return body
  }
}