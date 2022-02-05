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
          <Route path="/otpInput">
            <OtpInput />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
       
    </Router>
     
    </div>
  );
}

export default App;
