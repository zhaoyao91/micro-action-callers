const requestOkBody = require('./request_ok_body')

module.exports = async function callForOk (url, cmd, input) {
  return (await requestOkBody(url, cmd, input)).output
}