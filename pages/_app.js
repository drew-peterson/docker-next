import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import withRedux from "next-redux-wrapper";
import reducers from "reducers";
import Head from "components/head";

// required for next and redux
export const initStore = (initialState = {}) => {
  return createStore(reducers, initialState);
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Head title="Home" />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initStore)(MyApp);
