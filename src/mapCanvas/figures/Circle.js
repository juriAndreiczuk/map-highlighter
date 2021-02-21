import Figure from './Figure'

export default class Circle extends Figure {
  constructor(x, y, coords, canvas, hoverColors) {
    super(x, y, coords, canvas, hoverColors)
  }

  shape() {
    this.ctx.arc(
      this.coords[0],
      this.coords[1],
      this.coords[2],
      0, 2 * Math.PI
    )
  }
}
