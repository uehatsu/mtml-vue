import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import cssOnly from 'rollup-plugin-css-only';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';

export default {
  input: 'src/index.ts',
  output: {
    name: 'MTMLVue',
    exports: 'named',
  },
  external: ['vue'],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfigDefaults: {
        compilerOptions: {
          declaration: true,
        },
      },
      clean: true,
      objectHashIgnoreUnknownHack: true,
    }),
    cssOnly(),
    vue({ css: true, compileTemplate: true }),
    buble(),
  ],
};
