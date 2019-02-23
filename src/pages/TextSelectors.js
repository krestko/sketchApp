import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class TextSelectors extends Component {

  render() {
    return (
      <div>
        <div className="SubCategory">
          Text:
          <input name={this.props.name} type='text' value={this.props.nameValue} onChange={this.props.nameHandler} />
        </div>

        <div className="SubCategory">
          Color:
          <input name={this.props.color} type='color' value={this.props.colorValue} onChange={this.props.colorHandler}/>
        </div>

        <div className="SubCategory">
          Alignment:
          <select className='Change' value={this.props.alignmentValue} onChange={this.props.alignmentHandler}>
            <option value='center'>Center</option>              
            <option value='left'>Left</option>              
            <option value='right'>Right</option>              
          </select>
        </div>

        <div className="SubCategory">
          Decoration:
          <select className='Change' value={this.props.decorationValue} onChange={this.props.decorationHandler}>
            <option value='none'>None</option>              
            <option value='overline'>Overline</option>              
            <option value='line-through'>Line-through</option>              
            <option value='underline'>Underline</option>              
          </select>
        </div>

        <div className="SubCategory">
          Transform:
          <select className='Change' value={this.props.transformValue} onChange={this.props.transformHandler}>
            <option value='none'>None</option>              
            <option value='uppercase'>Uppercase</option>              
            <option value='lowercase'>Lowercase</option>              
            <option value='capitalize'>Capitalize</option>              
          </select>
        </div>

        <div className="SubCategory">
          Letter Spacing:
          <select className='Change' value={this.props.spacingValue} onChange={this.props.spacingHandler}>
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
    )
  }
}
export default TextSelectors;