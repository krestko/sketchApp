import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class PaddingSelectors extends Component {

  render() {
    return (
      <div>
        <div className="SubCategory">
          Button Padding Width:
          <select className='Change' value={this.props.widthValue} onChange={this.props.widthHandler}>
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
          <select className='Change' value={this.props.heightValue} onChange={this.props.heightHandler}>
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
    )
  }
}
export default PaddingSelectors;