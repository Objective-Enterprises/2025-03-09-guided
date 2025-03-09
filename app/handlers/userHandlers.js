import UserService from '../service/userService'

const service = new UserService()

function getAll (response) {
  response.setHeader('Content-Type', 'application/json')
  const users = service.getAll()
  const json = JSON.stringify(users)
  return response.end(json)
}

function getByUsername (username, response) {
  response.setHeader('Content-Type', 'application/json')
  const user = service.getByUsername(username)
  if (!user) {
    response.statusCode = 404
    const message = {
      message: 'User not found'
    }
    const json = JSON.stringify(message)
    return response.end(json)
  }
  const json = JSON.stringify(user)
  response.end(json)
}

function login (request, response) {
  response.setHeader('Content-Type', 'application/json')
  let body = ''
  request.on('data', (chunk) => {
    body += chunk
  })
  request.on('end', () => {
    body = JSON.parse(body)
    const success = service.login(body.username, body.password)
    if (success) {
      const json = JSON.stringify({ message: 'Success' })
      return response.end(json)
    }
    const json = JSON.stringify({ message: 'Failure' })
    response.statusCode = 403
    return response.end(json)
  })
}


















