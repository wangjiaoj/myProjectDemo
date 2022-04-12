import {lazy} from 'react';
//路由集体管理
import { RouteInterface } from '../types/route';
const Home = lazy(()=>  import('../pages/home')) 
const ShopList = lazy(()=> import('../pages/shopList')) ; 
const Login = lazy(()=>import('../pages/login')) ;
const UserList = lazy(()=>import('../pages/userList')) 

  
const mainChildRoutes:Array<RouteInterface> = [{
    path:"/home/shop",
    component:ShopList ,
}, {
    path:"/home/user",
    component:UserList,
}];
const  routeList:Array<any> = [
   {
        path:"/login",
        component:Login ,
    },
    {
        path:"/home",
        component:Home,
        routes:mainChildRoutes
    }
]
export default routeList;