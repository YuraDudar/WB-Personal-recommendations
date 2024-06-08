import { SimpleForm, TextInput, DateTimeInput, NumberInput, SelectInput } from "react-admin";

const UserForm = () => {
    return (
        <SimpleForm>
            <NumberInput source="id" label="ID" />
            <TextInput source="name" label="Имя" />
            <DateTimeInput source="date" label="Дата рождения" />
            <NumberInput source="age" label="Возраст" />
            <SelectInput source="gender" label="Пол" choices={[
                {id: 'male', name: 'М'},
                {id: 'female', name: 'Ж'},
            ]} />
        </SimpleForm>
    )
};

export default UserForm;
