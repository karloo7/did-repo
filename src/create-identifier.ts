import { agent } from './veramo/setup.js'

async function main() {
  const didAlias = process.argv[2] ?? 'default'
  const identifier = await agent.didManagerCreate({ alias: didAlias })
  console.log(`New identifier created`)
  console.log(JSON.stringify(identifier, null, 2))
}

main().catch(console.log)