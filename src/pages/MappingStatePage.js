import React, { Component } from 'react';
import Settings from '../api/SettingsAPI';

class MappingStatePage extends Component {
  state = {
    setting: null
  }

  componentDidMount() {
    Settings.fetchSettingBySettingID(this.props.match.params.users, this.props.match.params.settings)
      .then(json => this.setState({
        setting: json
    }))
  }

  render() {
    console.log(this.state.setting)
    return (
      <div className='App'>
        <h1>Mapping State</h1>
      </div>
    )
  }
}
export default MappingStatePage;