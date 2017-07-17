const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const fetch = require('node-fetch')
const {route} = require('micro-action')
const {requestResponse, requestBody, requestOkOutput, requestOkBody} = require('./index')

const service = micro(route({
  'ping': () => 'pong',
  'fail': () => {throw new Error('fail')}
}, {errorLogger(){}}))

test('request response', async t => {
  const url = await listen(service)

  const res = await requestResponse(url, 'ping')
  const body = await res.json()

  t.deepEqual(body, {
    ok: true,
    output: 'pong'
  })
})

test('request body', async t => {
  const url = await listen(service)

  const body = await requestBody(url, 'ping')

  t.deepEqual(body, {
    ok: true,
    output: 'pong'
  })
})

test('request ok body', async t => {
  const url = await listen(service)

  const body = await requestOkBody(url, 'ping')
  t.deepEqual(body, {ok: true, output: 'pong'})

  const error = await t.throws(requestOkBody(url, 'fail'), Error)
})

test('request ok output', async t => {
  const url = await listen(service)

  const output = await requestOkOutput(url, 'ping')

  t.deepEqual(output, 'pong')
})
