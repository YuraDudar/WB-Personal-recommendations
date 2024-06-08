import { fetchUtils, DataProvider, Identifier, GetManyReferenceParams, GetManyReferenceResult, RaRecord, CreateParams, CreateResult, DeleteWithUndoButton } from 'react-admin';
import { createUser, fetchUserById, fetchUsers, updateUserById } from '../entities/user/api';
import { Sex, User } from '../shared/types/apiTypes';

const dataProvider: DataProvider = {
    // @ts-ignore
    getList: async (resource, params) => {
        let users = await fetchUsers(Array.from({length: 10}, (_) => (['female', 'male'] as Sex[])[Math.round(Math.random())]));
        users = users.map((user, i) => ({
            ...user,
            ...user.dob,
            // @ts-ignore
            name: user.name.title ? `${user.name.title || ''} ${user.name.first || ''} ${user.name.last || ''}`: user.name,
            id: i
        }));
        console.log(users)
        localStorage.setItem('users', JSON.stringify(users))
        return ({
            data: users,
            total: users.length,
        });
    },
    // @ts-ignore
    getOne: async (resource, {id}) => {
        const data = await fetchUserById(id)
        return {
            data,
        };
    },

    update: async (resource, params) => {
        const response = await updateUserById(params);
        return {
            data: JSON.parse(localStorage.getItem('users') || 'users')
        }
    },

    create: async (
        resource: string,
        params: CreateParams
    ): Promise<CreateResult> => {
        if (params.data.datetime instanceof Date) {
            params.data.datetime = params.data.datetime.toISOString();
        }

        if (typeof params.data.datetime === 'string') {
            params.data.datetime = params.data.datetime.replace('Z', '');
        }

        const response = await createUser(params.data)

        return { data: { ...response } };
    },

    // @ts-ignore
    delete: (resource, params) => {
        let users = JSON.parse(localStorage.getItem('users') || 'users')
        // @ts-ignore
        users = users.filter(obj => obj.id !== params.id)
        localStorage.setItem('users', JSON.stringify(users))

        return {data: users}
    },
    
    getManyReference: function <RecordType extends RaRecord<Identifier> = any>(resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult<RecordType>> {
        throw new Error('Function not implemented.');
    }
};


export default dataProvider;