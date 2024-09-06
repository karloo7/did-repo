import { agent } from './veramo/setup.js'

async function main() {
  const identifiers = await agent.didManagerFind()

  console.log(`There are ${identifiers.length} identifiers`)

  if (identifiers.length > 0) {
    identifiers.map((id) => {
      console.log(JSON.stringify(id, null, 2))
      console.log('..................')
    })
  }
}

main().catch(console.log)