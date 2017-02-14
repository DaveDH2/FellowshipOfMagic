import React, { Component, PropTypes } from 'react' // eslint-disable-line

// Components
import classes from './Home.scss'
import Card from './Card.js'
import CardContainer from './CardContainer'

var Board = React.createClass({

  renderCards: function (x) {

    var cardItemProp = this.props.cardPosition[0];
    var colorOfBg = x === cardItemProp ? 'green' : 'white';
    var cardItem = x === cardItemProp ? <Card /> : null;
    return (
      <div key={x}>
        <CardContainer colorOfBg={colorOfBg}>
          {cardItem}
        </CardContainer>
      </div>
    )
  },

  render: function() {
    var cardItems = [];
    for (let i = 0; i < 6; i++) {
     cardItems.push(this.renderCards(i));
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
});

module.exports = Board;
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
