// import React, { Component } from 'react';
// import './ResponsiveState.css'

// class ResponsiveState extends Component {
//   mouseOut = () => {
//     this.props.negState();
//   }
  
//   mouseOver = () => {
//     this.props.posState();
//   }

//   handleDisplay = () => {
//     let pixel = [];
//     let i = this.props.setting.pixel_count
//     do {
//       i -= 1;
//     pixel.push(<button key={i} className={'poop'} onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()} style={{margin: '5px', width: '100px', height: '50px', backgroundColor: `${this.props.setting.pixel_color}`, display: 'inline-block'}}>
//     <p style={{color: `${this.props.setting.background_color}`}}>{this.props.setting.setting_name}</p>
//     </button>)
//     }
//     while (i > 0)
//     return pixel;
//   }

//   render() {
 
//     // let className='___ENTER___'
//     // const label = flipped => {
//     //   if (flipped === null || flipped !== true) {
//     // 	  return className;
//     //   } else {
//     //     className='___'
//     //     return className;
//     //   }
//     // }
//     // {label(this.props.flipped)}
//     // console.log(className)

//     return (
//       <div className='App' >
//         <div style={{backgroundColor: `${this.props.setting.background_color}`}}>{this.handleDisplay()}</div>
//       </div>
//     )
//   }
// }
// export default ResponsiveState;