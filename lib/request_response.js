const fetch = require('node-fetch')

module.exports = function requestResponse (url, cmd, input) {
  return fetch(url, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({cmd, input})
  })
}