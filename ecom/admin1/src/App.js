import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreens from "./screens/HomeScreens";
import LoginScreen from "./screens/LoginScreen";
import AllProduct from "./components/products/AllProduct";
import Order2 from "./components/orders/Order2.js";
import UsersManageScreen from "./screens/UsersManageScreen";
import DetailsProduct from "./screens/DetailsProduct";
import OrderManageScreen from "./screens/OrderManageScreen";
import DetailsUser from "./screens/DetailsUser";
import DetailsOrder from "./screens/DetailsOrder";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/product" component={HomeScreens} />
          <Route path="/chi-tiet-tin/:id" component={DetailsProduct} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/user" component={UsersManageScreen} />
          <Route path="/thong-tin-nguoi-dung/:id" component={DetailsUser} />
          <Route path="/products" component={AllProduct} />
          <Route path="/order" component={OrderManageScreen} />
          <Route path="/chi-tiet-don-hang/:id" component={DetailsOrder} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
