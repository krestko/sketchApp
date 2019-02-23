import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class NameSelectors extends Component {
  state = {
    name: undefined
  }

  handleNameState = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <div>
        <input className="Categories" name={this.props.settingName} type='text' value={this.state.name} onChange={this.props.settingHandler} />
      </div>
    )
  }
}
export default NameSelectors;