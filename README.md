# AOS SDK

Agent Operable Surface (AOS) SDK — A JavaScript SDK for enabling AI agents to interact with applications using structured, intent-based execution.

## Installation

```bash
npm install aos-sdk
Usage
const AOS = require("aos-sdk")

const aos = new AOS({
  baseUrl: "https://api.example.com"
})

const result = await aos.execute("create_content", {
  title: "Hello AOS"
})

console.log(result)
Features
AI-native execution
Intent-based interaction
Cross-platform support
Secure authentication
Example
await aos.execute("create_post", {
  title: "My first AOS post"
})
