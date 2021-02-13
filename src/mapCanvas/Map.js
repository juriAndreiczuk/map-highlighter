class Map {
  constructor(hoverColor, mapId) {
    this.hoverColor = hoverColor
    this.areas = document.querySelectorAll(`#${mapId} area`)
    this.previousWidth = 1920
    this.currentWidth = document.body.clientWidth / this.previousWidth
    this.resize()
    window.addEventListener('resize', () =>  this.resize)
  }

  get coords () {
    return Array.prototype.map.call(this.areas, item => 
      item.coords.split(','))
  }
  set coords (val) {
    for(const area of this.areas) {
      area.coords = area.coords.split(',').map(item => 
        item *= val).join(',')
    }
  }
  resize () {
    this.coords = this.currentWidth
    this.previousWidth = document.body.clientWidth
  }
}

export default Map 
