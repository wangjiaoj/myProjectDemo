import React,{ useState } from 'react'
import { useHistory , Link} from "react-router-dom"
import { message, Spin } from 'antd';
import LoginComponent from "../../components/login"
const Login = ()=> {
  const navigate = useHistory();
  const handleLogin = function(){
      // 提示登陆成功
      message.success('提示登陆成功');
      navigate('/home')  
  }
  return (
    <div className="login-page">
      
      <LoginComponent onLogin={handleLogin} > </LoginComponent>
    </div>
  );
    
}
export default  Login;
 



 