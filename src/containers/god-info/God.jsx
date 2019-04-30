import React, { Component } from 'react'
import { connect }from 'react-redux'

import {
    NavBar,
    InputItem,
    TextareaItem,
    Button
} from 'antd-mobile'
import HeaderSelector from '@/components/header-selector/HeaderSelector'

class God extends Component {
    render() {
        return (
            <div>
                <NavBar>Boss Info</NavBar>
                <HeaderSelector />
                <InputItem placeholder="position">ApplyPosition: </InputItem>
                <TextareaItem title="Profile" rows={3} />
                <Button type="primary">Save</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(God)