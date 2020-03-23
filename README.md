# React SSR on Netlify Functions (Express)

This is a retake on [Netlify's own demo](https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/), where this one is a bit more like the setup I myself prefer and am used to. Less magic (Parcel, Create React App) and less bundles: Just plain old [Express](https://expressjs.com/) with [serverless-http](https://github.com/dougmoscrop/serverless-http). Tried to get [Fastify](https://www.fastify.io) and [aws-fastify-lambda](https://github.com/fastify/aws-lambda-fastify) working, but to no avail. Maybe will return to those later.

Uses:

- Webpack 4 with various loaders
- React 16.13
- Babel 7

Assumes that you'll use Netlify, obviously.

## Running

There's not much magic going on here. You will need to manually (un)comment the client-side or server-side mode in `src/index.jsx`.

### Install dependencies

Run `yarn install` or `npm install`.

### Initialize project

- Install Netlify CLI with `yarn global add netlify-cli` or `npm install -g netlify-cli`
- Login with `netlify login`
- Setup Netlify project and point this code-base there

### Local

Switch to CSR mode first.

Use one of:

- `netlify dev`, or
- `yarn start`/`npm run start`

### Deploy

Switch to SSR mode and run `yarn deploy` or `npm run deploy`.
