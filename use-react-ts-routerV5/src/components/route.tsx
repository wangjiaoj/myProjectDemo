import React from 'react';
import {
  Route
} from 'react-router-dom';
interface routerType{
  path:string,
  element:React.FC 
}

const RouteWithSubRoutes = (route:any, index:number) => {
  return (   
    <Route
      key={index}
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}



export {
  RouteWithSubRoutes
}