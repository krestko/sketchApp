import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './UserSetting/UserSetting.css'

class ColorSelectors extends Component {

  render() {
    return (
      <div>
        <div className='SubCategory'>
          Color:
          <input name={this.props.colorName} type='color' value={this.props.colorValue} onChange={this.props.colorHandler}/>
        </div>
        <div className='SubCategory'>
          Opacity:
          <select className='Change' value={this.props.opacityValue} onChange={this.props.opacityHandler}>
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
    )
  }
}
export default ColorSelectors;