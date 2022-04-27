import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

import { Avatar } from '../Avatar';

export const Header = () => {
  const styles = css`
    background: #121212;
    color: #fff;

    display: flex;
    align-items: center;
    padding: 24px;
    gap: 40px;

    .wordmark {
      font-size: 24px;
      letter-spacing: -0.08rem;
      color: inherit;
      text-decoration: none;
    }

    nav ul {
      display: flex;
      align-items: center;
      gap: 24px;

      a {
        color: inherit;
        text-decoration: none;
        font-weight: 600;
        padding-bottom: 4px;
        opacity: 0.8;

        &:hover {
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        &.active {
          border-bottom: 1px solid rgba(255, 255, 255, 1);
          opacity: 1;
        }
      }
    }

    .Avatar {
      margin-left: auto;
    }
  `;

  return (
    <header css={styles}>
      <div className="logo">
        <NavLink to="/" className="wordmark t0 chonk">
          Grimalkin.
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/runs">Runs</NavLink>
          </li>
        </ul>
      </nav>
      <Avatar name="Jack-Edward Oliver" />
    </header>
  );
};
