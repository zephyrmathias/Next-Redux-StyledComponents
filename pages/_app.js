import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import FontFaceObserver from 'fontfaceobserver';
import initializeStore from 'store/initializeStore';

const Fonts = async () => {
  const rotoboFont = document.createElement('link');
  rotoboFont.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900';
  rotoboFont.rel = 'stylesheet';
  document.head.appendChild(rotoboFont);
  const roboto = new FontFaceObserver('Roboto');

  const playfairDisplayFont = document.createElement('link');
  playfairDisplayFont.href = 'https://fonts.googleapis.com/css?family=Playfair+Display:300,400,500,700,900';
  playfairDisplayFont.rel = 'stylesheet';
  document.head.appendChild(playfairDisplayFont);
  const playfairDisplay = new FontFaceObserver('Playfair Display');

  await roboto.load();
  await playfairDisplay.load();
};

class CustomApp extends App {
  componentDidMount() {
    Fonts();
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(CustomApp);
