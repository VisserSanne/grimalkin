import { useQuery } from 'react-query';
import { APIFactory } from './APIFactory';

const API = APIFactory('/projects');

const getProjects = () => {
  return API()
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export function useProjects() {
  return useQuery('projects', getProjects);
}

const getProjectById = (projectId: string) => {
  return API(`/${projectId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useProject(projectId: string) {
  return useQuery(["project", projectId], () => getProjectById(projectId));
}

const getProjectsByCompanyId = (companyId: string) => {
  return API(`/company/${companyId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useProjectsByCompanyId(companyId: string) {
  return useQuery(
    ['company', companyId, 'projects'], 
    () => getProjectsByCompanyId(companyId), 
    {enabled: companyId.length > 0}
  );
}

const getTestAndResultsByRun = (projectId: string, runnumber: number) => {
  return API(`/${projectId}/run/${runnumber}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useTestAndResultsByRun(projectId: string, runnumber: number) {
  return useQuery(["project", projectId, "tests"], () => getTestAndResultsByRun(projectId, runnumber));
}
