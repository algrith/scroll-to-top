<!-- <a href="https://scroll-to-top.com" target="_blank" rel="noopener">
  <picture>
    <source media="(prefers-color-scheme: dark)" alt="React Scroll To Top" srcset="https://excalidraw.nyc3.cdn.digitaloceanspaces.com/github/excalidraw_github_cover_2_dark.png" />
    <img alt="Excalidraw" src="https://excalidraw.nyc3.cdn.digitaloceanspaces.com/github/excalidraw_github_cover_2.png" />
  </picture>
</a> -->

<h4 align="center">
  <a href="#">Algrith Scroll To Top</a>
</h4>

<div align="center">
  <h2>
    A lightweight utility function to smoothly scroll to the top of a web page, ideal for single-page applications or user-friendly navigation.
  </h2>
</div>

<br />
<p align="center">
  <a href="https://github.com/astongemmy/scroll-to-top/main/LICENSE">
    <img alt="Algrith Scroll To Top is released under the MIT license." src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@algrith/scroll-to-top">
    <img alt="npm downloads/month" src="https://img.shields.io/npm/dm/@algrith/scroll-to-top" />
  </a>
</p>

## Features

The Algrith Scroll To Top (npm package) supports:

- 🕹️&nbsp;Usage with built-in controller component.
- 🪝&nbsp;Direct usage with exposed hook method.
- 🪝🔍&nbsp;Usage with hook & ref/query selector.

## Quick start

**Note:** following instructions are for installing the Algrith Scroll To Top [npm package](https://www.npmjs.com/package/@algrith/scroll-to-top) when integrating Algrith Scroll To Top into your own app.

```
npm install @algrith/scroll-to-top
```

or via yarn

```
yarn add @algrith/scroll-to-top
```

## Usage & Examples

Currently, there is an implemented usage for all available methods for [NextJs (Using page router) example](https://github.com/algrith/scroll-to-top/tree/main/examples/with-nextjs).

### Usage with built-in controller component.

To use the built in controller, just import and use the controller component in your root layout/page component file.

```
import { ScrollToTopController } from '@algrith/scroll-to-top';

const ScrollToTopWithController = () => {
  return (
    <div>
      <h2>Using Controller Component (Check bottom-right corner)</h2>
      <ScrollToTopController />
    </div>
  );
};

export default ScrollToTopWithController;
```

If you wish to use the default styled controller, then you must also import the css files in your component file.
```
import '@algrith/scroll-to-top/dist/index.css';
```

### Direct usage with exposed hook method.

You could also attach the `scrollToTop` hook method to the `onClick` event handler of any desired element/component in your file and everything would work just the same.

**Note:** This doesn't require any extra config on the hook method or css import.

```
import { useScrollToTop } from '@algrith/scroll-to-top';

const ScrollToTopWithHook = () => {
  const scrollToTop = useScrollToTop();
  
  return (
    <div>
      <h1>Using Exported Method</h1>
      <button onClick={scrollToTop} type="button">Scroll to Top</button>
    </div>
  );
};

export default ScrollToTopWithHook;
```

### Usage with hook & ref/query selector.

You could also decide to use a custom component/element with `ref` or query selector. The choice is yours.

####  With ref

```
import { useScrollToTop } from '@algrith/scroll-to-top';
import { useRef } from 'react';

const ScrollToTopWithHookAndRef = () => {
  const controllerRef = useRef(null);
  useScrollToTop({ controllerRef });
  
  return (
    <div>
      <h1>Using Hook and Ref</h1>
      <button ref={controllerRef} type="button">Scroll to Top</button>
    </div>
  );
};

export default ScrollToTopWithHookAndRef;
```

####  With query selector
```

import { useScrollToTop } from '@algrith/scroll-to-top';

const ScrollToTopWithHookAndSelector = () => {
  useScrollToTop({ selector: `#scroll-to-top` });
  
  return (
    <div>
      <h1>Using Hook and Selector</h1>
      <button id="scroll-to-top" type="button">Scroll to Top</button>
    </div>
  );
};

export default ScrollToTopWithHookAndSelector;
```

## Contributing

- Missing something or found a bug? [Report here](https://github.com/algrith/scroll-to-top/issues).