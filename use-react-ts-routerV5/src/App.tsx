import React, {  useState,useReducer } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import {RouteWithSubRoutes} from './components/route'
import routeList from './router';
import { RouteInterface } from './types/route';
import 'antd/dist/antd.css';
import { Reducer, InitialState } from './reducers/reducers'
import './mock/list'
import { Dispatch, Global } from '@/components/context';
const App: React.FC = ()=> {
  
   const [global, dispatch] = useReducer(Reducer, InitialState);
 
    return (
      <Dispatch.Provider value={{dispatch}}>
          <Global.Provider value={{global}}>
          <Router>
            <Switch>
            {routeList.map((route:RouteInterface, i:number) => {
              return RouteWithSubRoutes(route, i)
            })}
           
            </Switch>
            </Router>
        </Global.Provider>
      </Dispatch.Provider>
    )
    
    
}
export default App;