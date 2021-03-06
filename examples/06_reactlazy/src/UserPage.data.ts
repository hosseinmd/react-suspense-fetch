import { prefetch } from 'react-suspense-fetch';

export type UserData = {
  data: {
    id: number;
    first_name: string;
  };
};

const fetchFunc = async (userId: string) => (await fetch(`https://reqres.in/api/users/${userId}?delay=3`)).json();

export const fetchUserData = (userId: string) => prefetch(fetchFunc, userId);
