import Map from './Map'

class Canvas {
  constructor(props) {
    this.canvas = document.querySelector(`#${props.canvasId}`)
    this.canvasWrap = document.querySelector(props.canvasWrap)
    this.canvas.width = this.canvasWrap.offsetWidth
    this.canvas.height = this.canvasWrap.offsetHeight
    this.ctx = this.canvas.getContext('2d')
    this.canvasMap = new Map(props.hoverColor, props.mapId)
    this.currentLink = location.href
    this.info = { 
      coords: [],
      hrefs: this.canvasMap.hrefs.map(item => item)
    }

    this.canvas.onmouseleave = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    this.canvas.onclick = () => {
      location.href = this.currentLink
    }
  }
}

export default Canvas 
