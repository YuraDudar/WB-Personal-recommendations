import Dashboard from './components/Dashboard';
import dataProvider from '../../api/dataProvider';
import theme from './styles';
import UserIcon from '@mui/icons-material/Group';
import { authProvider } from '../../api/authProvider';
import { UserCreate, UserEdit, UserList } from '../userEntity';
import {
  Admin,
  Resource,
} from "react-admin";
  
  export const AdminPage = () => (
    <Admin
      theme={theme}
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        icon={UserIcon}
      />
      <Resource
        name="recomendations"
        list={UserList}
        icon={UserIcon}
      />
    </Admin>
  );
  