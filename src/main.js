import MapCanvasRect from './mapCanvas/MapCanvasRect'

setTimeout(() => {
  const levelsImage = new MapCanvasRect({
    canvasWrap: '#wrap-canvas',
    canvasId: 'map-canvas',
    mapId: 'image-map',
    hoverColor: '#000'
  });
},100)