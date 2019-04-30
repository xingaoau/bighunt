import ajax from './ajax'

export const reqRegister = (user) => ajax('http://localhost:4000/register', user, 'POST')

export const reqLogin = ({username, password}) => ajax('http://localhost:4000/login', {username, password}, 'POST')

export const reqUpdate = (user) => ajax('http://localhost:4000/update', user, 'POST')