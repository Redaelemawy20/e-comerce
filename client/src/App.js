import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { useUserContext } from "./context/user_context";

import { Home, SingleProduct, Cart, Checkout, Error, Products } from "./pages";

function App() {
  const { user } = useUserContext();

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route
          path="/checkout"
          render={(props) =>
            user ? <Checkout {...props} /> : <Redirect to="/" />
          }
        />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
