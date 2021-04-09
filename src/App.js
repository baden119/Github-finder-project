import React from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home'
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {

  // state={
  //   users:[],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null
  // } 
  // +++++replaced by below++++

  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [repos, setRepos] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);
  
  //++++++replaced by moving to GithubState++++++++

  // replaced by moving to GithubState

  // // Set Alert
  // const showAlert = (msg, type) => {
  //   // this.setState({alert: {msg: msg, type: type}})
  //   // Same as below
  //   // this.setState({alert: {msg, type}})
  //
    //  setAlert({ msg, type });

  //   setTimeout(()=> setAlert(null), 4500);
  // };

    return (
      <GithubState>
        <AlertState>
        <Router>
        <div className='App'>
          <Navbar />
          <div className="container">
            <Alert/>
            <Switch>
              <Route exact path ='/' component={Home} />
              <Route exact path ='/about' component={About} /> 
              <Route exact path ='/user/:login' component={User} /> 
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        </Router>
      </AlertState> 
      </GithubState>
    );
}

export default App;
