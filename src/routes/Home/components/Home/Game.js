let cardPosition = [3];
let observer = null;

function emitChange() {
  observer(cardPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();

  return () => {
    observer = null;
  }
}

export function canMoveCard(toX) {
  const [x] = cardPostion;

  return (x !== toX)
}

export function moveCardPosition(x) {
  cardPosition = [x];
  emitChange();
}
