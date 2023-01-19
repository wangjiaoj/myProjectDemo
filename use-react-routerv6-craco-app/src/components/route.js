import React from 'react';
import {
  Route
} from 'react-router-dom';
 

const RouteWithSubRoutes = (route, index) => {
  return (   
    <Route
      key={index}
      path={route.path}
      element={route.element}
    />
  );
}



export {
  RouteWithSubRoutes
}