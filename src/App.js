import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "../src/elements/Navbar"
import ItemDetailContainer from '../src/elements/ItemDetailContainer';
import ItemListContainer from '../src/elements/ItemListContainer';
import ItemCount from '../src/elements/ItemCount';
import Index from "../src/pages/Index"
import Shop from "../src/pages/Shop"
import Forum from "../src/pages/Forum"
function App() {
  return (
    <Router>
      <Navbar />
      <ItemDetailContainer />
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/shop' component={Shop} />
        <Route path='/forum' component={Forum} />
      </Switch>
    </Router>
  );
}

export default App;