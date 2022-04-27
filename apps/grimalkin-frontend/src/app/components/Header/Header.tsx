import { css } from '@emotion/react';

export const Header = () => {
  const styles = css`
    background: #121212;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;

    .wordmark {
      font-size: 2.2rem;
      letter-spacing: -0.08rem;
    }
  `;

  return (
    <header css={styles}>
      <div className="logo">
        <div className="icon"></div>
        <div className="wordmark t0 chonk">Grimalkin.</div>
      </div>
    </header>
  );
};
