const AOS = require("./src")

const aos = new AOS({
  baseUrl: "https://api-zcwp5dj6mq-uc.a.run.app"
})

async function run() {
  try {

    console.log("Testing Execute Action...")

    const result = await aos.execute("create_post", {
      title: "Hello AOS",
      body: "Testing production SDK"
    })

    console.log("Execution Result:")
    console.log(result)

  } catch (error) {
    console.error("Error:", error.message)
  }
}

run()