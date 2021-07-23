import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Lpar from './lpar'
import LparAdd from './lparadd'
import LparUpdate from './lparupdate'





/*
lpar路由
 */
export default class LparRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/resource/lparrouter' component={Lpar} exact/> {/*路径完全匹配*/}
        <Route path='/resource/lparrouter/add' component={LparAdd}/>
        <Route path='/resource/lparrouter/update' component={LparUpdate}/>
        <Redirect to='/resource/lparrouter'/>
      </Switch>
    )
  }
}