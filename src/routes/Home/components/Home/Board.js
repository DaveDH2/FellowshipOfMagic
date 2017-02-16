'use strict'

import React, { Component, PropTypes } from 'react' // eslint-disable-line

// Components
import classes from './Home.scss'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Card from './Card.js'
import BoardCardContainer from './BoardCardContainer'

@DragDropContext(HTML5Backend)
export default class Board extends Component {

  renderCardContainer(i) {
    return (
      <div key={i}>
        <BoardCardContainer x={x}>
          {this.renderCard(x)}
        </BoardCardContainer>
      </div>
    )
  }

  renderCards(x) {
    const [cardPosition] = this.props.cardPosition[0];
    const isCardHere = x === cardPosition;
    return isCardHere ? <Card /> : null
  }

  render() {
    var cardItems = [];
    for (let i = 0; i < 6; i++) {
     cardItems.push(this.renderCardContainer(i));
    }
    return (
       <div>
         <div className={classes['div-container']}>
           <div className={classes['container-1']} >
             {cardItems}
           </div>
         </div>
       </div>
    )
  }
};


// }) {
//   renderCards(i) {
//     return (
//       <div key={i}>
//         <CardContainer>
//           {this.renderCardItems(i)}
//         </CardContainer>
//       </div>
//     )
//   }
//
//   renderCardItems(x) {
//     console.log(x, this.props.cardPosition)
//     this.props.cardPosition[0];
//   }
//
//   render () {
//     var cardItems = [];
//     for (let i = 0; i < 6; i++) {
//       cardItems.push(this.renderCards(i));
//     }
//     return (
//       <div>
//         <div className={classes['div-container']}>
//           <div className={classes['container-1']} >
//             {cardItems}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

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
