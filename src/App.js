import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./pages/Navbar/Navbar"
import Index from "../src/pages/Index/Index"
import Cart from "../src/pages/Shop/Cart"
import Product from "./pages/Products/ItemDetailList"
import Category from "./pages/Category/Category"
import SingleProduct from './pages/Products/ItemDetail';
import SingleCategory from './pages/Category/SingleCategory';

function App() {

  return (
    <Router>
    <Switch>
      <Navbar />
    </Switch>
      <Switch>
        <Route exact path='/' component={Index} />
  
        <Route exact path="/products" component={Product}/>
        <Route exact path="/category" component={Category}/>
        <Route path="/products/:productId" component={SingleProduct}/>
        <Route path="/category/:categoryId" component={SingleCategory} />

        <Route exact path='/cart' component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;