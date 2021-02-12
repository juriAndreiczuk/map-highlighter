class Map {
  constructor(hoverColor, mapId) {
    this.hoverColor = hoverColor
    this.areas = document.querySelectorAll(`#${mapId} area`)
    this.coords = []
    this.previousWidth = 1920

    this.getCoords()
    this.resize()
    window.addEventListener('resize', () => { this.resize() })
  }

  getCoords () {
    this.coords = Array.prototype.map.call(this.areas, item => item.coords.split(','))
  }

  resize () {
    for(const [i, coords] of this.coords.entries()) {
      this.coords[i] = coords.map(item => item *= document.body.clientWidth / this.previousWidth)
      this.areas[i].coords = this.coords[i].join(',')
    }
    this.previousWidth = document.body.clientWidth
  }
}

export default Map 
