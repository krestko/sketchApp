import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Home';
import Callback from './callback';
import Auth from './auth';
import history from './history';
import HomePage from './pages/HomePage';
import UserHomePage from './pages/UserHomePage';
import UserSettingsPage from './pages/UserSettingsPage';
import UserSettingPage from './pages/UserSettingPage';
import AnimationHomePage from './pages/AnimationHomePage';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }}/>
      <Route exact path="/components" render={(props) => <HomePage auth={auth} {...props} />} />
      <Route exact path="/components/:components" render={(props) => <UserHomePage auth={auth} {...props} />} />
      <Route exact path="/components/:components/settings" render={(props) => <UserSettingsPage auth={auth} {...props} />} />
      <Route exact path="/components/:components/settings/:settings" render={(props) => <UserSettingPage auth={auth} {...props} />} />
      />
      <Route path="/components/:components/settings/:settings/code" render={(props) => <AnimationHomePage auth={auth} {...props} />} />
    </div>
  </Router>
);

export default Routes;

