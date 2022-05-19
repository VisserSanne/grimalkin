import { useQuery } from 'react-query';
import { APIFactory } from './APIFactory';

const API = APIFactory('/users');

const getUsers = () => {
  return API()
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export function useUsers() {
  return useQuery('users', getUsers);
}

const getUserById = (userId: string) => {
  return API(`/${userId}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function useUser(userId: string) {
  return useQuery(["user", userId], () => getUserById(userId));
}
