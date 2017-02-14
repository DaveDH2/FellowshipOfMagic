export function observe(receive) {
  setInterval(() => receive([
    Math.floor(Math.random()* 6)
  ]), 400)
}
