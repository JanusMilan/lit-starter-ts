# Ausgang
1. Starter hat keine Bundling und keine Minification
2. Input ist 

# Rollup
Lit recommend Rollup because it's designed to work with the standard ES module format

# Behandeln der "bare module specifiers" mit "@rollup/plugin-node-resolve"
LitElement uses bare module specifiers to import modules from the lit-html library, like this: 
- import {html} from 'lit-html';

Browsers currently only support loading modules from URLs or relative paths, not bare names referring to e.g. an npm package, so the build system needs to handle them: either by transforming the specifier to one that works for ES modules in the browser, or by producing a different type of module as output.

1. "@rollup/plugin-node-resolve"
Webpack automatically handles bare module specifiers; for Rollup, you'll need a plugin "@rollup/plugin-node-resolve". Rollup plugin which locates modules using the Node resolution algorithm, for using third party modules in node_modules

# minify JavaScript mit "rollup-plugin-terser" 
Rollup plugin which minify JavaScript. This isn't strictly required, but if you're bundling for production, you probably want to minify JavaScript.

# replaces targeted strings in files while bundling mit "@rollup/plugin-replace"
A Rollup plugin which replaces targeted strings in files while bundling

# "rollup-plugin-filesize"
OPTIONAL: A rollup plugin to show filesize in the cli

# "rollup-plugin-copy"
For copying static assets to the build folder

# "rollup-plugin-minify-html-literals"
Uses minify-html-literals to minify HTML and CSS markup inside JavaScript template literal strings

# rollup-plugin-summary
rollup plugin that summarizes the output of the build

# build-requirements
0. https://lit.dev/docs/v1/tools/build/#build-requirements
1. LitElement is packaged as a set of ES modules, written in modern JavaScript (ES 2017). 
2. LitElement uses bare module specifiers, which are not supported by any browsers yet.
3. LitElement npm package doesn't include an ES5 build 
4. We recommend configuring TypeScript to output modern JavaScript 
   - ES2017 target and ES modules

# Rollup Config Beispiele
1. https://github.com/Polymer/shop/blob/rollup-examples-v2/rollup-modern.js
2. https://github.com/Polymer/shop/blob/rollup-examples-v2/rollup-modnomod.js
3. https://github.com/Polymer/shop/blob/rollup-examples-v2/rollup-universal.js

# modern browser build 
1. https://lit.dev/docs/tools/production/#modern-only-build

# modern-+-legacy-build
https://lit.dev/docs/tools/production/#modern-+-legacy-build
- polyfills-loader für Alte Browser
- babel für Alte Browser

# universal build
https://lit.dev/docs/v1/tools/build/#universal-build
- universal build is compiled to ES5 for older browsers 

# Quellen
1. https://lit.dev/docs/v1/tools/build/
2. https://lit.dev/docs/tools/production/
3. https://lit.dev/docs/v1/getting-started/