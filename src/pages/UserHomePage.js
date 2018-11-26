import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Components from '../api/ComponentsAPI';
import '../App.css';
import './UserHomePage.css'

class UserHomePage extends Component {
  state = {
    component: null,
    fonts: null
  }

  componentDidMount() {
    Components.fetchComponentByID(this.props.match.params.components)
      .then((json) => this.setState({
        component: json
    }))
  }

  logout = () => {
    this.props.auth.logout();
  }
  // deleteThisUser = (userID) => {
  //   Users.deleteUser(userID)
  // }

  // updateThisUser = (userID, userObject) => {
  //   Users.updateUser(userID, userObject)
  //     .then(json => {this.setState({
  //       updatedUser: json
  // })})}

  render() {
    
    return (
      <div className="App">
      {this.state.component ? 
      <div>
        <div className='Links'>
          <div className='Link'>
            <Link to={`/components`}>Home</Link>
          </div>
          <div className='Link'>
            <a style={{ cursor: 'pointer' }} onClick={this.logout}>Log Out</a>
          </div>
        </div>
          <h1>{this.state.component.component_name}</h1>
          <div className='Link'>
            <Link to={`/components/${this.state.component.id}/settings`}>Buttons<br /></Link>
          </div>
        </div> : null}
      </div>      
    );
  }
}

export default UserHomePage;