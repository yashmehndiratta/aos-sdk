async function discover(client) {
  return client.request("/.well-known/aos.json", {
    method: "GET"
  })
}

module.exports = discover