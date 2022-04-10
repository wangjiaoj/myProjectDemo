import React from 'react';
const ShopChild:React.FC<any> =(props)=> {
 
    console.log("child 执行了");
    console.log('假设这里有大量代码')
    return <div onClick={props.onClick}>
        child: {props.data}
    </div>;
    
}

export default ShopChild 

 