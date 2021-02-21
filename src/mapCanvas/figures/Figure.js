export default class Figure {
  constructor(x, y, coords, canvas, hoverColors) {
    this.coords = coords
    this.x = x
    this.y = y
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.hoverColors = hoverColors

    this.drawFigure()
  }

  drawFigure() {
    throw new Error('drawFigure is requred function')
  }
}