import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Components from '../api/ComponentsAPI';
import Settings from '../api/SettingsAPI';
import UserSetting from '../components/UserSetting/UserSetting';
import NameSelectors from '../components/UserSetting/NameSelectors';
import ColorSelectors from '../components/UserSetting/ColorSelectors';
import SizeSelectors from '../components/UserSetting/SizeSelectors';
import ShapeSelectors from '../components/UserSetting/ShapeSelectors';
import PaddingSelectors from '../components/UserSetting/PaddingSelectors';
import TextSelectors from '../components/UserSetting/TextSelectors';
import FontSelectors from '../components/UserSetting/FontSelectors';
import BorderSelectors from '../components/UserSetting/BorderSelectors';
import ShadowSelectors from '../components/UserSetting/ShadowSelectors';
import '../App.css';
import './UserSettingPage.css';

class UserSettingPage extends Component {
  state = {
    setting: null,
    component: null,
    // button_name: '',
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
    Settings.fetchSettingBySettingID(this.props.match.params.components, this.props.match.params.settings)
      .then(json => this.setState({
        setting: json
    }))
    Components.fetchComponentByID(this.props.match.params.components)
      .then((json) => this.setState({
        component: json
    }))
  }

  handleButtonNameChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      button_name: e.target.value
      }});
  }
  handleButtonColorChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      button_color: e.target.value
      }});
  }
  handleOpacityChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      opacity: e.target.value
      }});
  }
  handleButtonWidthChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      button_width: e.target.value
      }});
  }
  handleButtonHeightChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      button_height: e.target.value
      }});
  }
  handleButtonShapeChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      button_shape: e.target.value
      }});
  }
  handleButtonPaddingWidthChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      button_padding_width: e.target.value
      }});
  }
  handleButtonPaddingHeightChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      button_padding_height: e.target.value
      }});
  }
  handleButtonTextChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      button_text: e.target.value
      }});
  }
  handleTextColorChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      text_color: e.target.value
      }});
  }
  handleTextAlignmentChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      text_alignment: e.target.value
      }});
  }
  handleTextDecorationChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      text_decoration: e.target.value
      }});
  }
  handleTextTransformChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      text_transform: e.target.value
      }});
  }
  handleLetterSpacingChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      letter_spacing: e.target.value
      }});
  }
  handleFontSizeChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      font_size: e.target.value
      }});
  }
  handleFontFamilyChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      font_family: e.target.value
      }});
  }
  handleFontStyleChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      font_style: e.target.value
      }});
  }
  handleFontWeightChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      font_weight: e.target.value
      }});
  }
  handleFontVariantChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      font_variant: e.target.value
      }});
  }
  handleBorderColorChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      border_color: e.target.value
      }});
  }
  handleBorderThicknessChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      border_thickness: e.target.value
      }});
  }
  handleShadowColorChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      shadow_color: e.target.value
      }});
  }
  handleShadowVerticalOffsetChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      shadow_vertical_offset: e.target.value
      }});
  }
  handleShadowHorizontalOffsetChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      shadow_horizontal_offset: e.target.value
      }});
  }
  handleShadowSpreadOffsetChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      shadow_spread_offset: e.target.value
      }});
  }
  handleShadowBlurChange = (e) => {
    this.setState({setting: {
      ...this.state.setting,
      shadow_blur: e.target.value
      }});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Settings.updateComponentSetting(this.state.component.id, this.state.setting.id, this.state.setting)
      .then(json => {this.setState({
        setting: json,
        redirect: true
      })
    })}

  render() {
    if(this.state.redirect) {
      return <Redirect to={`/components/${this.state.component.id}/settings/`} />
    }
    return (
      <div>
        {this.state.component && this.state.setting ?
        <div id="Grid-container"> 
          
        <UserSetting setting={this.state.setting} component={this.state.component} />

        <form className='Grid-item-5'>
          <div>
            <div style={{textAlign: 'center', padding: '10px 0px 10px 0px', fontSize: '1.5em'}}>
            Selectors
            </div>
          <h6 className="Categories">Edit Name:</h6>
            <NameSelectors settingName='button_name' settingHandler={this.handleButtonNameChange} />

          <h6 className="Categories">Button Color:</h6>
            <ColorSelectors colorName='background_color' colorValue={this.state.setting.button_color} colorHandler={this.handleButtonColorChange} opacityValue={this.state.setting.opacity} opacityHandler={this.handleOpacityChange}/>

          <h6 className="Categories">Button Size:</h6>
            <SizeSelectors className='Change' widthValue={this.state.setting.button_width} widthHandler={this.handleButtonWidthChange} heightValue={this.state.setting.button_height} heightHandler={this.handleButtonHeightChange} />

          <h6 className="Categories">Button Shape:</h6>
            <ShapeSelectors shapeValue={this.state.setting.button_shape} shapeHandler={this.handleButtonShapeChange}/>

          <h6 className="Categories">Button Padding:</h6>
            <PaddingSelectors widthValue={this.state.setting.button_padding_width} widthHandler={this.handleButtonPaddingWidthChange} heightValue={this.state.setting.button_padding_height} heightHandler={this.handleButtonPaddingHeightChange} />

          <h6 className="Categories">Button Text:</h6>
            <TextSelectors name='button_name' nameValue={this.state.setting.button_text} nameHandler={this.handleButtonTextChange} color='text_color' colorValue={this.state.setting.text_color} colorHandler={this.handleTextColorChange} alignmentValue={this.state.setting.text_alignment} alignmentHandler={this.handleTextAlignmentChange} decorationValue={this.state.setting.text_decoration} decorationHandler={this.handleTextDecorationChange} transformValue={this.state.setting.text_transform} transformHandler={this.handleTextTransformChange} spacingValue={this.state.setting.letter_spacing} spacingHandler={this.handleLetterSpacingChange}/>

          <h6 className="Categories">Button Font:</h6>
            <FontSelectors fontFamilyValue={this.state.setting.font_family} fontFamilyHandler={this.handleFontFamilyChange} fontSizeValue={this.state.setting.font_size} fontSizeHandler={this.handleFontSizeChange} styleValue={this.state.setting.font_style} styleHandler={this.handleFontStyleChange} weightValue={this.state.setting.font_weight} weightHandler={this.handleFontWeightChange} fontVariantValue={this.state.setting.font_variant} fontVariantHandler={this.handleFontVariantChange}/>

          <h6 className="Categories">Button Border:</h6>
            <BorderSelectors borderColorValue={this.state.setting.border_color} borderColorHandler={this.handleBorderColorChange} thicknessValue={this.state.setting.border_thickness} thicknessHandler={this.handleBorderThicknessChange}/>

          <h6 className="Categories">Button Shadow:</h6>
            <ShadowSelectors name='shadow_color' shadowColorValue={this.state.setting.shadow_color} shadowColorHandler={this.handleShadowColorChange} verticalOffsetValue={this.state.setting.shadow_vertical_offset} verticalOffsetHandler={this.handleShadowVerticalOffsetChange} horizontalOffsetValue={this.state.setting.shadow_horizontal_offset} horizontalOffsetHandler={this.handleShadowHorizontalOffsetChange} spreadOffsetValue={this.state.setting.shadow_spread_offset} spreadOffsetHandler={this.handleShadowSpreadOffsetChange} shadowBlurValue={this.state.setting.shadow_blur} shadowBlurHandler={this.handleShadowBlurChange}/>
          </div>

          <div className="User-buttons">
            <button className="Test-button" type="button" onClick={this.handleSubmit}>Save Button</button>
          </div>
        </form>
          
        <div className='Grid-item-6'>
        <button className='Style-button' style={{margin: '5px', width: `${this.state.setting.button_width}`, height: `${this.state.setting.button_height}`, borderRadius: `${this.state.setting.button_shape}`, padding: `${this.state.setting.button_padding_height} ${this.state.setting.button_padding_width}`, backgroundColor: `${this.state.setting.button_color}`, opacity: `${this.state.setting.opacity}`, border: `${this.state.setting.border_thickness} solid ${this.state.setting.border_color}`, boxShadow: `${this.state.setting.shadow_vertical_offset} ${this.state.setting.shadow_horizontal_offset} ${this.state.setting.shadow_blur} ${this.state.setting.shadow_spread_offset} ${this.state.setting.shadow_color}`, display: 'inline-block', outline: 'none', color: `${this.state.setting.text_color}`, textAlign: `${this.state.setting.text_alignment}`, textDecoration: `${this.state.setting.text_decoration}`, textTransform: `${this.state.setting.text_transform}`, letterSpacing: `${this.state.setting.letter_spacing}`,fontFamily: `${this.state.setting.font_family}`, fontStyle: `${this.state.setting.font_style}`, fontSize: `${this.state.setting.font_size}`, fontWeight: `${this.state.setting.font_weight}`, fontVariant: `${this.state.setting.font_variant}`}}>{this.state.setting.button_text}
        </button>
        </div></div> : null}
      </div>
    );
  }
}

export default UserSettingPage;