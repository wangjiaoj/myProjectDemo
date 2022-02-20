import React, { PureComponent } from 'react';
import { Routes, Route, Link } from "react-router-dom"

import Home from './pages/home';
import ShopList from './pages/shopList';
// import routes from './router';
import 'antd/dist/antd.css';
// function RenderRoutes() {
//   const element = useRoutes(routes)
//   return element;
// }
class App extends PureComponent {
    render() {
        const id = "abc"
        return (
            <div>
                <div className="App">
                  <header className="App-header">
                  <nav>
                    <ol>
                      <Link to="/">home</Link>
                      <Link to="/shopList">about</Link>
                    </ol>

                  </nav>
                    <Routes>
                      <Route path="/" element={<Home />}></Route>
                      <Route path="/shopList" element={<ShopList />}></Route>
                    </Routes>
                  </header>
                </div>
            </div>
        )
    }
    
}
export default App;