import React,{Suspense} from 'react';
import {
  Route
} from 'react-router-dom';

const Loading:any = ()=>{
return(<>
   <div className="loadingsvg">loading...</div>
   </>) 
 }
 
const RouteWithSubRoutes = (route:any, index:number) => {
  return (   
    <Route
      key={index}
      path={route.path}
      render={(props:any) => (
        <Suspense fallback={<Loading/>}> <route.component {...props} routes={route.routes}  /></Suspense>
      )}
    />
  );
}



export {
  RouteWithSubRoutes
}