'use strict'

import React, { Component } from 'react' // eslint-disable-line

// Components
import classes from './Home.scss'
import Board from './Board'
import ReactDOM from 'react-dom'
import { observe } from './Game';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.unobserve = observe(this.handleChange.bind(this));
  }

  handleChange(cardPosition) {
    const nextState = { cardPosition };
    if (this.state) {
      this.setState(nextState);
    } else {
      this.state = nextState;
    }
  }

  componentWillUnmount() {
    this.unobserve();
  }

  render() {
    const { cardPosition } = this.state;
    return (
      <div>
        <Board cardPosition={cardPosition} />
      </div>
    )
  }
}
