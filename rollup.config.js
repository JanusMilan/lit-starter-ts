// OPTIONAL: A rollup plugin to show filesize in the cli
import filesize from 'rollup-plugin-filesize';
// WICHTIG: Rollup plugin to MINIFY generated ES bundle.
import {terser} from 'rollup-plugin-terser';
/* WICHTIG: Rollup plugin which locates modules using the Node resolution algorithm, 
   for using third party modules in node_modules */
import resolve from 'rollup-plugin-node-resolve';
// A Rollup plugin which replaces targeted strings in files while bundling.
import replace from '@rollup/plugin-replace';
// A Rollup plugin for Copy Static assets
import copy from 'rollup-plugin-copy';
// A Rollup plugin to minify HTML and CSS markup
import minifyHTML from 'rollup-plugin-minify-html-literals';
// OPTIONAL:
import summary from 'rollup-plugin-summary';

// Copy Static assets: parktisch für PWA für Manifest und index.html
const copyConfig = {
  targets: [
    { src: 'package.json', dest: 'dist' },
    { src: 'dev/index.html', dest: 'dist' },
  ],
};


const config = {
  input: 'out-tsc/my-element.js',
  output: {
    file: 'dist/my-element.bundled.js',
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    summary(),
    // minify HTML and CSS markup
    minifyHTML(),
    // Copy Static assets
    copy(copyConfig),
    // A Rollup plugin which replaces targeted strings in files while bundling.
    replace({'Reflect.decorate': 'undefined'}),
    // Rollup plugin which locates third party modules in node_modules
    resolve(),
    // Rollup plugin to minify generated ES bundle.
    terser({
      module: true,  // true is set when format is esm or es  
      warnings: true,
      // mangle is renaming variable, class or func name to compress JavaScript 
      mangle: {
        properties: {
          // festlegen welche Klasse oder Func darf gemangelt werden 
          regex: /^__/,
        },
      },
    }),
    // A rollup plugin to show filesize in the cli
    filesize({
      showBrotliSize: true,
    }),
  ],
};

export default config;