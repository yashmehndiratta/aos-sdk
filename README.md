# AOS SDK

Agent Operable Surface SDK

## Install

npm install aos-sdk

## Usage

```js
const AOS = require("aos-sdk")

const aos = new AOS({
  baseUrl: "https://api.myrique.com"
})

await aos.execute("create_content", {
  title: "Hello"
})