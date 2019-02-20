import React, { Component } from 'react';
import '../../App.css';
import '../../pages/UserSettingPage.css';
import './UserSetting.css'

class UserSetting extends Component {


  render() {

    return (
      <div className="Grid-item-1">
        <h4>{this.props.setting.button_name}</h4>
      </div>
    );
  }
}

export default UserSetting;