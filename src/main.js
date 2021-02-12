import СanvasRect from './mapCanvas/СanvasRect'

setTimeout(() => {
  const levelsImage = new СanvasRect({
    canvasWrap: '#wrap-canvas',
    canvasId: 'map-canvas',
    mapId: 'image-map',
    hoverColor: '#000'
  });
},100)