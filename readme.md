# webextension-polyfill-global [![npm version](https://img.shields.io/npm/v/webextension-polyfill-global.svg)](https://www.npmjs.com/package/webextension-polyfill-global)

> Wrapper around Mozilla’s webextension-polyfill to make it available as a global variable even with a bundler

Mozilla’s `webextension-polyfill` [makes it difficult](https://github.com/mozilla/webextension-polyfill/issues/350) to be imported as an actual polyfill, so you can import this package as a minimal wrapper to make it available as a global.

## Install

```sh
npm install webextension-polyfill-global
```

or if you're a TypeScript user:

```sh
npm install webextension-polyfill-global
npm install @types/webextension-polyfill -D
```

## Usage

Just this. Types will also be available globally.

```js
import 'webextension-polyfill-global';
```

## Related

* [`mozilla/webextension-polyfill`](https://github.com/mozilla/webextension-polyfill): A "polyfill" that doesn't act as a polyfill.
* [`webext-dynamic-content-scripts`](https://github.com/fregante/webext-dynamic-content-scripts): Automatically inject your `content_scripts` on custom domains.
* [`webext-content-script-ping`](https://github.com/fregante/webext-content-script-ping): One-file interface to detect whether your content scripts have loaded.
* [`webext-options-sync`](https://github.com/fregante/webext-options-sync): Helps you manage and autosave your extension's options.
* [`Awesome WebExtensions`](https://github.com/fregante/Awesome-WebExtensions): A curated list of awesome resources for Web Extensions development.

## License

MPL-2.0 © [Federico Brigante](https://fregante.com)
