import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class MarginSelectors extends Component {

  render() {
    return (
      <div className='Landing-grid-container'>
        <div id='Title'>
          {`{⌘App ⌘Sketch}`}
        </div>
        <div className='Body'>
          Copy-Paste Style Generations through Drop-Down Design
        </div>
        <Link id='Enter' to={`/components`}><div>ENTER</div></Link>
      </div>
    )
  }
}
export default MarginSelectors;