import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class ShapeSelectors extends Component {

  render() {
    return (
      <div>
        <div className="SubCategory">
          Button Shape:
          <select className='Change' value={this.props.shapeValue} onChange={this.props.shapeHandler}>
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
    )
  }
}
export default ShapeSelectors;