import {
    AUTH_SUCCESS,
    ERROR_MSG
} from './action-types'
import {
    reqRegister,
    reqLogin,
    reqUpdate
} from '../api'

const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})

export const register = (user) => {
    const {username, password, password2, type} = user

    if(!username) {
        return errorMsg('username empty')
    }
    if(password !== password2) {
        return errorMsg('password matching')
    }

    return async dispatch => {
        const response = await reqRegister({username, password, type})
        const result = response.data
        // console.log(result)
        if(result.code === 0) {
            // console.log('here')
            dispatch(authSuccess(result.data))
        } else {
            dispatch(errorMsg(result.msg))
        }
    }
}

export const login = (user) => {
    const { username, password } = user
    if(!username) {
        return errorMsg('username empty')
    }
    if(!password) {
        return errorMsg('password empty')
    }

    return async dispatch => {
        const response = await reqLogin(user)
        const result = response.data
        if(result.code === 0) {
            dispatch(authSuccess(result.data))
        } else {
            dispatch(errorMsg(result.msg))
        }
    }
}