import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/pages/Home/Home';
import PhoneNumber from './components/pages/phoneNumber/PhoneNumber';
import OtpInput from './components/pages/OtpInput/OtpInput';
import Registration from './components/pages/Registration/Registration';
import SingleItem from './components/pages/SingleItem/SingleItem';
import CategoryProducts from './components/pages/CategoryProducts/CategoryProducts';
import Orders from './components/pages/Orders/Orders';
import Summary from './components/pages/Summary/Summary';

function App() {

  return (
    <div style={{ backgroundColor: "#1D3F66" }} className="App ">
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
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/otpInput">
            <OtpInput />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/dishes/:dishId">
            <SingleItem />
          </Route>
          <Route path="/categoryProducts/:id">
            <CategoryProducts />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
       
    </Router>
     
    </div>
  );
}

export default App;
