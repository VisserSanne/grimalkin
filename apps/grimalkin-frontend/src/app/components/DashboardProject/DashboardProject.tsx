import { ProjectModel } from '@grimalkin/contracts'

export const DashboardProject = ({ project }: { project: ProjectModel }) => {
  const { name } = project;
  return (
    <div>
      <h1>Project: {name}</h1>
    </div>
  )
}
