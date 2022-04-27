import { Fragment } from 'react';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { Breadcrumbs, Anchor } from '@mantine/core';

import { Header } from './components';

const ITEMS = [
  {
    title: 'Add Venue',
    href: '#',
  },
  {
    title: 'Renders the form',
    href: '#',
  },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

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
            background: #eee;
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

          .main {
            padding: 24px;

            ul {
              display: flex;
              flex-direction: column;
              gap: 16px;

              li {
                background: #fff;
                padding: 24px;
                box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
              }
            }
          }
        `}
      />
      <Header />
      <div className="main">
        <ul>
          <li>
            <Breadcrumbs separator="→">{ITEMS}</Breadcrumbs>
          </li>
          <li>
            <Breadcrumbs separator="→">{ITEMS}</Breadcrumbs>
          </li>
          <li>
            <Breadcrumbs separator="→">{ITEMS}</Breadcrumbs>
          </li>
          <li>
            <Breadcrumbs separator="→">{ITEMS}</Breadcrumbs>
          </li>
          <li>
            <Breadcrumbs separator="→">{ITEMS}</Breadcrumbs>
          </li>
          <li>
            <Breadcrumbs separator="→">{ITEMS}</Breadcrumbs>
          </li>
          <li>
            <Breadcrumbs separator="→">{ITEMS}</Breadcrumbs>
          </li>
          <li>
            <Breadcrumbs separator="→">{ITEMS}</Breadcrumbs>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default App;
