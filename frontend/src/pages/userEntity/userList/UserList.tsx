import { List, Datagrid, TextField, NumberField, DateField, SelectField } from 'react-admin';

export const UserList = () => {
    return (
        <List>
            <Datagrid rowClick="show">
                <TextField source="name" label="ФИО" />
                <DateField source="date" label="Дата рождения" />
                <NumberField source="age" label="Возраст" />
                <SelectField source="gender" label="Пол" choices={[
                    {id: 'male', name: 'М'},
                    {id: 'female', name: 'Ж'},
                ]} />
            </Datagrid>
        </List>
    );
};
