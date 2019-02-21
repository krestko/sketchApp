import React, { Component } from 'react';
import '../../App.css';
import '../../pages/UserSettingPage.css';
import './UserSetting.css'

class UserSetting extends Component {


  render() {

    return (
      <div className="Grid-item-1">
        {this.props.setting.button_name}
      </div>
    );
  }
}

export default UserSetting;