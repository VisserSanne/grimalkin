import { css } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';

import { RunDetail } from './RunDetail';
import { RunOverview } from './RunOverview';

export const Runs = () => {
  const styles = css`
    // background: orange;
  `;

  return (
    <div css={styles}>
      <Routes>
        <Route path=":runId" element={<RunDetail />} />
        <Route path="/" element={<RunOverview />} />
      </Routes>
    </div>
  );
};
