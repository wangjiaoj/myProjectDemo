import { Button } from 'antd';
import React,{ useState } from 'react';
import ShopChild from './shopChild';
const Child2 = React.memo(ShopChild)
// (prevProps,nextProps)=>{
//   return prevProps.data==nextProps.data?true:false
// }
const ShopList =()=> {
      const [M,setM] = useState(0);
      const [N,setN] = useState(0);
      const clickHandle = ()=>{
         setN(N+1);
         if(N==5){
           setM(M+1)
         }
      }
      //useMemo(,[M]) 
      const clickChildHandle =  ()=>{
        console.log('mmm')
        
      }
    
      return (
        <div className="shopping-list">
          <h1>Shopping List for </h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
          </ul>
          <Button onClick={clickHandle}>N:{N}</Button>
          <Child2 data={M} onClick={clickChildHandle}></Child2>
        </div>
      )
    
}

export default ShopList 

 