async function execute(client, action, parameters = {}) {
  return client.request("/aos/execute", {
    method: "POST",
    body: JSON.stringify({
      action,
      parameters
    })
  })
}

module.exports = execute