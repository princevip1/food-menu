import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import PhoneNumber from './components/pages/phoneNumber/PhoneNumber';

function App() {

  return (
    <div className="App ">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/phone">
            <PhoneNumber />
          </Route>
        </Switch>
        <Navigation/>
    </Router>
     
    </div>
  );
}

export default App;
