# Micro Action Callers

Callers to help call [micro-action][micro-action] service.

[micro-action]: https://github.com/zhaoyao91/micro-action
 
## API

#### callForResponse

async func(url, cmd, input) => [fetchResponse][fetch-response]

#### callForBody

async func(url, cmd, input) => body

`body` is the payload of the http response. Possible fields are:

- ok - boolean, indicates whether the it is a success or failure response.
- code - string, used to distinguish response cases
- output - the payload of this response
- error - if it is a failure response, it may include an error object which contains information about what's happened 
to help debug.

#### callForOk

async func(url, cmd, input) => output

Call the service and resolve out the output. 
Only success case will be resolved, otherwise errors will be thrown.

## Relative Project

- [micro-action][micro-action]
- [micro-action-protocol][micro-action-protocol]

## License

ISC

[fetch-response]: https://github.com/bitinn/node-fetch#class-response
[micro-action]: https://github.com/zhaoyao91/micro-action
[micro-action-protocol]: https://github.com/zhaoyao91/micro-action-protocol
