import { useMediaQuery } from '@mui/material';
import { List, SimpleList, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = () => {
    const isSmall = useMediaQuery<any>(theme => theme.breakpoints.down('sm'));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.username}
                    tertiaryText={record => record.email}
                />
            ) : (
                <Datagrid rowClick="show">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    <TextField source="company.name" />
                </Datagrid>
            )}
        </List>
    );
};
