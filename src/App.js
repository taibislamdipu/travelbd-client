import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Shop from './components/Shop/Shop/Shop';
import PlaceOrder from './components/Shop/PlaceOrder/PlaceOrder';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login/Login';
import Product from './components/Shop/Product/Product';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ScrollToTop>
            <Header></Header>

            <Switch>

              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>

              <Route path="/shop">
                <Shop></Shop>
              </Route>

              <PrivateRoute path="/placeOrder/:productId">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>

              <Route path="/product/:productId">
                <Product></Product>
              </Route>

              <Route path="/login">
                <Login></Login>
              </Route>

              <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
              </PrivateRoute>


              <Route path="*">
                <NotFound></NotFound>
              </Route>

            </Switch>

            <Footer></Footer>
          </ScrollToTop>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
