import { useQuery } from 'react-query';
import { APIFactory } from './APIFactory';

const API = APIFactory('/companies');

const getCompanies = () => {
  return API()
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export function useCompanies() {
  return useQuery('companies', getCompanies);
}

const getCompanyById = (companyId: string) => {
  return API(`/${companyId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useCompany(companyId: string) {
  return useQuery(["company", companyId], () => getCompanyById(companyId));
}
