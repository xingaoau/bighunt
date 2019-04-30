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

import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/actions'

import Logo from '@/components/logo/Logo'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            password2: '',
            type: 'Boss'
        }
    }

    register = () => {
        // console.log(this.state)
        this.props.register(this.state)
    }

    handleChange = (attr, val) => {
        this.setState({
            [attr]: val
        })
    }

    handleRedirect = () => {
        this.props.history.replace('/login')
    }

    render() {
        const { type } = this.state
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
                        <InputItem onChange={ val => { this.handleChange('username', val) }}  placeholder="Please enter user name">User Name: </InputItem>           
                        <InputItem type="password" onChange={ val => { this.handleChange('password', val) }} placeholder="Please enter password">Password: </InputItem>
                        <InputItem type="password" onChange={ val => { this.handleChange('password2', val) }} placeholder="Please enter confirm password">Confirm: </InputItem>
                        <List.Item>
                            <span>User Type: </span>
                            &nbsp;&nbsp;&nbsp;
                            <Radio checked={ type==='God' } onChange={ () => { this.handleChange('type', 'God') }}>God</Radio>
                            &nbsp;&nbsp;&nbsp;
                            <Radio checked={ type==='Boss' } onChange={ () => { this.handleChange('type', 'Boss') }}>Boss</Radio>
                        </List.Item>
                        <Button type="primary" onClick={ ()=>this.register() }>Register</Button>
                        <Button onClick={ () => { this.handleRedirect() } }>Log in</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {register}
)(Register)