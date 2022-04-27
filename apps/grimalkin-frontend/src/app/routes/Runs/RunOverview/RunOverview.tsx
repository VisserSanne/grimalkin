import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { RunItem } from '../../../components/';

export const RunOverview = () => {
  const styles = css`
    // background: red;

    .items {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  `;

  return (
    <div css={styles}>
      <h2 className="t0 chonk">Runs</h2>
      <div className="items">
        <RunItem runId="123456" status="pass" />
        <RunItem runId="123455" status="fail" />
        <RunItem runId="123454" status="pass" />
        <RunItem runId="123453" status="pass" />
        <RunItem runId="123452" status="pass" />
      </div>
    </div>
  );
};
