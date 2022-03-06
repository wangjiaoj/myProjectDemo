import Home from '../pages/home';
import ShopList from '../pages/shopList';

const  routes = [
   {
        path:"/",
        element:<Home />,
         exact:true
    },
    {
        path:"/about",
        element:<ShopList />,
        
    }
]
export default routes;