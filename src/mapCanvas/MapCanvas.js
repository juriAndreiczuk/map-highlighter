import ImageMap from './ImageMap'
import Rect from './figures/Rect'
import Poly from './figures/Poly'

export default class MapCanvas {
  constructor(props) {
    this.canvas = document.querySelector(`#${props.canvasId}`)
    this.wrap = document.querySelector(props.wrap)
    this.ctx = this.canvas.getContext('2d')
    this.imgMap = new ImageMap(props.mapId)
    this.currentLink = location.href
    this.hoverColors = props.hoverColors

    this.canvas.onmouseleave = () =>
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.canvas.onmousemove = (e) =>
      this.mapHilight(e)

    this.canvas.onclick = () =>
      location.href = this.currentLink
  }

  refreshCanvasData(e) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    const rect = this.canvas.getBoundingClientRect()
    this.canvas.width = this.wrap.offsetWidth
    this.canvas.height = this.wrap.offsetHeight

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top 
    }
  }

  mapHilight(e) {
    const { x , y } = this.refreshCanvasData(e) 
    this.imgMap.resize()

    for(let i = 0; i < this.imgMap.coords.length; i++) {
      const figure = this.imgMap.areas[i].shape === 'rect' 
      ? new Rect(x, y, this.imgMap.coordsSquare[i], this.canvas, this.hoverColors)
      : new Poly(x, y, this.imgMap.coords[i], this.canvas, this.hoverColors)
      if(this.ctx.isPointInPath(x, y)) 
        this.currentLink = this.imgMap.hrefs[i]
    }
  }
}
