export type Sex = 'male' | 'female'
export type Fullname = {
    title: string
    first: string
    last: string
}
export type Birthday = {
    date: string
    age: number
}
export interface User {
    gender: Sex
    name: Fullname | string
    dob: Birthday
    age?: number
    date?: string
}

