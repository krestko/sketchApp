import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Settings from '../api/SettingsAPI';
import Components from '../api/ComponentsAPI';
import '../App.css';
import './AnimationHomePage.css'


class AnimationHomePage extends Component {
  state = {
    setting: null,
    component: null
  }

  componentDidMount() {
    Settings.fetchSettingBySettingID(this.props.match.params.components, this.props.match.params.settings)
      .then(json => this.setState({
        setting: json
    }))
    Components.fetchComponentByID(this.props.match.params.components)
      .then((json) => this.setState({
        component: json
    }))
  }

  render() {
    return (
      <div className='App'>
              {this.state.component && this.state.setting ?
        <div>
        <div className='Links'>
          <div className='Link'>
          <Link to={`/components`}>Home</Link>
          </div>
          <div className='Link'>
          <Link to={`/components/${this.state.component.id}`}>{this.state.component.component_name}</Link>
          </div>
          <div className='Link'>
          <Link to={`/components/${this.props.match.params.components}/settings`}>Buttons</Link>
          </div>
          <div className='Link'>
            <a style={{ cursor: 'pointer' }} onClick={this.logout}>Log Out</a>
          </div>
        </div>
        </div> : null}
      {this.state.setting ?
        <div>
          <h1>{this.state.setting.button_name}</h1>
         <button style={{margin: '5px', width: `${this.state.setting.button_width}`, height: `${this.state.setting.button_height}`, borderRadius: `${this.state.setting.button_shape}`, padding: `${this.state.setting.button_padding_height} ${this.state.setting.button_padding_width}`, backgroundColor: `${this.state.setting.button_color}`, opacity: `${this.state.setting.opacity}`, border: `${this.state.setting.border_thickness} solid ${this.state.setting.border_color}`, boxShadow: `${this.state.setting.shadow_vertical_offset} ${this.state.setting.shadow_horizontal_offset} ${this.state.setting.shadow_blur} ${this.state.setting.shadow_spread_offset} ${this.state.setting.shadow_color}`, display: 'inline-block', outline: 'none', color: `${this.state.setting.text_color}`, textAlign: `${this.state.setting.text_alignment}`, textDecoration: `${this.state.setting.text_decoration}`, textTransform: `${this.state.setting.text_transform}`, letterSpacing: `${this.state.setting.letter_spacing}`,fontFamily: `${this.state.setting.font_family}`, fontStyle: `${this.state.setting.font_style}`, fontSize: `${this.state.setting.font_size}`, fontWeight: `${this.state.setting.font_weight}`, fontVariant: `${this.state.setting.font_variant}`}}>
        {this.state.setting.button_text}
         </button>

        <div>
        <h5>React Inline:</h5>
        <p className='Code'>style={'{{ }}'}<br/>
        margin: '5px', width: '{this.state.setting.button_width}', height: '{this.state.setting.button_height}', borderRadius: '{this.state.setting.button_shape}', backgroundColor: '{this.state.setting.button_color}', opacity: '{this.state.setting.opacity}', {this.state.setting.border_thickness !== 'none' ? `border: '${this.state.setting.border_thickness} solid ${this.state.setting.border_color}',` : null} {this.state.setting.shadow_vertical_offset !== '0px' ? `boxShadow: '${this.state.setting.shadow_vertical_offset} ${this.state.setting.shadow_horizontal_offset} ${this.state.setting.shadow_blur} ${this.state.setting.shadow_spread_offset} ${this.state.setting.shadow_color}',` : null} display: 'inline-block', color: '{this.state.setting.text_color}', textAlign: '{this.state.setting.text_alignment}', {this.state.setting.text_decoration !== 'none' ? `textDecoration: "${this.state.setting.text_decoration}",` : null} {this.state.setting.text_transform !== 'none' ? `textTransform: "${this.state.setting.text_transform}",` : null} {this.state.setting.letter_spacing !== 'none' ? `letterSpacing: "${this.state.setting.letter_spacing}",` : null} fontFamily: '{this.state.setting.font_family}', fontStyle: '{this.state.setting.font_style}', fontSize: '{this.state.setting.font_size}', fontWeight: '{this.state.setting.font_weight}', fontVariant: '{this.state.setting.font_variant}'
        </p>
        </div>

        <div>
        <h5>Stylesheet:</h5>
        <p className='Code'>button {`{}`}<br/>  
          margin: 5px;<br/>
          width: {this.state.setting.button_width};<br/>
          height: {this.state.setting.button_height};<br/>
          border-radius: {this.state.setting.button_shape};<br/>
          background-color: {this.state.setting.button_color};<br/> 
          opacity: {this.state.setting.opacity};<br/>
          border: {this.state.setting.border_thickness} solid {this.state.setting.border_color};<br/>
          box-shadow: {this.state.setting.shadow_vertical_offset} {this.state.setting.shadow_horizontal_offset} {this.state.setting.shadow_blur} {this.state.setting.shadow_spread_offset} {this.state.setting.shadow_color};<br/>
          display: inline-block;<br/>
          color: {this.state.setting.text_color};<br/>
          text-align: {this.state.setting.text_alignment};<br/>
          text-decoration: {this.state.setting.text_decoration};<br/>
          text-transform: {this.state.setting.text_transform};<br/> 
          letter-spacing: {this.state.setting.letter_spacing};<br/>
          font-family: {this.state.setting.font_family};<br/>
          font-style: {this.state.setting.font_style};<br/>
          font-size: {this.state.setting.font_size};<br/>
          font-weight: {this.state.setting.font_weight};<br/> 
          font-variant: {this.state.setting.font_variant};
        </p>
        </div>
        </div> : null}

      </div>
    )
  }
}
export default AnimationHomePage;


