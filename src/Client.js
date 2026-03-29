const fetch = require("cross-fetch")

class Client {
  constructor(config) {
    this.baseUrl = config.baseUrl
    this.token = config.token || null
  }

  setToken(token) {
    this.token = token
  }

  async request(path, options = {}) {
    const res = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(this.token && {
          Authorization: `Bearer ${this.token}`
        }),
        ...(options.headers || {})
      }
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || "AOS Request Failed")
    }

    return data
  }
}

module.exports = Client