import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Disktype from './disktype'
import DisktypeAdd from './disktypeadd'
import DisktypeUpdate from './disktypeupdate'

/*
Disktype路由
 */
export default class DisktypeRouter extends Component {
    render() {
        return(
            <Switch>
                <Route path='/storage/disktyperouter' component={Disktype} exact/> {/*路径完全匹配*/}
                <Route path='/storage/disktyperouter/add' component={DisktypeAdd}/>
                <Route path='/storage/disktyperouter/update' component={DisktypeUpdate}/>
                <Redirect to='/storage/disktyperouter'/>
            </Switch>
        )

        
    }

}