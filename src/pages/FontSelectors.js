import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class FontSelectors extends Component {

  render() {
    return (
      <div>
        <div className="SubCategory">
          Font Family:
          <select className='Change' value={this.props.fontFamilyValue} onChange={this.props.fontFamilyHandler}>
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
          <select className='Change' value={this.props.fontSizeValue} onChange={this.props.fontSizeHandler}>
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
          <select className='Change' value={this.props.styleValue} onChange={this.props.styleHandler}>
            <option value='normal'>Normal</option>
            <option value='italic'>Italic</option>
            <option value='oblique'>Oblique</option>
          </select> 
        </div>

        <div className="SubCategory">
          Font Weight:
          <select className='Change' value={this.props.weightValue} onChange={this.props.weightHandler}>
            <option value='normal'>Normal</option>
            <option value='bold'>Bold</option>
          </select> 
        </div>

        <div className="SubCategory">
          Font Variant:
          <select className='Change' value={this.props.fontVariantValue} onChange={this.props.fontVariantHandler}>
            <option value='normal'>Normal</option>
            <option value='small-caps'>Small Caps</option>
          </select> 
        </div>
      </div>
    )
  }
}
export default FontSelectors;