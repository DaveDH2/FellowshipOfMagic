import React, { Component } from 'react' // eslint-disable-line

// Components
import Theme from 'theme'

import classes from './Home.scss'

export default class Home extends Component {
  render () {
    return (
      <div>
        <div className={classes['container']} style={{ color: Theme.palette.primary2Color }}>
          Yolo!
        </div>
        <div className={classes['container-1']} >hahaha!</div>
      </div>
    )
  }
}


// // export const Home = () => (
// //   <div className={classes['container']} style={{ color: Theme.palette.primary2Color }}>
// //     <h2>Home done!</h2>
// //     <div>
// //       <h2>This will have the sign-in</h2>
// //     </div>
// //   </div>
// // )
//
// export default Home
