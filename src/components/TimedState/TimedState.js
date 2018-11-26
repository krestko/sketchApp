import React, { Component } from 'react';

class TimedState extends Component {

  gameReveal = () => {
    return <h3>OF THE STATE OF TIME</h3>
  }

  render() {
    return (
      <div className='App'>
        <div onClick={() => this.gameReveal()}>Timed State</div>
      </div>
    )
  }
}
export default TimedState;