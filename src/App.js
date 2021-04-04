import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import UserLogin from './Components/User/UserLogin';
import UserRegisterPortal from './Components/User/UserResgisterPortal';
import UserMainDashboardComponent from './Components/Dashboard/UserMainDashboardComponent';
import LandingPage from './Components/LandingPage';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Header () {
  const classes = useStyles();
  const history = useHistory();
  const onLogin = () => {
      history.push('./userlogin');
  }
  return (
      <div>
        <AppBar position="static">
          <Toolbar>
              <Typography variant="h6" className={classes.title}>
                 Simp-Save
               </Typography> 
             <Button color="inherit" onClick={onLogin} >Login</Button>
          </Toolbar>
        </AppBar>
      </div>
  );
}
function App () {
    return (
      <Router>
         <Header/>
          <Switch>
              <Route exact path='/' component = {LandingPage} />
              <Route path='/userregisterportal' component={UserRegisterPortal} />
              <Route path='/userlogin' component={UserLogin} />
              <Route path='/usermaindashboard' component={UserMainDashboardComponent} />
          </Switch>
      </Router>
    );
}
export default App
