import React from 'react';

const Home = React.lazy(()=>  import('../pages/home')) 
const ShopList = React.lazy(()=> import('../pages/shopList')) ; 
const Login = React.lazy(()=>import('../pages/login')) ;
const UserList = React.lazy(()=>import('../pages/userList')) 
 
//路由集体管理
const mainChildRoutes = [{
    path:"/shop",
    element:<ShopList />,
}, {
    path:"/user",
    element:<UserList />,
}];
const  routeList = [
   {
        path:"/",
        element:<Login />,
        exact:true
    },
    {
        path:"/home/*",
        element:<Home childRoutes={mainChildRoutes} />,
    }
]
export {
    mainChildRoutes,
    routeList
} ;