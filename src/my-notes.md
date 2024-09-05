errror:
PS C:\kk\veramo\veramo-agent> yarn ts-node --esm .\src\list-identifiers.ts
yarn run v1.22.22
$ C:\kk\veramo\veramo-agent\node_modules\.bin\ts-node --esm .\src\list-identifiers.ts
(node:26000) [DEP0180] DeprecationWarning: fs.Stats constructor is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for C:\kk\veramo\veramo-agent\src\list-identifiers.ts
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:176:9)
    at defaultGetFormat (node:internal/modules/esm/get_format:219:36)
    at defaultLoad (node:internal/modules/esm/load:133:22)
    at async nextLoad (node:internal/modules/esm/hooks:746:22)
    at async nextLoad (node:internal/modules/esm/hooks:746:22)
    at async Hooks.load (node:internal/modules/esm/hooks:383:20)
    at async MessagePort.handleMessage (node:internal/modules/esm/worker:199:18) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

Fix: https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension
 npm i -D tsx
 npx tsx .\src\list-identifiers.ts
