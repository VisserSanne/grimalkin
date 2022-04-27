import { Fragment } from 'react';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export function App() {
  return (
    <Fragment>
      <Global
        styles={css`
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

          * {
            box-sizing: border-box;
          }
        `}
      />
      <div>Hello World.</div>
    </Fragment>
  );
}

export default App;
