import ImageMap from './ImageMap'
import Rect from './figures/Rect'
import Poly from './figures/Poly'
import Circle from './figures/Circle'

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
      const currentType = this.imgMap.areas[i].shape
      const coords = currentType === 'rect' ? this.imgMap.coordsSquare[i] : this.imgMap.coords[i]
      const args = [x, y, coords, this.canvas, this.hoverColors]

      const figure = currentType === 'rect' ?  new Rect(...args)
      : currentType === 'poly' ? new Poly(...args) 
      : new Circle(...args)

      if(this.ctx.isPointInPath(x, y))  {
        this.currentLink = this.imgMap.hrefs[i]
      }
    }
  }
}
