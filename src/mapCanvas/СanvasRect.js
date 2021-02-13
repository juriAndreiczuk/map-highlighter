import Canvas from './Сanvas'

class CanvasRect extends Canvas {
  constructor(props) {
    super(props)
    this.setCoods()
    this.canvas.onmousemove = (e) => {
      this.mapHilight(e)
    }
  }

  setCoods() {
    for(const co of this.canvasMap.coords) {
      this.info.coords.push({
        x: co[0], y: co[1], w: co[2] - co[0], h: co[3] - co[1]
      })
    }
  }

  drawSquare(x, y, coords) {
    this.ctx.beginPath(this.ctx.isPointInPath(x, y))
    this.ctx.rect(coords.x, coords.y, coords.w, coords.h)
    this.ctx.fillStyle = this.ctx.isPointInPath(x, y) ?  this.canvasMap.hoverColor : 'transparent'
    this.ctx.fill()
  }

  mapHilight(e) {
    const rect = this.canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    for(let i = 0; i < this.info.coords.length; i++) {
      this.drawSquare(x, y, this.info.coords[i])
      if(this.ctx.isPointInPath(x, y)) {
        this.currentLink = this.info.hrefs[i]
      }
    }
  }
}

export default CanvasRect
