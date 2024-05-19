import {
  Admin,
  Resource,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "../../api/dataProvider";
import UserIcon from '@mui/icons-material/Group';
import { Dashboard } from "./components/Dashboard/Dashboard";
import { UserList } from "./components/UserList/UserList";
import { authProvider } from "../../api/authProvider";
  
  export const AdminPage = () => (
    <Admin
    authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      <Resource
        name="users"
        list={UserList}
        show={ShowGuesser}
        icon={UserIcon}
        recordRepresentation="name"
      />
    </Admin>
  );
  