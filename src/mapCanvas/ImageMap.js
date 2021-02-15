export default class ImageMap {
  constructor(mapId) {
    this.areas = document.querySelectorAll(`#${mapId} area`)
    this.previousWidth = 1920
    this.currentWidth = document.body.clientWidth / this.previousWidth
    this.resize()
    window.addEventListener('resize', () =>  this.resize)
  }

  get hrefs () {
    return Array.prototype.map.call(this.areas, item => item.href)
  }

  get coords () {
    return Array.prototype.map.call(this.areas, item => item.coords.split(','))
  }

  get coordsSquare () {
    return this.coords.map(co => ({
      x: co[0], y: co[1], w: co[2] - co[0], h: co[3] - co[1]
    }))
  }

  set coords (val) {
    for(const area of this.areas) {
      area.coords = area.coords.split(',').map(item => item *= val).join(',')
    }
  }

  resize () {
    this.coords = this.currentWidth
    this.previousWidth = document.body.clientWidth
  }
}
