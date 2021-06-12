import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Listing from './pages/Listing';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Listing} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
