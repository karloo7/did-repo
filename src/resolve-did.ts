import { agent } from './veramo/setup.js'

async function main(did: string) {
  const result = await agent.resolveDid({"didUrl": did});
  console.log(`DID resolution result: `, result)
}
const did = process.argv[2]
main(did).catch(console.log)