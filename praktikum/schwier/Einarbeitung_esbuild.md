# esbuild
- Content Types
  - JS
  - TS
  - JSX
  - JSON
  - CSS
  - Text
  - Binary
  - Base64
  - Data URL
  - External file
- in golang
- schnell
  - 0.33s -> webpack 41.53s
  - ohne cache
- api für js und go
- ts und jsx syntax
- sourcemap
- plugins
- parallel

## bundling nodejs

https://esbuild.github.io/getting-started/
https://devtails.medium.com/bundling-your-node-js-express-app-with-esbuild-5aecc36c5047

npm install esbuild

require('esbuild').buildSync({
  entryPoints: ['app.js'],
  bundle: true,
  platform: 'node',
  target: ['node10.4'],
  outfile: 'out.js',
})

require('esbuild').buildSync({
  entryPoints: ['app.jsx'],
  bundle: true,
  platform: 'node',
  external: ['./node_modules/*'],
  outfile: 'out.js',
})

### package.js
{
  ...
  "scripts": {
    "start": "node built/index.js",
    "build": "esbuild index.ts --platform=node --bundle --minify --outfile=built/index.js"
  },
  ...
}
