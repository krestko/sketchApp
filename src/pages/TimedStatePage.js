// import React, { Component } from 'react';
// import Settings from '../api/SettingsAPI';

// class TimedStatePage extends Component {
//   state = {
//     setting: null
//   }

//   componentDidMount() {
//     Settings.fetchSettingBySettingID(this.props.match.params.users, this.props.match.params.settings)
//       .then(json => this.setState({
//         setting: json
//     }))
//   }

//   handlePixelDisplay = () => {
//     // console.log('HELLO', this.state.setting.pixel_count -= 1)
//     let pixel = [];
//     let i = this.state.setting.pixel_count
//     do {
//       i -= 1;
//       pixel.push('PIXEL')
//     }
//     while (i > 0)
//     console.log(pixel)
//     return pixel.map((pixel, index) => {
//       return <div key={index}>{pixel}</div>
//     })
//   }

// //   var i = 0;
// // do {
// //   i += 1;
// //   console.log(i);
// // } while (i < 5)

//   render() {

//     return (
//       <div className='App'>
//         <h1>Timed State</h1>
//         {this.state.setting ? this.handlePixelDisplay() : null}
//       </div>
//     )
//   }
// }
// export default TimedStatePage;