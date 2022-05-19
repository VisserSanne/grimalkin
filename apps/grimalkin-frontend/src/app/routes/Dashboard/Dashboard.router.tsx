import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { DashboardOverview } from './DashboardOverview';

export const Dashboard = () => {
  const styles = css`
    // background: fuchsia;
  `;

  return (
    <div css={styles}>
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
      </Routes>
    </div>
  )
};
