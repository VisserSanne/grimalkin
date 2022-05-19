import { css } from '@emotion/react';
import { CompanyModel, ProjectModel } from '@grimalkin/contracts';
import { Button, Group } from '@mantine/core';
import { useState } from 'react';
import { useCompanies } from '../../../api/Company.hooks';
import { useProjectsByCompanyId } from '../../../api/Project.hooks';
import { DashboardProject } from '../../../components/DashboardProject';

const styles = css`
  .title {
    margin: 10px;
  }
`

export const DashboardOverview = () => {
  const [selectedCompany, setSelectedCompany] = useState('');

  const getCompanies = useCompanies();
  const companies: CompanyModel[] = getCompanies.data;

  const query = useProjectsByCompanyId(selectedCompany);
  const data: ProjectModel[] = query.data;

  return (
    <div css={styles}>
      <h1 className='title'>Dashboard </h1>
      {getCompanies.isLoading
        ? <h1>Companies are loading</h1>
        : <div>
          <p>Select a company</p>
          <Group>
            {companies.map(company => <Button variant={selectedCompany === company.id ? 'outline' : 'filled'} onClick={() => setSelectedCompany(company.id)}>{company.name}</Button>)}
          </Group>
        </div>
      }
      {selectedCompany !== '' && query.isLoading
        ? <h1>Loading</h1>
        : data.map(project =>
          <DashboardProject key={project.id} project={project} />
        )
      }
    </div>
  )
}
