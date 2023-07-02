export default class MapImage {
  constructor(mapId, screenWidth) {
    this.areas = Array.from(document.querySelectorAll(`#${mapId} area`))
    this.previousWidth = screenWidth
    this.currentWidth = document.body.clientWidth / this.previousWidth
  }

  get hrefs () {
    return this.areas.map(item => item.href)
  }

  get coords () {
    return this.areas.map(item => item.coords.split(','))
  }

  get coordsSquare () {
    return this.coords.map(co => ({
      x: co[0], y: co[1], w: co[2] - co[0], h: co[3] - co[1]
    }))
  }

  set coords (val) {
    this.areas.forEach(area => {
      area.coords = area.coords.split(',').map(item => item *= val).join(',')
    })
  }

  coordsByType(val, i) {
    return val === 'rect' ? this.coordsSquare[i] : this.coords[i]
  }

  resize () {
    this.coords = document.body.clientWidth / this.previousWidth
    this.previousWidth = document.body.clientWidth
  }
}
