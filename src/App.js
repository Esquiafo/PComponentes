import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "../src/elements/Navbar"
import ItemListContainer from '../src/elements/ItemListContainer';
import Index from "../src/pages/Index"
import Shop from "../src/pages/Shop"
import Forum from "../src/pages/Forum"
function App() {
  return (
    <Router>
      <Navbar />
      <ItemListContainer name="Luzc" />
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/shop' component={Shop} />
        <Route path='/forum' component={Forum} />
      </Switch>
    </Router>
  );
}

export default App;