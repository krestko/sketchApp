import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import '../../App.css';

class NavBar extends Component {

  render() {
    return (
      <div id='Nav-bar'>
        <div>{`{⌘App ⌘Sketch}`}</div>
        <Link to={'/'}><div className='Nav-link'>HOME</div></Link>
        <div>INFO</div>
        <Link to={`/components`}><div className='Nav-link'>PROJECTS</div></Link>
      </div>
    )
  }
}
export default NavBar;