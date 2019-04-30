import React, { Component } from 'react'
import { List, Grid } from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelector extends Component {

    static propTypes = {
        setHeader: PropTypes.func.isRequired
    }

    state = {
        icon: null
    }

    constructor(props) {
        super(props)
        this.headerList = []
        for (let i=0; i<8; i++) {
            this.headerList.push({
                text: 'avatar'+(i+1),
                icon: require('@/assets/images/avatar'+(i+1)+'.png')
            })
        }
    }

    handleClick = ({text, icon}) => {
        this.setState({
            icon
        })
        this.props.setHeader(text)
    }

    render() {
        const listHeader = !this.state.icon ? 'please select avatar' : (
            <div>
                avatar: <img style={{width: '10%'}} src={this.state.icon} />
            </div>
        )
        return (
            <List renderHeader={() => listHeader}>
                <Grid data={this.headerList} columnNum={4} onClick={this.handleClick}/>
            </List>
        )
    }
}