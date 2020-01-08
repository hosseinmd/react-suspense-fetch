# react-suspense-fetch

[![Build Status](https://travis-ci.com/dai-shi/react-suspense-fetch.svg?branch=master)](https://travis-ci.com/dai-shi/react-suspense-fetch)
[![npm version](https://badge.fury.io/js/react-suspense-fetch.svg)](https://badge.fury.io/js/react-suspense-fetch)
[![bundle size](https://badgen.net/bundlephobia/minzip/react-suspense-fetch)](https://bundlephobia.com/result?p=react-suspense-fetch)

A primitive library for React Suspense Render-as-You-Fetch

## Introduction

The new [Render-as-You-Fetch](https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense) pattern is mind-blowing.
So far, only Relay implemented that pattern for GraphQL.
This library aims at implementing that pattern for REST APIs.

This is a highly experimental project. Everything will change.

## Install

```bash
npm install react-suspense-fetch
```

## Usage

```javascript
import React, { Suspense, useState, useTransition } from 'react';
import ReactDOM from 'react-dom';

import { prefetch } from 'react-suspense-fetch';

const DisplayData = ({ result, refetch }) => {
  const [startTransition, isPending] = useTransition({
    timeoutMs: 1000,
  });
  const onClick = () => {
    startTransition(() => {
      refetch('2');
    });
  };
  return (
    <div>
      <div>First Name: {result.data.first_name}</div>
      <button type="button" onClick={onClick}>Refetch user 2</button>
      {isPending && 'Pending...'}
    </div>
  );
};

const fetchFunc = async userId => (await fetch(`https://reqres.in/api/users/${userId}?delay=3`)).json();
const initialResult = prefetch(fetchFunc, '1');

const Main = () => {
  const [result, setResult] = useState(initialResult);
  const refetch = (id) => {
    setResult(prefetch(fetchFunc, id));
  };
  return <DisplayData result={result} refetch={refetch} />;
};

const App = () => (
  <Suspense fallback={<span>Loading...</span>}>
    <Main />
  </Suspense>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### prepare

Create a new suspendable result from fetchFunc.
The result is mutable and can be run later just once.
It will suspend forever unless run() is called.

Type: Prepare

#### Parameters

- `fetchFunc` **FetchFunc&lt;Result, Input>** 
- `transformFunc` **TransformFunc&lt;Input, Source>?** 

#### Examples

```javascript
import { prepare } from 'react-suspense-fetch';

const fetchFunc = async userId => (await fetch(`https://reqres.in/api/users/${userId}?delay=3`)).json();
const result = prepare(fetchFunc);
```

### run

Run the prepared suspendable result.

#### Parameters

- `result` **Prepared&lt;Result, Input>** 
- `input` **Input** 

#### Examples

```javascript
import { prepare, run } from 'react-suspense-fetch';

const fetchFunc = async userId => (await fetch(`https://reqres.in/api/users/${userId}?delay=3`)).json();
const result = prepare(fetchFunc);
run(result, 1); // the result will be mutated.
```

### prefetch

Create a new suspendable result and run fetchFunc immediately.

Type: Prefetch

#### Parameters

- `fetchFunc` **FetchFunc&lt;Result, Input>** 
- `inputOrSource` **(Input | Source)** 
- `transformFunc` **TransformFunc&lt;Input, Source>?** 

#### Examples

```javascript
import { prefetch } from 'react-suspense-fetch';

const fetchFunc = async userId => (await fetch(`https://reqres.in/api/users/${userId}?delay=3`)).json();
const result = prefetch(fetchFunc, 1);
```

## Examples

The [examples](examples) folder contains working examples.
You can run one of them with

```bash
PORT=8080 npm run examples:01_minimal
```

and open <http://localhost:8080> in your web browser.

You can also try them in codesandbox.io:
[01](https://codesandbox.io/s/github/dai-shi/react-suspense-fetch/tree/master/examples/01_minimal)
[02](https://codesandbox.io/s/github/dai-shi/react-suspense-fetch/tree/master/examples/02_typescript)
[03](https://codesandbox.io/s/github/dai-shi/react-suspense-fetch/tree/master/examples/03_props)
[04](https://codesandbox.io/s/github/dai-shi/react-suspense-fetch/tree/master/examples/04_auth)
[05](https://codesandbox.io/s/github/dai-shi/react-suspense-fetch/tree/master/examples/05_todolist)
[06](https://codesandbox.io/s/github/dai-shi/react-suspense-fetch/tree/master/examples/06_reactlazy)
[07](https://codesandbox.io/s/github/dai-shi/react-suspense-fetch/tree/master/examples/07_wasm)

## Blogs

- [Diving Into React Suspense Render-as-You-Fetch for REST APIs](https://blog.axlight.com/posts/diving-into-react-suspense-render-as-you-fetch-for-rest-apis/)
