import React,{ useState } from 'react'
import style from './index.module.less';
import { Routes, Route,useNavigate , Link} from "react-router-dom"
import { message, Spin } from 'antd';
import LoginComponent from "../../components/login"
const Login = (props)=> {
  const navigate = useNavigate();
  const handleLogin = function(){
      // 提示登陆成功
      message.success('提示登陆成功');
      navigate('/home')  
  }
  return (
    <div  className={style.loginPage}>
      
      <LoginComponent onLogin={handleLogin} > </LoginComponent>
    </div>
  );
    
}
export default  Login;
 



 