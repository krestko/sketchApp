import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../../pages/UserSettingsPage.css';
import './UserSettings.css'

class UserSettingsPage extends Component {


  handleUserSettingsLinks = () => {
    return this.props.settings.map((setting) => {
      return (<div key={setting.id}>
        <button style={{margin: '5px', width: `250px`, height: `100px`, borderRadius: `${setting.button_shape}`, padding: `${setting.button_padding_height} ${setting.button_padding_width}`, backgroundColor: `${setting.button_color}`, opacity: `${setting.opacity}`, border: `${setting.border_thickness} solid ${setting.border_color}`, boxShadow: `${setting.shadow_vertical_offset} ${setting.shadow_horizontal_offset} ${setting.shadow_blur} ${setting.shadow_spread_offset} ${setting.shadow_color}`, display: 'inline-block', outline: 'none', color: `${setting.text_color}`, textAlign: `${setting.text_alignment}`, textDecoration: `${setting.text_decoration}`, textTransform: `${setting.text_transform}`, letterSpacing: `${setting.letter_spacing}`,fontFamily: `${setting.font_family}`, fontStyle: `${setting.font_style}`, fontSize: `${setting.font_size}`, fontWeight: `${setting.font_weight}`, fontVariant: `${setting.font_variant}`}}>{setting.button_name}</button><br/>
        <Link to={`/components/${this.props.component.id}/settings/${setting.id}/code`}>{`[{Code}]`}</Link>
        <Link to={`/components/${setting.component_id}/settings/${setting.id}`}>[//edit]</Link>
        <Link to={`/components/${setting.component_id}/settings/`} onClick={() => this.props.deleteThis(setting.component_id, setting.id)}>[!delete]</Link>
        </div>)
    }
  )}

  render() {
    return (
      <div className="Grid-item-2">
        {this.handleUserSettingsLinks()}
      </div>
    );
  }
}

export default UserSettingsPage;