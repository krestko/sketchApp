import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

class NavBar extends Component {

  render() {
    return (
      <div id='Nav-bar'>
        <div>{`{⌘App ⌘Sketch}`}</div>
        <div>HOME</div>
        <div>INFO</div>
        <Link to={`/components`}><div>PROJECTS</div></Link>
      </div>
    )
  }
}
export default NavBar;