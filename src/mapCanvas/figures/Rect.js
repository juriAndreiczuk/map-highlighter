import Figure from './Figure'

export default class Rect extends Figure {
  constructor(x, y, coords, canvas, hoverColors) {
    super(x, y, coords, canvas, hoverColors)
  }

  shape() {
    this.ctx.rect(
      this.coords.x,
      this.coords.y,
      this.coords.w,
      this.coords.h
    )
  }
}
