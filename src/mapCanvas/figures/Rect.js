import Figure from './Figure'

export default class Rect extends Figure {
  constructor(x, y, coords, canvas, hoverColor) {
    super(x, y, coords, canvas, hoverColor)
  }

  drawFigure() {
    this.ctx.beginPath(this.ctx.isPointInPath(this.x, this.y))
    this.ctx.rect(this.coords.x, this.coords.y, this.coords.w, this.coords.h)
    this.ctx.fillStyle = this.ctx.isPointInPath(this.x, this.y) 
    ?  this.hoverColor : 'transparent'
    this.ctx.fill()
  }
}
