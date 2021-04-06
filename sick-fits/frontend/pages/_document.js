import Document, { HTML, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleTags();
    return { page, ...styleTags };
  }

  render() {
    return (
      <HTML lang="en-gb">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </HTML>
    );
  }
}
