import React, { PureComponent, useState,useReducer } from 'react';
import { Routes, Route } from "react-router-dom";
import {RouteWithSubRoutes} from './components/route'
import {routeList} from './router';
// import 'antd/dist/antd.min.css';
import {GlobalContext} from './reducers/globalContext';
import { Reducer, InitialState } from './reducers/reducers'

function App  () {
  
  const [global, dispatch] = useReducer(Reducer, InitialState);
  const api = {global, dispatch} ;
   return (
 
      <GlobalContext.Provider value={api}>
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
      
   )
   
   
}

export default App;
