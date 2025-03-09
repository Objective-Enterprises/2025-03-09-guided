const users = require('../data/users.json')

class UserService {
  constructor () {
    this.users = users
  }

  getAll () {
    return this.users
  }

  getByUsername (username) {
    const user = this.users.find(user => user.username === username)
    return user
  }

  login (username, password) {
    const user = this.getByUsername(username)

    if (!user) {
      return false
    }

    return user.password === password
  }
}

module.exports = UserService