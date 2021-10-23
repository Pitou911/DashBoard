import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import Newuser from "./pages/newUser/Newuser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import Analystic from "./pages/analystic/Analystic";
import Sales from "./pages/sales/Sales";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/analystic">
            <Analystic />
          </Route>
          <Route path="/sales">
            <Sales />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <Newuser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <Newuser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
