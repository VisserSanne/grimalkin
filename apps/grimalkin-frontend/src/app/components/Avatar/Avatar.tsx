import { css } from '@emotion/react';

export const Avatar = ({ name }: { name: string }) => {
  const styles = css`
    background: rgba(255, 255, 255, 0.2);
    font-weight: 600;
    font-size: 0.9rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
  `;

  const formatName = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  return (
    <div className="Avatar" css={styles}>
      {formatName}
    </div>
  );
};
