import React from 'react'
import { Button } from 'antd';

class ShoppingList extends React.Component {
    constructor(props) { 
      super(props)
    }
    // class创建的组件中 必须有rander方法 且显示return一个react对象或者null
    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
          </ul>
          <Button>hhh</Button>
        </div>
      )
    }
}

export default ShoppingList