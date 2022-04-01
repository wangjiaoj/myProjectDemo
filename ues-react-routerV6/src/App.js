import React, { PureComponent, useState,useReducer } from 'react';
import { Routes, Route } from "react-router-dom"
import {RouteWithSubRoutes} from './components/route'
import {routeList} from './router';
import 'antd/dist/antd.css';
import { Reducer, InitialState } from './reducers/reducers'
import './mock/list'
// function RenderRoutes() {
//   const element = useRoutes(routes)
//   return element;
// }
function App  () {
  
   const [global, dispatch] = useReducer(Reducer, InitialState);
   const DispatchContext = React.createContext(null);
   const GlobalContext = React.createContext(null);
    return (
      <DispatchContext.Provider value={{dispatch}}>
          <GlobalContext.Provider value={{global}}>
        <div>
            <Routes>
            {routeList.map((route, i) => {
              return RouteWithSubRoutes(route, i)
            })}
          
              {/* <Route path="/login" element={<Login />}></Route>
              <Route path="/home/*" element={<Home />} ></Route> */}
            </Routes>
        </div>
        </GlobalContext.Provider>
      </DispatchContext.Provider>
    )
    
    
}
export default App;