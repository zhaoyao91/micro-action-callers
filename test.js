const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const fetch = require('node-fetch')
const {route} = require('micro-action')
const {callForResponse, callForBody, callForOk} = require('./index')

const service = micro(route({
  'ping': () => 'pong'
}))

test('call for response', async t => {
  const url = await listen(service)

  const res = await callForResponse(url, 'ping')
  const body = await res.json()

  t.deepEqual(body, {
    ok: true,
    output: 'pong'
  })
})

test('call for body', async t => {
  const url = await listen(service)

  const body = await callForBody(url, 'ping')

  t.deepEqual(body, {
    ok: true,
    output: 'pong'
  })
})

test('call for ok', async t => {
  const url = await listen(service)

  const output = await callForOk(url, 'ping')

  t.deepEqual(output, 'pong')
})
