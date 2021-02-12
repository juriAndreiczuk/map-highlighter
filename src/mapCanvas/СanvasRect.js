import Canvas from './Сanvas'

class CanvasRect extends Canvas {
  constructor(props) {
    super(props);
    this.getInfo()
    this.canvas.onmousemove = (e) => {
      this.mapHilight(e)
    }
  }

  getInfo() {
    for(const area of this.canvasMap.areas) {
      const co =  area.coords.split(',');
      this.info.coords.push({
        x: co[0], y: co[1], w: co[2] - co[0], h: co[3] - co[1]
      })
      this.info.hrefs.push(area.href);
    }
  }

  mapHilight(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for(let i = 0; i < this.info.coords.length; i++) {
      const coords = this.info.coords[i];
      this.ctx.beginPath(this.ctx.isPointInPath(x, y));
      this.ctx.rect(coords.x, coords.y, coords.w, coords.h);
      this.ctx.fillStyle = this.ctx.isPointInPath(x, y) ?  'transparent' : this.canvasMap.hoverColor;
      this.ctx.fill();
      if(this.ctx.isPointInPath(x, y)) {
        this.canvas.onclick = () => {
          location.href = this.info.hrefs[i]
        }
      }
    }
  }
}

export default CanvasRect
