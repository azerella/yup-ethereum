import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'extension.ts',
  output: {
    file: 'lib/yup-ethereum.cjs.js',
    format: 'cjs',
  },
  plugins: [typescript(), terser()],
};
