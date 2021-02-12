import Map from './Map'

class Canvas {
  constructor(props) {
    //canvas
    this.canvas = document.querySelector(`#${props.canvasId}`)
    this.canvasWrap = document.querySelector(props.canvasWrap)
    this.canvas.width = this.canvasWrap.offsetWidth
    this.canvas.height = this.canvasWrap.offsetHeight
    this.ctx = this.canvas.getContext('2d')
    this.info = { coords: [], hrefs: [] };
    this.canvasMap = new Map(props.hoverColor, props.mapId)

    this.canvas.onmouseleave = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

  }
}

export default Canvas 
