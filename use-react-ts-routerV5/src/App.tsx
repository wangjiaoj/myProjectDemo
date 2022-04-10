import React, { PureComponent, useState,useReducer } from 'react';
import { Switch, Route } from "react-router-dom"
import {RouteWithSubRoutes} from './components/route'
import routeList from './router';
import { RouteInterface } from './types/route';
import 'antd/dist/antd.css';
import { Reducer, InitialState } from './reducers/reducers'
import './mock/list'
 
const App: React.FC = ()=> {
  
   const [global, dispatch] = useReducer(Reducer, InitialState);
   const DispatchContext = React.createContext(null);
   const GlobalContext = React.createContext(null);
    return (
      <DispatchContext.Provider value={{dispatch}}>
          <GlobalContext.Provider value={{global}}>
        <div>
            <Switch>
            {routeList.map((route:RouteInterface, i:number) => {
              return RouteWithSubRoutes(route, i)
            })}
           
            </Switch>
        </div>
        </GlobalContext.Provider>
      </DispatchContext.Provider>
    )
    
    
}
export default App;