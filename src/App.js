import React from 'react'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Manage from './Components/Inventory/Manage';
import Review from './Components/Review/Review';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import NotFound from './Components/NotFound/NotFound';


export default function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
            <Route path="/shop">
             <Shop></Shop>
            </Route>

            <Route path="/review">
            <Review></Review>
            </Route>

            <Route path="/manage">
               <Manage></Manage>
            </Route>

            <Route exact path="/">
               <Shop></Shop>
            </Route> 

            <Route path="/product/:productkey">
              <ProductDetail></ProductDetail>
            </Route>
            
            <Route path="*">
              <NotFound></NotFound>
            </Route>
           
          </Switch>
      </Router>
      
    </div>
  )
}
