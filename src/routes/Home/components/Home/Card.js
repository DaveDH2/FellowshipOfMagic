'use strict'

import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
import classes from './Home.scss';

const cardSource = {
  beginDrag() {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

@DragSource(ItemTypes.CARD, cardSource, collect)
export default class Card extends Component {

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className={classes['item']} style={{
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1
      }}>
        yolo
      </div>
    )
  }
}
