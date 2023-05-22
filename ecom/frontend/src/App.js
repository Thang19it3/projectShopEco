import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./components/screens/HomeScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import NotFound from "./components/screens/NotFound";
import SingleProduct from "./screens/SingleProduct";
import Single from "./screens/Single";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import Contact from "./components/Contact";
import NewsScreen from "./screens/NewsScreen";
import Mua from "./screens/Mua";
import DonMua from "./screens/DonMua";
import DonBan from "./screens/DonBan";
import DetailOrder from "./screens/DetailOrder";
import Shop from "./screens/Shop";
import Search1 from "./screens/Search1";
import Quanlytin from "./screens/Quanlytin";
import User from "./screens/User";
import Shop1 from "./screens/Shop1";
import Shop2 from "./screens/Shop2";
import ProfileOwner from "./screens/ProfileOwner";
import EditBlogScreen from "./screens/EditBlogScreen";
import DetailsSellOrder from "./screens/DetailsSellOrder";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/shop/giai-tri-the-thao" component={Shop} />
        <Route path="/shop/thoi-trang" component={Shop1} />
        <Route path="/shop/do-dien-tu" component={Shop2} />
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/login" component={Login} />
        <Route path="/search1" component={Search1} />
        <Route path="/quan-ly-tin" component={Quanlytin} />
        <Route path="/register" component={Register} />
        <Route path="/user" component={User} />
        <Route path="/trang-ca-nhan/:id" component={ProfileOwner} />
        <Route path="/products/:id" component={Single} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/sua-tin/:id" component={EditBlogScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/contact" component={Contact} />
        <Route path="/newproduct" component={NewsScreen} />
        <Route path="/order/:id" component={Mua} />
        <Route path="/don-mua" component={DonMua} />
        <Route path="/don-ban" component={DonBan} />
        <Route path="/order-detail/:id" component={DetailOrder} />
        <Route path="/chi-tiet-don-hang/:id" component={DetailsSellOrder} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
