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
      <div>
      {this.state.setting ?
        <div id='Grid-container'>
        <div className='Grid-item-1'>
          {this.state.setting.button_name}
          </div>
          <div className='Grid-item-7'>
         <button style={{margin: '5px', width: `${this.state.setting.button_width}`, height: `${this.state.setting.button_height}`, borderRadius: `${this.state.setting.button_shape}`, padding: `${this.state.setting.button_padding_height} ${this.state.setting.button_padding_width}`, backgroundColor: `${this.state.setting.button_color}`, opacity: `${this.state.setting.opacity}`, border: `${this.state.setting.border_thickness} solid ${this.state.setting.border_color}`, boxShadow: `${this.state.setting.shadow_vertical_offset} ${this.state.setting.shadow_horizontal_offset} ${this.state.setting.shadow_blur} ${this.state.setting.shadow_spread_offset} ${this.state.setting.shadow_color}`, display: 'inline-block', outline: 'none', color: `${this.state.setting.text_color}`, textAlign: `${this.state.setting.text_alignment}`, textDecoration: `${this.state.setting.text_decoration}`, textTransform: `${this.state.setting.text_transform}`, letterSpacing: `${this.state.setting.letter_spacing}`,fontFamily: `${this.state.setting.font_family}`, fontStyle: `${this.state.setting.font_style}`, fontSize: `${this.state.setting.font_size}`, fontWeight: `${this.state.setting.font_weight}`, fontVariant: `${this.state.setting.font_variant}`}}>
        {this.state.setting.button_text}
         </button>
         </div>

        <div className='Grid-item-7'><h5>React Inline:</h5></div>
         <div className='Grid-item-8'>
        {/* <h5>React Inline:</h5> */}
        <div>style={'{{ }}'}<br/>
        margin: '5px', width: '{this.state.setting.button_width}', height: '{this.state.setting.button_height}', borderRadius: '{this.state.setting.button_shape}', backgroundColor: '{this.state.setting.button_color}', opacity: '{this.state.setting.opacity}', {this.state.setting.border_thickness !== 'none' ? `border: '${this.state.setting.border_thickness} solid ${this.state.setting.border_color}',` : null} {this.state.setting.shadow_vertical_offset !== '0px' ? `boxShadow: '${this.state.setting.shadow_vertical_offset} ${this.state.setting.shadow_horizontal_offset} ${this.state.setting.shadow_blur} ${this.state.setting.shadow_spread_offset} ${this.state.setting.shadow_color}',` : null} display: 'inline-block', color: '{this.state.setting.text_color}', textAlign: '{this.state.setting.text_alignment}', {this.state.setting.text_decoration !== 'none' ? `textDecoration: "${this.state.setting.text_decoration}",` : null} {this.state.setting.text_transform !== 'none' ? `textTransform: "${this.state.setting.text_transform}",` : null} {this.state.setting.letter_spacing !== 'none' ? `letterSpacing: "${this.state.setting.letter_spacing}",` : null} fontFamily: '{this.state.setting.font_family}', fontStyle: '{this.state.setting.font_style}', fontSize: '{this.state.setting.font_size}', fontWeight: '{this.state.setting.font_weight}', fontVariant: '{this.state.setting.font_variant}'
        </div>
        </div>
        <div className='Grid-item-7'><h5>Stylesheet:</h5></div>        
        <div className='Grid-item-8'>
        {/* <h5>Stylesheet:</h5> */}
        <div>{`{}`}</div>  
          <div>margin: 5px;</div>
          <div>width: {this.state.setting.button_width};</div>
          <div>height: {this.state.setting.button_height};</div>
          <div>border-radius: {this.state.setting.button_shape};</div>
          <div>background-color: {this.state.setting.button_color};</div> 
          <div>opacity: {this.state.setting.opacity};</div>
          <div>border: {this.state.setting.border_thickness} solid {this.state.setting.border_color};</div>
          <div>box-shadow: {this.state.setting.shadow_vertical_offset} {this.state.setting.shadow_horizontal_offset} {this.state.setting.shadow_blur} {this.state.setting.shadow_spread_offset} {this.state.setting.shadow_color};</div>
          <div>display: inline-block;</div>
          <div>color: {this.state.setting.text_color};</div>
          <div>text-align: {this.state.setting.text_alignment};</div>
          <div>text-decoration: {this.state.setting.text_decoration};</div>
          <div>text-transform: {this.state.setting.text_transform};</div> 
          <div>letter-spacing: {this.state.setting.letter_spacing};</div>
          <div>font-family: {this.state.setting.font_family};</div>
          <div>font-style: {this.state.setting.font_style};</div>
          <div>font-size: {this.state.setting.font_size};</div>
          <div>font-weight: {this.state.setting.font_weight};</div> 
          <div>font-variant: {this.state.setting.font_variant};</div>
        </div>



        </div> : null}

      </div>
    )
  }
}
export default AnimationHomePage;


