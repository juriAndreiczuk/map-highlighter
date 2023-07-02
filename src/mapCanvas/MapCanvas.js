import MapImage from './MapImage'
import FigureFactory from './figure/FigureFactory'

export default class MapCanvas {
  constructor(props) {
    this.canvas = document.querySelector(`#${props.canvasId}`)
    this.wrap = document.querySelector(props.wrap)
    this.ctx = this.canvas.getContext('2d')
    this.hoverColors = props.hoverColors
    this.currentLink = location.href
    this.mapImg = new MapImage(props.mapId, props.screenWidth)

    this.canvas.onmouseleave = () => this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.canvas.onmousemove = e => this.mapHilight(e)
    this.canvas.onclick = () => location.href = this.currentLink
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
    this.mapImg.resize()
    this.mapImg.coords.forEach((_, i) => {
      const currentType = this.mapImg.areas[i].shape
      const coords = this.mapImg.coordsByType(currentType, i)
      const args = [x, y, coords, this.canvas, this.hoverColors]

      FigureFactory.createFigure(currentType, args)
      if(this.ctx.isPointInPath(x, y))  {
        this.currentLink = this.mapImg.hrefs[i]
      }
    })
  }
}
