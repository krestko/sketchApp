import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Home.css'

class Home extends Component {

  componentsDisplay = () => {
    return this.props.components.map((component) => {
      return (<div key={component.id}>
        <Link to={`/components/${component.id}`}>{component.component_name}<br /></Link>
        <Link to={`/home`} onClick={() => this.props.deleteThis(component.id)}>[!delete]</Link>
        </div>)
    }
  )}

  render() {
    return (
      <div className="App">
      {this.componentsDisplay()}
      </div>
    );
  }
}

export default Home;