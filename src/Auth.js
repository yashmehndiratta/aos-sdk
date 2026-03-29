class Auth {
  constructor(client) {
    this.client = client
  }

  setToken(token) {
    this.client.setToken(token)
  }
}

module.exports = Auth