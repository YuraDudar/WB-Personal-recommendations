import { Edit, EditProps } from 'react-admin';
import UserForm from '../UserForm';

export const UserEdit = (props: EditProps) => (
  <Edit {...props} >
    <UserForm />
  </Edit>
);