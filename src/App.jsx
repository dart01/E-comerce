import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/products" component={Products} />
        {/* Otras rutas según sea necesario */}
      </Switch>
    </Router>
  );
};

export default App;
