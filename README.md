Complete README.md
# AOS SDK

Agent Operable Surface (AOS) SDK — A JavaScript SDK for enabling AI agents and applications to interact with software systems using structured, intent-based execution.

AOS provides a universal execution layer that allows AI systems to operate applications without relying on UI automation.

---

# 🚀 Features

- AI-native execution layer
- Intent-based interaction
- Secure authentication support
- Cross-platform compatibility
- Lightweight and production-ready
- Public AOS protocol support

---

# 📦 Installation

```bash
npm install @myrique/aos-sdk
⚡ Quick Start
const AOS = require("@myrique/aos-sdk")

const aos = new AOS({
  baseUrl: "https://api-zcwp5dj6mq-uc.a.run.app"
})

async function run() {

  const result = await aos.execute("create_post", {
    title: "Hello AOS",
    body: "First post using AOS SDK"
  })

  console.log(result)

}

run()
🧠 Discover AOS Capabilities
const spec = await aos.discover()

console.log(spec)

Example response:

{
  "aos_version": "1.0",
  "service": "myrique.aos",
  "actions": [...]
}
⚙️ Execute Actions
await aos.execute("create_post", {
  title: "New Post",
  body: "Created via AOS"
})
🔐 Authentication

If your AOS server requires authentication:

const aos = new AOS({
  baseUrl: "https://api.example.com",
  token: "your-auth-token"
})
🏗 Architecture
Application / AI Agent
        ↓
      AOS SDK
        ↓
    AOS Server
        ↓
   Execution Engine
        ↓
   Application Logic
🧩 Example Use Cases
AI agents operating applications
Automated workflows
Cross-application automation
AI copilots
Autonomous systems
📚 API
Create Client
const aos = new AOS({
  baseUrl: string,
  token?: string
})
Discover
await aos.discover()

Returns:

Available actions
AOS version
Service info
Execute
await aos.execute(action, parameters)

Example:

await aos.execute("create_post", {
  title: "Hello"
})
🌐 AOS Protocol

AOS uses:

GET /.well-known/aos.json
POST /aos/execute

This allows:

AI discovery
Action execution
Platform interoperability
🛣 Roadmap
TypeScript support
Workflow execution
Agent SDK
Multi-service orchestration
Plugin system
🤝 Contributing

Contributions are welcome.

Fork repository
Create feature branch
Submit pull request
📄 License

MIT License

🔗 Links

GitHub
https://github.com/yashmehndiratta/aos-sdk

NPM
https://www.npmjs.com/package/@myrique/aos-sdk

🚀 About AOS

Agent Operable Surface (AOS) is a protocol for enabling AI systems to operate applications through structured intent-based execution.

<<<<<<< HEAD
AOS aims to become a universal interface between AI agents and software systems.
=======
AOS aims to become a universal interface between AI agents and software systems.
>>>>>>> 508797b (Update README and bump version)
