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
  displaySettings = () => {
    return (
      <div id="Grid-container">
        <div className='Grid-item-1'>
          {this.state.component.component_name}
        </div>
      <div className='Grid-item-2'>
        <Link className='Settings' to={`/components/${this.state.component.id}/settings`}>Buttons<br /></Link>
        <Link className='Settings' to={`/components/${this.state.component.id}/settings`}>Links<br /></Link>
        <Link className='Settings' to={`/components/${this.state.component.id}/settings`}>Divs<br /></Link>
        <Link className='Settings' to={`/components/${this.state.component.id}/settings`}>Text<br /></Link>
        <Link className='Settings' to={`/components/${this.state.component.id}/settings`}>Layouts<br /></Link>
        <Link className='Settings' to={`/components/${this.state.component.id}/settings`}>Images<br /></Link>
        <Link className='Settings' to={`/components/${this.state.component.id}/settings`}>Animations<br /></Link>
        <Link className='Settings' to={`/components/${this.state.component.id}/settings`}>Templates<br /></Link>

      </div>
    </div>)
  }

  // logout = () => {
  //   this.props.auth.logout();
  // }
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
      <div>
      {this.state.component ? this.displaySettings() : null}
      </div>      
    );
  }
}

export default UserHomePage;