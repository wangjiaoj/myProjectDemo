import Home from '../pages/home';
import ShopList from '../pages/shopList'; 
import Login from '../pages/login';
import UserList from '../pages/userList'
//路由集体管理
import { RouteInterface } from '../types/route';
  
const mainChildRoutes:Array<RouteInterface> = [{
    path:"/shop",
    component:ShopList ,
}, {
    path:"/user",
    component:UserList,
}];
const  routeList:Array<any> = [
   {
        path:"/",
        component:Login ,
        exact:true
    },
    {
        path:"/home/*",
        component:Home,
        routes:mainChildRoutes
    }
]
export default routeList;