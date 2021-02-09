class MapCanvas {
  constructor(props) {
    this.canvas = document.querySelector(`#${props.canvasId}`)
    this.canvasWrap = document.querySelector(props.canvasWrap)
    this.canvas.width = this.canvasWrap.offsetWidth
    this.canvas.height = this.canvasWrap.offsetHeight
    this.ctx = this.canvas.getContext('2d')
    this.hoverColor = props.hoverColor
    this.areas = document.querySelectorAll(`#${props.mapId} area`)
    this.coords = []
    this.previousWidth = 1920
    this.info = { coords: [], hrefs: [] };

    this.canvas.onmouseleave = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    for(const area of this.areas) {
      this.coords.push(area.coords.split(','))
    }

    window.addEventListener('resize', () => {
      this.resize()
    });
    this.resize()
  }
  resize () {
    for (let i = 0; i < this.areas.length; i++) {
      let clen = this.coords[i].length;
      for (let j = 0; j < clen; j++) {
          this.coords[i][j] *= document.body.clientWidth / this.previousWidth;
      }
      this.areas[i].coords = this.coords[i].join(',');
    }
    this.previousWidth = document.body.clientWidth;
    return true;
  }
}

export default MapCanvas 
