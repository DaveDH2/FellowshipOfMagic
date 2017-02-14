import React, { Component } from 'react';
import classes from './Home.scss'

export default class CardContainer extends Component {
  render() {
    var colorBg = this.props.colorOfBg;
    const fill = colorBg === 'green' ? 'green' : 'white';
    const stroke = colorBg === 'green'? 'white' : 'black'
    console.log("thelosd", colorBg)
    return (
      <div style={{ backgroundColor: fill, color: stroke }} className={classes['card-container']}>
        {this.props.children}
      </div>
    )
  }
}

//
