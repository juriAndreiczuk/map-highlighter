import MapCanvas from './mapCanvas/MapCanvas'

const levelsImage = new MapCanvas({
  wrap: '#wrap-canvas',
  canvasId: 'map-canvas',
  mapId: 'image-map',
  hoverColors: ['rgba(0,0,0, .8)', 'rgba(0,0,0, .5)']
})
