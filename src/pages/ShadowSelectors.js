import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class ShadowSelectors extends Component {

  render() {
    return (
      <div>
        <div className="SubCategory">
          Shadow Color:
          <input name={this.props.name} type='color' value={this.props.shadowColorValue} onChange={this.props.shadowColorHandler} />
        </div>

        <div className="SubCategory">
          Vertical Offset:
          <select className='Change' value={this.props.verticalOffsetValue} onChange={this.props.verticalOffsetHandler}>
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
          <select className='Change' value={this.props.horizontalOffsetValue} onChange={this.props.horizontalOffsetHandler}>
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
          <select className='Change' value={this.props.spreadOffsetValue} onChange={this.props.spreadOffsetHandler}>
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
          <select className='Change' value={this.props.shadowBlurValue} onChange={this.props.shadowBlurHandler}>
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
    )
  }
}
export default ShadowSelectors;