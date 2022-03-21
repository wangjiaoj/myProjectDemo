import React, { PureComponent, useState } from 'react';
import { Routes, Route } from "react-router-dom"


import {RouteWithSubRoutes} from './components/route'
import routeList from './router';
import 'antd/dist/antd.css';
// function RenderRoutes() {
//   const element = useRoutes(routes)
//   return element;
// }
function App  () {
    return (
        <div id="APP">
            <Routes>
            {routeList.map((route, i) => {
              return RouteWithSubRoutes(route, i)
            })}
          
              {/* <Route path="/login" element={<Login />}></Route>
              <Route path="/home/*" element={<Home />} ></Route> */}
            </Routes>
        </div>
    )
    
    
}
export default App;