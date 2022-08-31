# yup-ethereum

[![CI](https://github.com/azerella/yup-ethereum/actions/workflows/CI.yml/badge.svg)](https://github.com/azerella/yup-ethereum/actions/workflows/CI.yml)

Yup extension that validates an Ethereum address.

> :note: This extension implements a lightweight version [of the `web3.js` utility functions](https://github.com/ChainSafe/web3.js/blob/1.x/packages/web3-utils/src/utils.js#L85). Without supplying the actual public key, it's tricky to perfectly validate a givne address.

## Install

```sh
# NPM
npm i --save-dev yup-ethereum

# Yarn
yarn add -D yup-ethereum
```

## Usage

Here's some example usage to get you started:

```js
import * as Yup from 'yup';

import 'yup-ethereum';

const ethereumSchema = Yup.string().ethereum().required();

schema.isValidSync('0xc1912fee45d61c87cc5ea59dae31190fffff232d') // true
```

## Contributors

Don't be scared to raise an issue or a pull request! 

Any contributions, no matter how big or small will land your picture here and be greatly appreciated ❤️

<div style="display:inline;">
  <a href="https://github.com/adamzerella"><img width="48" height="48" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam Zerella"/></a>
</div>
