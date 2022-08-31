import * as Yup from 'yup';

declare module 'yup' {
  export interface StringSchema {
    ethereum(): StringSchema;
  }
}

/**
 * Checks if the given string is an address
 *
 * @author https://chainsafe.io/
 * @link https://github.com/ChainSafe/web3.js/blob/1.x/packages/web3-utils/src/utils.js
 * @method isAddress
 * @param {String} address the given HEX address
 * @return {Boolean}
 */
function isAddress(address: string) {
  // check if it has the basic requirements of an address
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
    // If it's ALL lowercase or ALL upppercase
  } else {
    if (/^(0x|0X)?[0-9a-f]{40}$/.test(address) || /^(0x|0X)?[0-9A-F]{40}$/.test(address)) {
      return true;
    }
  }
}

function parseEthereumAddress() {
  return this.test(
    'ethereum',
    ({ value }) => `${value} is not a valid Ethereum address`,
    function (value: string) {
      return isAddress(value);
    }
  );
}

Yup.addMethod(Yup.string, 'ethereum', parseEthereumAddress);
