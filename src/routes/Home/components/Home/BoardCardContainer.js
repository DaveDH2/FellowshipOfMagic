'use strict'

import React from 'react'
import { DropTarget } from 'react-dnd'
import Card from './Card'
import { canMoveCard, moveCardPosition } from './Game'
import ItemTypes from './ItemTypes'

const cardTarget = {
  canDrop(props) {
    return canMoveCard(props.x);
  },

  drop(props) {
    moveCardPosition(props.x)
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

@DropTarget(ItemTypes.CARD, cardTarget, collect)
export default class BoardCardContainer extends Component {
  renderOverlay(color) {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          zIndex: 1,
          opacity: 0.5,
          backgroundColor: color
        }}
      />
    )
  }

  render() {
    const {x, connectDropTarget, isOver, canDrop, children } = this.props;
    const colorOfBg = x !== this.props.x

    return connectDropTarget(
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      >
        <CardContainer>
          {children}
        </CardContainer>
        {isOver && !canDrop && this.renderOverlay('red')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('blue')}
      </div>
    )
  }
}
