import React, { Component } from 'react';
import '../../App.css';
import '../../pages/UserSettingPage.css';
import './UserSetting.css'

class UserSetting extends Component {


  render() {

    return (
      <div className="app">
        <h1>{this.props.setting.button_name}</h1>
      </div>
    );
  }
}

export default UserSetting;