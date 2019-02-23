import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class BorderSelectors extends Component {

  render() {
    return (
      <div>
        <div className="SubCategory">
          Color:
          <input name='border_color' type='color' value={this.props.borderColorValue} onChange={this.props.borderColorHandler}/>
        </div>

        <div className="SubCategory">
          Border Thickness:
          <select className='Change' value={this.props.thicknessValue} onChange={this.props.thicknessHandler}>
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
    )
  }
}
export default BorderSelectors;