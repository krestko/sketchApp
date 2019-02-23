import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class SizeSelectors extends Component {

  render() {
    return (
      <div>
        <div className='SubCategory'>
          Button Width:
          <select className='Change' value={this.props.widthValue} onChange={this.props.widthHandler}>
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
          <select className='Change' value={this.props.heightValue} onChange={this.props.heightHandler}>
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
    )
  }
}
export default SizeSelectors;