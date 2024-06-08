import { Sex, User } from "../../shared/types/apiTypes"

type TFetchUsers = (genderData: Sex[]) => Promise<User[]>
export const fetchUsers: TFetchUsers = async (genderData) => {
    if (JSON.parse(localStorage.getItem('users') || 'users').length > 0) {
        // @ts-ignore
        return JSON.parse(localStorage.getItem('users') || 'users').filter(obj => Boolean(obj))
    }

    const responseArr = await Promise.all(genderData.map(sex =>
        fetch(`https://randomuser.me/api/?gender=${sex}&inc=name,dob&results=1`)
    ))
    return Promise.all(responseArr.map((response, i) => response.json().then(res => ({...res.results[0], gender: genderData[i]}))))
}

type TFetchUserById = (uid: number | string) => Promise<User>
export const fetchUserById: TFetchUserById = async (uid) => {
    console.log(JSON.parse(localStorage.getItem('users') || 'users'))
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem('users') || 'users').find(obj => obj.id === uid) || '';
    return Promise.resolve(user)
}

type TUpdateUserById = (params: any) => Promise<'ok'>
export const updateUserById: TUpdateUserById = (params) => {
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem('users') || 'users').find(obj => obj.id === params.id) || '';
    let users = JSON.parse(localStorage.getItem('users') || 'users')
    // @ts-ignore
    users[users.findIndex(obj => obj.id === params.id)] =
    // @ts-ignore
        Object.fromEntries(Object.entries(params).map(param => user[param[0]] = param[1]));
    localStorage.setItem('users', JSON.stringify(users))
    return Promise.resolve('ok')
}

export const createUser = (params: any) => {
    // @ts-ignore
    let users = JSON.parse(localStorage.getItem('users'))
    users[params.id] = {...params}

    localStorage.setItem('users', JSON.stringify(users))
    return Promise.resolve(({...params}))
}
