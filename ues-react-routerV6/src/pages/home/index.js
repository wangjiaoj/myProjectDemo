import style from './index.less';
import React,{ useState } from 'react'
import { Routes, Route,useNavigate , Link} from "react-router-dom"
import { Layout, Menu } from 'antd';
import {RouteWithSubRoutes} from '../../components/route'
const { Header,Sider } = Layout;

function Home(props) {
  const {childRoutes} = props;
  const [current,setCurrent] = useState(2);
  const navigate = useNavigate();
  const handleClick=e=>{
      console.log('click ', e);
       
      setCurrent(e.key);
      if(e.key==='1'){
        console.log('navigate ');
        navigate('/shopList')
      }
    }
    // class创建的组件中 必须有rander方法 且显示return一个react对象或者null

    return (
        <Layout style={{ minHeight: '100vh' }}>
        
          <Sider width={200} theme="dark">
            <div className="logo"></div> 
              <Menu onClick={handleClick} selectedKeys={[current]} theme="light"    mode="inline" >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
          </Sider>
      
          <Layout style={{ padding: '0 24px 24px 2px' }}>
            <Header  className={style.siteLayoutVackground}   >
                <ol>
                  <Link to="/">login</Link>
                    <Link to="/home">home</Link>
                    <Link to="/home/shop">shop</Link>
                    <Link to="/home/user">user</Link>
                  </ol>
            </Header>
            <div>
                <Routes>
                  {/* <Route path="/user" element={<UserList />}></Route> */}
              
                {childRoutes.map((route, i) => {
                  return RouteWithSubRoutes(route, i)
                })}
                </Routes>
            </div>
          </Layout>       
        </Layout>
     )
    // 
}

export default Home



 