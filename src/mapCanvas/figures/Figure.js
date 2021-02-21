export default class Figure {
  constructor(x, y, coords, canvas, hoverColors) {
    this.coords = coords
    this.x = x
    this.y = y
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.hoverColors = hoverColors

    this.draw()
  }

  draw() {
    this.ctx.beginPath(this.ctx.isPointInPath(this.x, this.y))
    this.shape()
    this.ctx.fillStyle = this.ctx.isPointInPath(this.x, this.y) 
    ? this.hoverColors[0] : this.hoverColors[1]
    this.ctx.fill()
  }

  shape() {
    throw new Error('Shape it\'s required function')
  }
}