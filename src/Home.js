import React, { Component } from 'react';
import App from './App';
import './App.css'

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() &&
          <div className="container column">
              <a
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out
              </a>
            <App />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column">
              <div className='Logo'>
              <h1>{`{⌘App ⌘Sketch}`}</h1>
              <p>Copy-Paste Style Generations through Drop-Down Design</p>
              <h4>
                <a className='Logo' style={{ cursor: 'pointer' }} onClick={this.login}>
                  Begin
                </a>
              </h4>
              </div>
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;