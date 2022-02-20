import home from '../pages/home';
import shopList from '../pages/shopList';

const  routes = [
   {
        path:"/",
        element:<home />,
         exact:true
    },
    {
        path:"/about",
        element:<shopList />,
        
    }
]
export default routes;