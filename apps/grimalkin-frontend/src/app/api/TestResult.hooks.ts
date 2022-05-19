import { useQuery } from 'react-query';
import { APIFactory } from './APIFactory';

const API = APIFactory('/testresults');

const getTestResults = () => {
  return API()
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export function useTestResults() {
  return useQuery('testresults', getTestResults);
}

const getTestResultById = (testresultId: string) => {
  return API(`/${testresultId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useTestResult(testresultId: string) {
  return useQuery(["testresult", testresultId], () => getTestResultById(testresultId));
}
