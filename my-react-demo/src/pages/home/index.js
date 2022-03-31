import style from './index.less';
import React,{ useState } from 'react'
import { Routes, Route,useNavigate , Link} from "react-router-dom"
import { Layout, Menu } from 'antd';
import {RouteWithSubRoutes} from '../../components/route'
const { Header,Sider } = Layout;

function Home(props) {
  const {childRoutes} = props;
  console.log(childRoutes)
  // console.log("mainChildRoutes")
  // console.log(mainChildRoutes)
  var {current,setCurrent} = useState(2);
  const navigate = useNavigate();
  const handleClick=e=>{
      console.log('click ', e);
       
      setCurrent = e.key;
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




// import { Layout, Menu, Breadcrumb } from 'antd';
// const { Header, Content, Sider } = Layout;
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;


// ReactDOM.render(
//   <Layout>

//     <Layout>
//       <Sider width={200} className="site-layout-background">
//         <Menu
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           defaultOpenKeys={['sub1']}
//           style={{ height: '100%', borderRight: 0 }}
//         >
//           <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
//             <Menu.Item key="1">option1</Menu.Item>
//             <Menu.Item key="2">option2</Menu.Item>
//             <Menu.Item key="3">option3</Menu.Item>
//             <Menu.Item key="4">option4</Menu.Item>
//           </SubMenu>
//           <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
//             <Menu.Item key="5">option5</Menu.Item>
//             <Menu.Item key="6">option6</Menu.Item>
//             <Menu.Item key="7">option7</Menu.Item>
//             <Menu.Item key="8">option8</Menu.Item>
//           </SubMenu>
//           <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
//             <Menu.Item key="9">option9</Menu.Item>
//             <Menu.Item key="10">option10</Menu.Item>
//             <Menu.Item key="11">option11</Menu.Item>
//             <Menu.Item key="12">option12</Menu.Item>
//           </SubMenu>
//         </Menu>
//       </Sider>
//       <Layout style={{ padding: '0 24px 24px' }}>
//         <Breadcrumb style={{ margin: '16px 0' }}>
//           <Breadcrumb.Item>Home</Breadcrumb.Item>
//           <Breadcrumb.Item>List</Breadcrumb.Item>
//           <Breadcrumb.Item>App</Breadcrumb.Item>
//         </Breadcrumb>
//         <Content
//           className="site-layout-background"
//           style={{
//             padding: 24,
//             margin: 0,
//             minHeight: 280,
//           }}
//         >
//           Content
//         </Content>
//       </Layout>
//     </Layout>
//   </Layout>,
//   mountNode,
     // );