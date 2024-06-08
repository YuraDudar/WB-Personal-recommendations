import { Create, CreateProps } from 'react-admin';
import UserForm from '../UserForm';

export const UserCreate = (props: CreateProps) => (
  <Create {...props}>
    <UserForm />
  </Create>
);

// export type Sex = 'male' | 'female'
// export type Fullname = {
//     title: string
//     first: string
//     last: string
// }
// export type Birthday = {
//     date: string
//     age: number
// }
// export interface User {
//     gender: Sex
//     name: Fullname
//     dob: Birthday
// }