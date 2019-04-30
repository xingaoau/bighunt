import React, { Component } from 'react'
import {
    NavBar, 
    WingBlank, 
    List, 
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'
import Logo from '@/components/logo/Logo'

import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/actions'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    handleRedirect = () => {
        this.props.history.replace('/register')
    }

    handleChange = (attr, val) => {
        this.setState({
            [attr]: val
        })
    }

    login = () => {
        // console.log(this.state)
        this.props.login(this.state)
    }

    render() {
        const { msg, redirectTo } = this.props.user
        if(redirectTo) {
            return <Redirect to ={redirectTo} />
        }

        return (
            <div>
                <NavBar>Wanted Hire</NavBar>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {msg?<div className='error-msg'>{msg}</div> : null}
                        <InputItem placeholder="Please enter user name" onChange={ val => {this.handleChange('username', val) }}>User Name: </InputItem>
                        <InputItem placeholder="Please enter password" type="password" onChange={ val => {this.handleChange('password', val) }}>Password: </InputItem>
                        <Button type="primary" onClick={ () => { this.login() } }>Log in</Button>
                        <Button onClick={ ()=>this.handleRedirect() }>Register</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {login}
)(Login)