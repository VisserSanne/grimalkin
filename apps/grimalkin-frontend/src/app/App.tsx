import { Fragment } from 'react';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { Header } from './components';

export function App() {
  return (
    <Fragment>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@400;700&display=swap');

          ${emotionReset}
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          .t0 {
            font-family: 'Averia Serif Libre', serif;
          }

          .chonk {
            font-weight: 700;
          }

          .megachonk {
            font-weight: 900;
          }

          * {
            box-sizing: border-box;
          }
        `}
      />
      <Header />
      <div>Hello World.</div>
    </Fragment>
  );
}

export default App;
