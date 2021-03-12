import React, {Fragment, useState } from 'react'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from "./context/github/GithubState";

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
  const [alert, setAlert] = useState(null);
  
  //++++++replaced by moving to GithubState++++++++


  // Set Alert
  const showAlert = (msg, type) => {
    // this.setState({alert: {msg: msg, type: type}})
    // Same as below
    // this.setState({alert: {msg, type}})
    
    setAlert({ msg, type });

    setTimeout(()=> setAlert(null), 4500);
  };

    return (
      <GithubState>
        <Router>
        <div className='App'>
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route 
              exact path ='/' 
              render={props =>(
                <Fragment>
                  <Search 
                  setAlert = {showAlert}
                  />
                  <Users/>
                </Fragment>
              )} />
              <Route exact path ='/about' component={About} /> 
              <Route exact path ='/user/:login' component={User} /> 
            </Switch>
          </div>
        </div>
        </Router>
      </GithubState>
    );
}

export default App;
