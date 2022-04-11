import React,{ useState } from 'react'
import { Button, Form, Input, Row, Col } from 'antd';
 
const createEmptyLogin = () => ({
  login: "",
  password: ""
})
const LoginComponent = (props:any)=> {
   
  const { onLogin } = props;
  const [loginInfo, setLoginInfo] = useState(
    createEmptyLogin()
  );

  const onTexFieldChange = (fieldId:any) => (e:HTMLInputElement&{target:any}) => {
    setLoginInfo({
      ...loginInfo,
      [fieldId]: e.target.value
    });
  };

  return (
    <div className="login-container">
      <p style={{'color':'#999'}}>用户名:admin 密码:111111</p>
      <Form>
        <Form.Item
          label="用户名"
        >
          <Input 
            placeholder="请输入用户名" 
            value={loginInfo.login}
            onChange={onTexFieldChange}
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
            onChange={onTexFieldChange}
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

export default LoginComponent




 