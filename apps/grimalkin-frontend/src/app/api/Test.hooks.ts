import { useQuery } from 'react-query';
import { APIFactory } from './APIFactory';

const API = APIFactory('/tests');

const getTests = () => {
  return API()
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export function useTests() {
  return useQuery('tests', getTests);
}

const getTestById = (testId: string) => {
  return API(`/${testId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useTest(testId: string) {
  return useQuery(["test", testId], () => getTestById(testId));
}

const getTestResultByTestId = (testId: string) => {
  return API(`/${testId}/testresults`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useTestResultsByTestId(testId: string) {
  return useQuery(["test", testId, "testresults"], () => getTestResultByTestId(testId));
}

const getTestsByProjectId = (projectId: string) => {
  return API(`/project/${projectId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useTestsByProjectId(projectId: string) {
  return useQuery(["project", projectId, "tests"], () => getTestsByProjectId(projectId));
}
