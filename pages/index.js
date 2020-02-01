import React from "react";
import Counter from "../src/components/Counter";
import Head from 'next/head';
import { increment } from "../src/actions/counterActions";

function index() {
  return (
      <div>
        <Head>
            <link href="../static/index.css" rel="stylesheet" />
        </Head>
        <Counter />
      </div>
  );
}

index.getInitialProps = ({ reduxStore }) => {
  reduxStore.dispatch(increment()); // action will dispatched on page load

  const state = reduxStore.getState(); // returns redux store
  console.log(state);

  return {};
};

export default index;
