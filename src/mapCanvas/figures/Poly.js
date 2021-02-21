import Figure from './Figure'

export default class Poly extends Figure {
  constructor(x, y, coords, canvas, hoverColors) {
    super(x, y, coords, canvas, hoverColors)
  }

  shape() {
    this.ctx.moveTo(this.coords[0], this.coords[1])
    for(let j = 2; j < this.coords.length; j+=2) {
      this.ctx.lineTo(this.coords[j], this.coords[j+1])
    }
    this.ctx.closePath()
  }
}
