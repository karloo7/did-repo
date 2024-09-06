import { agent } from './veramo/setup.js'

async function main() {
  const didAlias = process.argv[2] ?? 'default'
  const didProvider = process.argv[3]
  console.log("\nselected provider " + didProvider + ".\n")
  const identifier = await agent.didManagerCreate({ alias: didAlias, provider: didProvider })
  console.log(`New identifier created`)
  console.log(JSON.stringify(identifier, null, 2))
}

main().catch(console.log)