import './App.css';
import {useState} from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "../src/elements/Navbar"
import ItemDetailContainer from '../src/elements/ItemDetailContainer';
import ItemListContainer from '../src/elements/ItemListContainer';
import ItemCount from '../src/elements/ItemCount';
import Index from "../src/pages/Index"
import Shop from "../src/pages/Shop"
import Forum from "../src/pages/Forum"
import Product from "../src/pages/Product"
import Category from "../src/pages/Category"
import SingleProduct from './pages/SingleProduct';
import SingleCategory from './pages/SingleCategory';


function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      <Navbar />
   
      <Switch>
        <Route exact path='/' exact component={Index} />
        <Route exact path='/category' component={Category} />
        <Route path='/category/:categoryId' component={SingleCategory} />
        <Route exact path="/products" component={Product}/>
       
        <Route path="/products/:productId" component={SingleProduct}/>
        <Route exact path='/shop' component={Shop} />
    

      </Switch>
    </Router>
  );
}

export default App;