import Figure from './Figure'

export default class Poly extends Figure {
  constructor(x, y, coords, canvas, hoverColor) {
    super(x, y, coords, canvas, hoverColor)
  }

  drawFigure() {
    this.ctx.beginPath(this.ctx.isPointInPath(this.x, this.y))
    this.ctx.moveTo(this.coords[0], this.coords[1])
    for(let j = 2; j < this.coords.length; j+=2) {
      this.ctx.lineTo(this.coords[j], this.coords[j+1])
    }
    this.ctx.closePath()
    this.ctx.fillStyle = this.ctx.isPointInPath(this.x, this.y) 
    ? this.hoverColor : 'transparent'
    this.ctx.fill()
  }
} 