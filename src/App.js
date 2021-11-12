// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';
import Music from './Music';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login'
import ImgDownLoader from './ImgDownLoader';
import { Search } from './Search';
import NotificationBar from './NotificationBar';
import SignUp from './components/SignUp';
import PopUp from './PopUp';
function App() {

  return (
    <div className="container">
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/music" exact component={Music} />
            <Route path="/imgdownloader" exact component={ImgDownLoader} />
            <Route path="/Search/:imgName" exact component={Search} />
            <Route path="/login" exact component={Login} />
            <Route path="/msgcount" exact component={NotificationBar} />
            <Route path="/signupform" exact component={SignUp} /> 
            <Route path="/popupform" exact component={PopUp} /> 
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
