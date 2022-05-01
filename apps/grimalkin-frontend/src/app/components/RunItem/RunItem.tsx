import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

interface RunItemProps {
  title?: string;
  runId: string;
  status: 'pass' | 'fail';
}

export const RunItem = ({ title, runId, status }: RunItemProps) => {
  const styles = css`
    background: white;
    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    color: inherit;
    text-decoration: none;

    &::before {
      background: ${status === 'pass' ? 'green' : 'red'};
      height: 56px;
      content: '';
      display: block;
      width: 8px;
    }

    .title {
      font-weight: 500;
    }

    .timestamp {
      margin-left: auto;
      margin-right: 24px;
      opacity: 0.5;
    }
  `;

  return (
    <Link to={runId} css={styles}>
      <div className="title">{title || runId}</div>
      <div className="timestamp">39 minutes ago</div>
    </Link>
  );
};
