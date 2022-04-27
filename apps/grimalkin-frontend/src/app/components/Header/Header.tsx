import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const styles = css`
    background: #121212;
    color: #fff;

    display: flex;
    align-items: center;
    padding: 24px;
    gap: 40px;

    .wordmark {
      font-size: 2.2rem;
      letter-spacing: -0.08rem;
    }

    nav ul {
      display: flex;
      align-items: center;
      gap: 24px;

      a {
        color: inherit;
      }
    }
  `;

  return (
    <header css={styles}>
      <div className="logo">
        <div className="icon"></div>
        <div className="wordmark t0 chonk">Grimalkin.</div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/runs">Runs</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
