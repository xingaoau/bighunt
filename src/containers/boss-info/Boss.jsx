import React, { Component } from 'react'
import { connect }from 'react-redux'

import {
    NavBar,
    InputItem,
    TextareaItem,
    Button
} from 'antd-mobile'
import HeaderSelector from '@/components/header-selector/HeaderSelector'

class Boss extends Component {

    state = {
        header: '',
        post: '',
        info: '',
        company: '',
        salary: ''
    }

    handleChange = (attr, val) => {
        this.setState({
            [attr]: val
        })
    }

    save = () => {
        console.log(this.state)
    }

    setHeader = (header) => {
        this.setState({
            header
        })
    }

    render() {
        return (
            <div>
                <NavBar>Boss Info</NavBar>
                <HeaderSelector setHeader={this.setHeader}/>
                <InputItem placeholder="position" onChange={val => {this.handleChange('post', val)}}>Hiring Position: </InputItem>
                <InputItem placeholder="company" onChange={val => {this.handleChange('company', val)}}>Company: </InputItem>
                <InputItem placeholder="salary" onChange={val => {this.handleChange('salary', val)}}>Salary: </InputItem>
                <TextareaItem title="position" rows={3} onChange={val => {this.handleChange('info', val)}}/>
                <Button type="primary" onClick={this.save}>Save</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Boss)