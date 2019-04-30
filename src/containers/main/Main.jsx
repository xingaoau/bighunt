import React, { Component } from 'react'
import { Switch, Route} from 'react-router-dom'

import Boss from '../boss-info/Boss'
import God from '../god-info/God'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/bossinfo' component={Boss} />
                    <Route path='/godinfo' component={God} />
                </Switch>
            </div>
        )
    }
}