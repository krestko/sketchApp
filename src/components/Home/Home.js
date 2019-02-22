import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Home.css'

class Home extends Component {

  componentsDisplay = () => {
    return this.props.components.map((component) => {
      return (<div key={component.id} className='Components'>
        <Link className='Content-link' to={`/components/${component.id}`}>{component.component_name}</Link><br/>
        <Link className='Content-link' to={`/components`} onClick={() => this.props.deleteThis(component.id)}>[!DELETE]</Link>
        </div>)
    }
  )}

  render() {
    return (
      <div className='Grid-item-2'>
      {this.componentsDisplay()}
      </div>
    );
  }
}

export default Home;