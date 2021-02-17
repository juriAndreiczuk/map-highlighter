import Figure from './Figure'

export default class Rect extends Figure {
  constructor(x, y, coords, canvas, hoverColors) {
    super(x, y, coords, canvas, hoverColors)
  }

  drawFigure() {
    this.ctx.beginPath(this.ctx.isPointInPath(this.x, this.y))
    this.ctx.rect(this.coords.x, this.coords.y, this.coords.w, this.coords.h)
    this.ctx.fillStyle = this.ctx.isPointInPath(this.x, this.y) 
    ?  this.hoverColors[0] : this.hoverColors[1]
    this.ctx.fill()
  }
}
