class AOSError extends Error {
  constructor(message) {
    super(message)
    this.name = "AOSError"
  }
}

module.exports = {
  AOSError
}