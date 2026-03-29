const Client = require("./Client")
const discover = require("./Discovery")
const execute = require("./Execute")
const Auth = require("./Auth")

class AOS {
  constructor(config) {
    this.client = new Client(config)
    this.auth = new Auth(this.client)
  }

  async discover() {
    return discover(this.client)
  }

  async execute(action, parameters) {
    return execute(this.client, action, parameters)
  }
}

module.exports = AOS