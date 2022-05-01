import { css } from '@emotion/react';
import { Link, useParams } from 'react-router-dom';
import { RunItem } from '../../../components';

export const RunDetail = () => {
  const styles = css`
    // background: green;

    h2 {
      a {
        color: inherit;
      }
    }

    .items {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  `;

  const { runId } = useParams();

  return (
    <div css={styles}>
      <h2 className="t0 chonk">
        <Link to="../">Runs</Link> / #{runId}
      </h2>
      <div className="items">
        <RunItem
          title="Venue Overview > when I load the page > it renders correctly"
          runId="12344"
          status="pass"
        />
        <RunItem
          title="Venue Overview > when I load the page > it renders correctly"
          runId="12344"
          status="pass"
        />
        <RunItem
          title="Venue Overview > when I load the page > it renders correctly"
          runId="12344"
          status="pass"
        />
        <RunItem
          title="Venue Overview > when I load the page > it renders correctly"
          runId="12344"
          status="pass"
        />
        <RunItem
          title="Venue Overview > when I load the page > it renders correctly"
          runId="12344"
          status="pass"
        />
        <RunItem
          title="Venue Overview > when I load the page > it renders correctly"
          runId="12344"
          status="pass"
        />
      </div>
    </div>
  );
};
