import React, { Component } from 'react';
import Settings from '../api/SettingsAPI';
import ResponsiveState from '../components/ResponsiveState/ResponsiveState'

class ResponsiveStatePage extends Component {
  state = {
    setting: null,
    flipped: null
  }
  
  componentDidMount() {
    Settings.fetchSettingBySettingID(this.props.match.params.users, this.props.match.params.settings)
      .then(json => this.setState({
        setting: json
    }))
  }

// toggleHidden = () => {
//   this.setState({ isHidden: !this.state.isHidden })
// }
// onHover={() => this.props.toggleHidden()}

  // handlePixelDisplay = () => {
  //   let pixel = [];
  //   let i = this.state.setting.pixel_count
  //   do {
  //     i -= 1;
  //     pixel.push('PIXEL')
  //   }
  //   while (i > 0)
  //   console.log(pixel)
  // return pixel.map((pixel, index) => {
  //   return <div key={index}>{pixel}</div>
  // })
  // }
  negState = () => {
    this.setState({
      flipped: false
    });
  }

  posState = () => {
    this.setState({
      flipped: true
    });
  }

  render() {
    if(this.state.setting) {
      return <ResponsiveState setting={this.state.setting} flipped={this.state.flipped}negState={this.negState} display={this.state.display} posState={this.posState}/>
    }

    return (
      <div className='App'>
      </div>
    )
  }
}
export default ResponsiveStatePage;