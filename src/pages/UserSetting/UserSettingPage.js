import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserSetting from '../../components/UserSetting/UserSetting';
import Components from '../../api/ComponentsAPI';
import Settings from '../../api/SettingsAPI';
import '../../App.css';
import './UserSettingPage.css';

class UserSettingPage extends Component {
  state = {
    setting: null,
    component: null,
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
        {/* <Link to={`/components/${this.props.match.params.components}/settings/${this.props.match.params.settings}/code`}>Code</Link> */}

        <form className='Grid-item-5'>
          <div>
            <div style={{textAlign: 'center', padding: '10px 0px 10px 0px', fontSize: '1.5em'}}>
            Selectors
            </div>
          <h6 className="Categories">Edit Name:</h6>
            <input className="Categories" name='button_name' type='text' placeholder={this.state.setting.button_name} value={this.state.button_name} onChange={this.handleButtonNameChange} />
        </div>

        <div>
        <h6 className="Categories">Button Color:</h6>
          <div className="SubCategory">
            Button Color:
            <input name='background_color' type='color' value={this.state.setting.button_color} onChange={this.handleButtonColorChange}/>
          </div>
          <div className="SubCategory">
            Opacity:
            <select className='Change' value={this.state.setting.opacity} onChange={this.handleOpacityChange}>
              <option value='1'>1</option>              
              <option value='0.9'>.9</option>
              <option value='0.8'>.8</option>
              <option value='0.7'>.7</option>
              <option value='0.6'>.6</option>
              <option value='0.5'>.5</option>
              <option value='0.4'>.4</option>
              <option value='0.3'>.3</option>
              <option value='0.2'>.2</option>
              <option value='0.1'>.1</option>
              <option value='0'>0</option>
            </select>
          </div>
          </div>

          <div>
          <h6 className="Categories">Button Size:</h6>
          <div className="SubCategory">
            Button Width:
            <select className='Change' value={this.state.setting.button_width} onChange={this.handleButtonWidthChange}>
              <option value='25px'>25</option>              
              <option value='50px'>50</option>              
              <option value='75px'>75</option>              
              <option value='100px'>100</option>              
              <option value='125px'>125</option>              
              <option value='150px'>150</option>
              <option value='175px'>175</option>
              <option value='200px'>200</option>
              <option value='225px'>225</option>
              <option value='250px'>250</option>
              <option value='275px'>275</option>
              <option value='300px'>300</option>
              <option value='325px'>325</option>
              <option value='350px'>350</option>
              <option value='375px'>375</option>
              <option value='400px'>400</option>
              <option value='425px'>425</option>
              <option value='450px'>450</option>
              <option value='475px'>475</option>
              <option value='500px'>500</option> 
            </select>
          </div>
          <div className="SubCategory">
            Button Height:
            <select className='Change' value={this.state.setting.button_height} onChange={this.handleButtonHeightChange}>
            <option value='25px'>25</option>              
              <option value='50px'>50</option>              
              <option value='75px'>75</option>              
              <option value='100px'>100</option>              
              <option value='125px'>125</option>              
              <option value='150px'>150</option>
              <option value='175px'>175</option>
              <option value='200px'>200</option>
              <option value='225px'>225</option>
              <option value='250px'>250</option>
              <option value='275px'>275</option>
              <option value='300px'>300</option>
              <option value='325px'>325</option>
              <option value='350px'>350</option>
              <option value='375px'>375</option>
              <option value='400px'>400</option>
              <option value='425px'>425</option>
              <option value='450px'>450</option>
              <option value='475px'>475</option>
              <option value='500px'>500</option> 
            </select>
          </div>
        </div>

        <div>
          <h6 className="Categories">Button Shape:</h6>
          <div className="SubCategory">
            Button Shape:
            <select className='Change' value={this.state.setting.button_shape} onChange={this.handleButtonShapeChange}>
              <option value='0%'>0</option>
              <option value='1%'>1</option>
              <option value='2%'>2</option>
              <option value='3%'>3</option>
              <option value='4%'>4</option>
              <option value='5%'>5</option>
              <option value='10%'>10</option> 
              <option value='15%'>15</option> 
              <option value='20%'>20</option> 
              <option value='25%'>25</option> 
              <option value='30%'>30</option> 
              <option value='35%'>35</option> 
              <option value='40%'>40</option> 
              <option value='45%'>45</option> 
              <option value='50%'>50</option> 
            </select>
          </div>
        </div>

          <div>
            <h6 className="Categories">Button Padding:</h6>

          <div className="SubCategory">
            Button Padding Width:
            <select className='Change' value={this.state.setting.button_padding_width} onChange={this.handleButtonPaddingWidthChange}>
              <option value='4px'>4</option>              
              <option value='6px'>6</option>              
              <option value='8px'>8</option>              
              <option value='10px'>10</option>              
              <option value='12px'>12</option>
              <option value='14px'>14</option>
              <option value='16px'>16</option>
              <option value='18px'>18</option>
              <option value='20px'>20</option>
              <option value='22px'>22</option>
              <option value='24px'>24</option>
              <option value='26px'>26</option>
              <option value='28px'>28</option>
              <option value='30px'>30</option>
              <option value='32px'>32</option>
              <option value='34px'>34</option>
              <option value='36px'>36</option>
              <option value='38px'>38</option>
              <option value='40px'>40</option>
            </select>
          </div>
          <div className="SubCategory">
            Button Padding Height:
            <select className='Change' value={this.state.setting.button_padding_height} onChange={this.handleButtonPaddingHeightChange}>
              <option value='4px'>4</option>              
              <option value='6px'>6</option>              
              <option value='8px'>8</option>              
              <option value='10px'>10</option>              
              <option value='12px'>12</option>
              <option value='14px'>14</option>
              <option value='16px'>16</option>
              <option value='18px'>18</option>
              <option value='20px'>20</option>
              <option value='22px'>22</option>
              <option value='24px'>24</option>
              <option value='26px'>26</option>
              <option value='28px'>28</option>
              <option value='30px'>30</option>
              <option value='32px'>32</option>
              <option value='34px'>34</option>
              <option value='36px'>36</option>
              <option value='38px'>38</option>
              <option value='40px'>40</option>
            </select>
          </div>
          </div>

          <div>
            <h6 className="Categories">Button Text:</h6>

            <div className="SubCategory">
              Text:
              <input name='button_name' type='text' value={this.state.setting.button_text} onChange={this.handleButtonTextChange} />
            </div>
            <div className="SubCategory">
              Color:
              <input name='text_color' type='color' value={this.state.setting.text_color} onChange={this.handleTextColorChange}/>
            </div>
            <div className="SubCategory">
              Alignment:
              <select className='Change' value={this.state.setting.text_alignment} onChange={this.handleTextAlignmentChange}>
              <option value='center'>Center</option>              
              <option value='left'>Left</option>              
              <option value='right'>Right</option>              
              </select>
            </div>
            <div className="SubCategory">
              Decoration:
              <select className='Change' value={this.state.setting.text_decoration} onChange={this.handleTextDecorationChange}>
              <option value='none'>None</option>              
              <option value='overline'>Overline</option>              
              <option value='line-through'>Line-through</option>              
              <option value='underline'>Underline</option>              
              </select>
            </div>
            <div className="SubCategory">
              Transform:
              <select className='Change' value={this.state.setting.text_transform} onChange={this.handleTextTransformChange}>
              <option value='none'>None</option>              
              <option value='uppercase'>Uppercase</option>              
              <option value='lowercase'>Lowercase</option>              
              <option value='capitalize'>Capitalize</option>              
              </select>
            </div>
            <div className="SubCategory">
              Letter Spacing:
              <select className='Change' value={this.state.setting.letter_spacing} onChange={this.handleLetterSpacingChange}>
              <option value='none'>None</option>              
              <option value='-5px'>-5</option>              
              <option value='-4px'>-4</option>              
              <option value='-3px'>-3</option>              
              <option value='-2px'>-2</option>              
              <option value='-1px'>-1</option>
              <option value='0px'>0</option>
              <option value='1px'>1</option>
              <option value='2px'>2</option>
              <option value='3px'>3</option>
              <option value='4px'>4</option>
              <option value='5px'>5</option>
              <option value='6px'>6</option>
              <option value='7px'>7</option>
              <option value='8px'>8</option>
              <option value='9px'>9</option>
              <option value='10px'>10</option>
              <option value='11px'>11</option>
              <option value='12px'>12</option>
              <option value='13px'>13</option> 
              <option value='14px'>14</option>             
              <option value='15px'>15</option>             
              <option value='16px'>16</option>
              <option value='17px'>17</option>             
              <option value='18px'>18</option>             
              <option value='19px'>19</option>             
              <option value='20px'>20</option>
              </select>
            </div>
          </div>

          <div>
            <h6 className="Categories">Button Font:</h6>

          <div className="SubCategory">
            Font Family:
            <select className='Change' value={this.state.setting.font_family} onChange={this.handleFontFamilyChange}>
              <option value='Courier New'>Courier</option>              
              <option value='Franklin Gothic'>Gothic</option>  
              <option value='Gill Sans'>Sans</option>       
              <option value='Lucida Sans'>Lucida</option>              
              <option value='Segoe UI'>Segoe UI</option>
              <option value='Times New Roman'>Times New Roman</option>
              <option value='Trebuchet MS'>Trebuchet MS</option>
              <option value='Segoe UI Open Sans Helvetica Neue'>Segoe UI</option>
              <option value='Lobster'>Lobster</option>
              <option value='Dancing Script'>Dancing Script</option>
              <option value='Shadows Into Light'>Shadows Into Light</option>
              <option value='Amatic SC'>Amatic SC</option>
              <option value='Parmanent Marker'>Parmanent Marker</option>
              <option value='Cinzel'>Cinzel</option>
              <option value='Courgette'>Courgette</option>
              <option value='Caveat'>Caveat</option>
              <option value='Josefin Slab'>Josefin Slab</option>
              <option value='Monoton'>Monoton</option>
              <option value='Audiowide'>Audiowide</option>
              <option value='Homemade Apple'>Homemade Apple</option>
              <option value='Nothing You Could Do'>Nothing You Could Do</option>
              <option value='Mr Dafoe'>Mr Dafoe</option>
              <option value='Libre Barcode 39 Extended'>Libre Barcode 39 Extended</option>
              <option value='Black Ops One'>Black Ops One</option>
              <option value='Ubuntu Mono'>Ubuntu Mono</option>
              <option value='Chewy'>Chewy</option>
              <option value='Michroma'>Michroma</option>
              <option value='Berkshire Swash'>Berkshire Swash</option>
              <option value='VT323'>VT323</option>
              <option value='Notable'>Notable</option>
              <option value='Annie Use Your Telescope'>Annie Use Your Telescope</option>
              <option value='Faster One'>Faster One</option>
            </select>
          </div>
          <div className="SubCategory">
            Font Size:
              <select className='Change' value={this.state.setting.font_size} onChange={this.handleFontSizeChange}>
              <option value='4px'>4</option>              
              <option value='6px'>6</option>              
              <option value='8px'>8</option>              
              <option value='10px'>10</option>              
              <option value='12px'>12</option>
              <option value='14px'>14</option>
              <option value='16px'>16</option>
              <option value='18px'>18</option>
              <option value='20px'>20</option>
              <option value='22px'>22</option>
              <option value='24px'>24</option>
              <option value='26px'>26</option>
              <option value='28px'>28</option>
              <option value='30px'>30</option>
              <option value='32px'>32</option>
              <option value='34px'>34</option>
              <option value='36px'>36</option>
              <option value='38px'>38</option>
              <option value='40px'>40</option>
            </select>
          </div>
          <div className="SubCategory">
            Font Style:
            <select className='Change' value={this.state.setting.font_style} onChange={this.handleFontStyleChange}>
              <option value='normal'>Normal</option>
              <option value='italic'>Italic</option>
              <option value='oblique'>Oblique</option>
            </select> 
          </div>
          <div className="SubCategory">
            Font Weight:
            <select className='Change' value={this.state.setting.font_weight} onChange={this.handleFontWeightChange}>
              <option value='normal'>Normal</option>
              <option value='bold'>Bold</option>
            </select> 
          </div>
          <div className="SubCategory">
            Font Variant:
            <select className='Change' value={this.state.setting.font_variant} onChange={this.handleFontVariantChange}>
              <option value='normal'>Normal</option>
              <option value='small-caps'>Small Caps</option>
            </select> 
          </div>
          </div>

          <div>
            <h6 className="Categories">Button Border:</h6>
              
            <div className="SubCategory">
              Color:
              <input name='border_color' type='color' value={this.state.setting.border_color} onChange={this.handleBorderColorChange}/>
            </div>
            <div className="SubCategory">
              Border Thickness:
            <select className='Change' value={this.state.setting.border_thickness} onChange={this.handleBorderThicknessChange}>
              <option value='none'>None</option> 
              <option value='1px'>1</option> 
              <option value='2px'>2</option> 
              <option value='3px'>3</option> 
              <option value='4px'>4</option> 
              <option value='5px'>5</option>              
              <option value='6px'>6</option>
              <option value='7px'>7</option>              
              <option value='8px'>8</option>  
              <option value='9px'>9</option>            
              <option value='10px'>10</option>              
              <option value='12px'>12</option>
              <option value='14px'>14</option>
              <option value='16px'>16</option>
              <option value='18px'>18</option>
              <option value='20px'>20</option>
              <option value='22px'>22</option>
              <option value='24px'>24</option>
              <option value='26px'>26</option>
              <option value='28px'>28</option>
              <option value='30px'>30</option>
              <option value='32px'>32</option>
            </select>
            </div>
          </div>

          <div>
            <h6 className="Categories">Button Shadow:</h6>

            <div className="SubCategory">
              Shadow Color:
              <input name='shadow_color' type='color' value={this.state.setting.shadow_color} onChange={this.handleShadowColorChange}/>
            </div>
            <div className="SubCategory">
              Vertical Offset:
              <select className='Change' value={this.state.setting.shadow_vertical_offset} onChange={this.handleShadowVerticalOffsetChange}>
              <option value='0px'>0</option>
              <option value='-50px'>-50</option>
              <option value='-40px'>-40</option>
              <option value='-30px'>-30</option>
              <option value='-25px'>-25</option>
              <option value='-20px'>-20</option>
              <option value='-16px'>-16</option>
              <option value='-14px'>-14</option>
              <option value='-12px'>-12</option>
              <option value='-10px'>-10</option>
              <option value='-9px'>-9</option>
              <option value='-8px'>-8</option>
              <option value='-7px'>-7</option>
              <option value='-6px'>-6</option>
              <option value='-5px'>-5</option>
              <option value='-4px'>-4</option>
              <option value='-3px'>-3</option>
              <option value='-2px'>-2</option>
              <option value='-1px'>-1</option>
              <option value='1px'>1</option>
              <option value='2px'>2</option>
              <option value='3px'>3</option>
              <option value='4px'>4</option>
              <option value='5px'>5</option>
              <option value='6px'>6</option>
              <option value='7px'>7</option>
              <option value='8px'>8</option>
              <option value='9px'>9</option>
              <option value='10px'>10</option>
              <option value='12px'>12</option>
              <option value='14px'>14</option>
              <option value='16px'>16</option>
              <option value='20px'>20</option>
              <option value='25px'>25</option>
              <option value='30px'>30</option>
              <option value='40px'>40</option>
              <option value='50px'>50</option>
              </select> 
            </div>
            <div className="SubCategory">
              Horizontal Offset:
              <select className='Change' value={this.state.setting.shadow_horizontal_offset} onChange={this.handleShadowHorizontalOffsetChange}>
              <option value='0px'>0</option>
              <option value='-50px'>-50</option>
              <option value='-40px'>-40</option>
              <option value='-30px'>-30</option>
              <option value='-25px'>-25</option>
              <option value='-20px'>-20</option>
              <option value='-16px'>-16</option>
              <option value='-14px'>-14</option>
              <option value='-12px'>-12</option>
              <option value='-10px'>-10</option>
              <option value='-9px'>-9</option>
              <option value='-8px'>-8</option>
              <option value='-7px'>-7</option>
              <option value='-6px'>-6</option>
              <option value='-5px'>-5</option>
              <option value='-4px'>-4</option>
              <option value='-3px'>-3</option>
              <option value='-2px'>-2</option>
              <option value='-1px'>-1</option>
              <option value='1px'>1</option>
              <option value='2px'>2</option>
              <option value='3px'>3</option>
              <option value='4px'>4</option>
              <option value='5px'>5</option>
              <option value='6px'>6</option>
              <option value='7px'>7</option>
              <option value='8px'>8</option>
              <option value='9px'>9</option>
              <option value='10px'>10</option>
              <option value='12px'>12</option>
              <option value='14px'>14</option>
              <option value='16px'>16</option>
              <option value='20px'>20</option>
              <option value='25px'>25</option>
              <option value='30px'>30</option>
              <option value='40px'>40</option>
              <option value='50px'>50</option>
              </select> 
            </div>
            <div className="SubCategory">
              Spread Offset:
              <select className='Change' value={this.state.setting.shadow_spread_offset} onChange={this.handleShadowSpreadOffsetChange}>
              <option value='0px'>0</option>
              <option value='-50px'>-50</option>
              <option value='-40px'>-40</option>
              <option value='-30px'>-30</option>
              <option value='-25px'>-25</option>
              <option value='-20px'>-20</option>
              <option value='-16px'>-16</option>
              <option value='-14px'>-14</option>
              <option value='-12px'>-12</option>
              <option value='-10px'>-10</option>
              <option value='-9px'>-9</option>
              <option value='-8px'>-8</option>
              <option value='-7px'>-7</option>
              <option value='-6px'>-6</option>
              <option value='-5px'>-5</option>
              <option value='-4px'>-4</option>
              <option value='-3px'>-3</option>
              <option value='-2px'>-2</option>
              <option value='-1px'>-1</option>
              <option value='1px'>1</option>
              <option value='2px'>2</option>
              <option value='3px'>3</option>
              <option value='4px'>4</option>
              <option value='5px'>5</option>
              <option value='6px'>6</option>
              <option value='7px'>7</option>
              <option value='8px'>8</option>
              <option value='9px'>9</option>
              <option value='10px'>10</option>
              <option value='12px'>12</option>
              <option value='14px'>14</option>
              <option value='16px'>16</option>
              <option value='20px'>20</option>
              <option value='25px'>25</option>
              <option value='30px'>30</option>
              <option value='40px'>40</option>
              <option value='50px'>50</option>
              </select> 
            </div>
            <div className="SubCategory">
              Shadow Blur:
              <select className='Change' value={this.state.setting.shadow_blur} onChange={this.handleShadowBlurChange}>
              <option value='0px'>0</option>
              <option value='-50px'>-50</option>
              <option value='-40px'>-40</option>
              <option value='-30px'>-30</option>
              <option value='-25px'>-25</option>
              <option value='-20px'>-20</option>
              <option value='-16px'>-16</option>
              <option value='-14px'>-14</option>
              <option value='-12px'>-12</option>
              <option value='-10px'>-10</option>
              <option value='-9px'>-9</option>
              <option value='-8px'>-8</option>
              <option value='-7px'>-7</option>
              <option value='-6px'>-6</option>
              <option value='-5px'>-5</option>
              <option value='-4px'>-4</option>
              <option value='-3px'>-3</option>
              <option value='-2px'>-2</option>
              <option value='-1px'>-1</option>
              <option value='1px'>1</option>
              <option value='2px'>2</option>
              <option value='3px'>3</option>
              <option value='4px'>4</option>
              <option value='5px'>5</option>
              <option value='6px'>6</option>
              <option value='7px'>7</option>
              <option value='8px'>8</option>
              <option value='9px'>9</option>
              <option value='10px'>10</option>
              <option value='12px'>12</option>
              <option value='14px'>14</option>
              <option value='16px'>16</option>
              <option value='20px'>20</option>
              <option value='25px'>25</option>
              <option value='30px'>30</option>
              <option value='40px'>40</option>
              <option value='50px'>50</option>
              </select> 
            </div>
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