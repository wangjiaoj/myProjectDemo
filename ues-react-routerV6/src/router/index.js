import Home from '../pages/home';
import ShopList from '../pages/shopList'; 
import Login from '../pages/login';
import UserList from '../pages/userList'
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