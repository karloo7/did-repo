import { agent } from './veramo/setup.js'

async function main() {
  const result = await agent.verifyCredential({
    credential: {
      "credentialSubject": {
        "you": "Rock",
        "id": "did:ethr:sepolia:0x0209a93f998b09bb520ab5297958a9d5d8643a710888220c368a8e5de59c818128"
      },
      "issuer": {
        "id": "did:ethr:sepolia:0x02b809b0a60aa7c94f0a3ecf20da824c69c5a2dcd99f10b77a6bff8c8c99fa1eee"
      },
      "type": [
        "VerifiableCredential"
      ],
      "@context": [
        "https://www.w3.org/2018/credentials/v1"
      ],
      "issuanceDate": "2024-09-05T15:29:40.000Z",
      "proof": {
        "type": "JwtProof2020",
        "jwt": "eyJhbGciOiJFUzI1NksiLCJ0eXAiOiJKV1QifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIl0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7InlvdSI6IlJvY2sifX0sInN1YiI6ImRpZDpldGhyOnNlcG9saWE6MHgwMjA5YTkzZjk5OGIwOWJiNTIwYWI1Mjk3OTU4YTlkNWQ4NjQzYTcxMDg4ODIyMGMzNjhhOGU1ZGU1OWM4MTgxMjgiLCJuYmYiOjE3MjU1NTAxODAsImlzcyI6ImRpZDpldGhyOnNlcG9saWE6MHgwMmI4MDliMGE2MGFhN2M5NGYwYTNlY2YyMGRhODI0YzY5YzVhMmRjZDk5ZjEwYjc3YTZiZmY4YzhjOTlmYTFlZWUifQ.tzPALhEGqKKChs2vsuB9mOJN4LO0XYPgFNPG8UoKcs4PUQlhsRdP5QiLJ-EJmEXnzqO65UGBk2geSd9Se0M8kQ"
      }
    },
  })
  console.log(`Credential verified`, result.verified)
}

main().catch(console.log)