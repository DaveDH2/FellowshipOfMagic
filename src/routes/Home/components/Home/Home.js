import React, { Component } from 'react' // eslint-disable-line

// Components
import classes from './Home.scss'
import Board from './Board'
import ReactDOM from 'react-dom'
import { observe } from './Game';

export default class Home extends Component {
  return() {
    return (
      <div>
        <Board cardPosition={cardPosition} />
      </div>
    )
  }
}

const rootEl = document.getElementById('root2');

observe(cardPosition =>
  ReactDOM.render(
    <Board cardPosition={cardPosition} />,
    rootEl
  )
);

  // render () {
  //   return (
  //     observe(cardPosition => {
  //       <Board cardPosition={cardPosition} />
  //     })
  //   )
  // }
