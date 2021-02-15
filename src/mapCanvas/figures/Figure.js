export default class Figure {
  constructor(x, y, coords, canvas, hoverColor) {
    this.coords = coords
    this.x = x
    this.y = y
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.hoverColor = hoverColor

    this.drawFigure()
  }
}