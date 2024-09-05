import { agent } from './veramo/setup.js'

async function main() {
  const issuer = await agent.didManagerGetByAlias({ alias: process.argv[2] ??'default' })
  const subject = await agent.didManagerGetByAlias({ alias: process.argv[3] ??'default' })


  const verifiableCredential = await agent.createVerifiableCredential({
    credential: {
      issuer: { id: issuer.did },
      credentialSubject: {
        id: subject.did,
        you: 'Rock',
        alias: subject.alias
      },
    },
    proofFormat: 'jwt',
  })
  console.log(`New credential created`)
  console.log(JSON.stringify(verifiableCredential, null, 2))
}

main().catch(console.log)