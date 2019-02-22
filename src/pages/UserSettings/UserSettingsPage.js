import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Components from '../../api/ComponentsAPI';
import Settings from '../../api/SettingsAPI';
import UserSettings from '../../components/UserSettings/UserSettings';
import '../../App.css';
import './UserSettingsPage.css'

class UserSettingsPage extends Component {
  state = {
    settings: null,
    component: null,
    setting: null,
    button_name: '',
    button_color: '#ffffff',
    opacity: '1',
    button_width: '300px',
    button_height: '100px',
    button_shape: '0%',
    button_padding_width: '24px',
    button_padding_height: '10px',
    button_text: '--> Template <--',
    text_color: '#bfbfbf',
    text_alignment: 'center',
    text_decoration: 'none',
    text_transform: 'none',
    letter_spacing: 'none',
    font_size: '24px',
    font_family: 'Courier',
    font_style: 'normal',
    font_weight: 'normal',
    font_variant: 'normal',
    border_color: '#ffffff',
    border_thickness: 'none',
    shadow_color: '#ffffff',
    shadow_vertical_offset: '0px',
    shadow_horizontal_offset: '0px',
    shadow_spread_offset: '0px',
    shadow_blur: '0px',
    redirect: false
  }

  componentDidMount() {
    Settings.fetchSettingsByComponentID(this.props.match.params.components)
      .then(json => {this.setState({
        settings: json
      })
    })
      Components.fetchComponentByID(this.props.match.params.components)
      .then((json) => this.setState({
        component: json
    }))
  }
  deleteThis = (componentID, settingID) => 
    Settings.deleteComponentSetting(componentID, settingID)
    .then(() => Settings.fetchSettingsByComponentID(this.props.match.params.components))
    .then(json => {
      this.setState({
      settings: json
    })
  });

  handleSubmit = (e) => {
    e.preventDefault();
    Settings.addComponentSetting(this.state.component.id, {button_name: this.state.button_name, button_color: this.state.button_color, opacity: this.state.opacity, button_width: this.state.button_width, button_height: this.state.button_height, button_shape: this.state.button_shape, button_padding_width: this.state.button_padding_width, button_padding_height: this.state.button_padding_height, button_text: this.state.button_text, text_color: this.state.text_color, text_alignment: this.state.text_alignment, text_decoration: this.state.text_decoration, text_transform: this.state.text_transform, letter_spacing: this.state.letter_spacing, font_size: this.state.font_size, font_family: this.state.font_family, font_style: this.state.font_style, font_weight: this.state.font_weight, font_variant: this.state.font_variant, border_color: this.state.border_color, border_thickness: this.state.border_thickness, shadow_color: this.state.shadow_color, shadow_vertical_offset: this.state.shadow_vertical_offset, shadow_horizontal_offset: this.state.shadow_horizontal_offset, shadow_spread_offset: this.state.shadow_spread_offset, shadow_blur: this.state.shadow_blur})
      .then(() => Settings.fetchSettingsByComponentID(this.state.component.id))
      .then(json => this.setState({
        settings: json,
        redirect: true
  }))
}
  handleButtonNameChange = (e) => {
    this.setState({button_name: e.target.value});
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={`/components/${this.state.component.id}/settings/${this.state.settings[0].id}`} />
    }

    return (
      <div>
        {this.state.component && this.state.settings ? 
        <div id='Grid-container'>
          <div className='Grid-item-1'>
            Buttons
          </div>
          <UserSettings component={this.state.component} deleteThis={this.deleteThis} settings={this.state.settings}/>

        <form className='Grid-item-3'>
          <h6>New Button:</h6>
            <input name='button_name' type='text' value={this.state.button_name} onChange={this.handleButtonNameChange} /><br/>
            <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
        </form></div> : null}
      </div>
    );
  }
}

export default UserSettingsPage;