import React,{ useState } from 'react'
import { Button, Form, Input, Row, Col } from 'antd';
 
const createEmptyLogin = () => ({
  login: "",
  password: ""
})
function ShoppingList  (props) {
   
  const { onLogin } = props;
  const [loginInfo, setLoginInfo] = useState(
    createEmptyLogin()
  );

  const onTexFieldChange = (fieldId) => (e) => {
    setLoginInfo({
      ...loginInfo,
      [fieldId]: e.target.value
    });
  };

  return (
    <div class="login-container">
      <p style={{'color':'#999'}}>用户名:admin 密码:111111</p>
      <Form>
        <Form.Item
          label="用户名"
        >
          <Input 
            placeholder="请输入用户名" 
            value={loginInfo.login}
            onChange={onTexFieldChange("login")}
           />
        </Form.Item>

        <Form.Item
          label="密&nbsp;&nbsp;&nbsp;&nbsp;码"
          hasFeedback
        >
          <Input 
            type="password" 
            autoComplete="off" 
            placeholder="请输入密码" 
            value={loginInfo.password}
            onChange={onTexFieldChange("password")}
           />
        </Form.Item>

        <Form.Item>
          <Row>
            <Col span={12}>
              <Button 
                style={{'width':'calc( 100% - 5px )'}}
                type="primary" 
                onClick={() => onLogin(loginInfo)}
               >确定</Button>
            </Col>
            <Col span={12} style={{'textAlign':'right'}}>
              <Button 
                style={{'width':'calc( 100% - 5px )'}}
                type="ghost" 
                onClick={() => setLoginInfo({login:'admin',password:'111111'})}
               >重置</Button>
            </Col>
          </Row>
          
          
        </Form.Item>
      </Form>
    </div>
  );
    
}

export default ShoppingList




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