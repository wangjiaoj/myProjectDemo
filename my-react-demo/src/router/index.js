import Home from '../pages/home';
import ShopList from '../pages/shopList'; 
import Login from '../pages/login';
//路由集体管理
const mainChildRoutes = [ {
    path:"/shopList",
    element:<ShopList />,}
];
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
export default routeList;