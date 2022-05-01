import { css } from '@emotion/react';
import { Header } from '../Header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const styles = css`
    height: 100vh;

    main {
      padding: 80px 24px;
      max-width: 1280px;
      margin: auto;
    }
  `;

  return (
    <div css={styles}>
      <Header />
      <main>{children}</main>
    </div>
  );
};
