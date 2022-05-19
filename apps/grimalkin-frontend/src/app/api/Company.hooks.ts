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

const getUsersByCompanyId = (companyId: string) => {
  return API(`/${companyId}/users`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useUsersByCompanyId(companyId: string) {
  return useQuery(["company", companyId, "users"], () => getUsersByCompanyId(companyId));
}

const getCompanyByUserId = (userId: string) => {
  return API(`/user/${userId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useCompanyByUserId(userId: string) {
  return useQuery(["user", userId, "company"], () => getCompanyByUserId(userId));
}
