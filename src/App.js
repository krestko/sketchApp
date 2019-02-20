import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppName from './components/AppName/AppName';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import UserHomePage from './pages/UserHomePage';
import UserSettingsPage from './pages/UserSettingsPage';
import UserSettingPage from './pages/UserSettingPage';
import AnimationHomePage from './pages/AnimationHomePage';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
      {/* <AppName /> */}
      <NavBar />
      <Route exact path="/components" component={HomePage} />
      <Route exact path="/components/:components" component={UserHomePage} />
      <Route exact path="/components/:components/settings" component={UserSettingsPage} />
      <Route exact path="/components/:components/settings/:settings" component={UserSettingPage} />
      <Route path="/components/:components/settings/:settings/code" component={AnimationHomePage} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
