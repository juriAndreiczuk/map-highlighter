import Canvas from './Сanvas'

class CanvasPoly extends Canvas {
  constructor(props) {
    super(props)
    this.getInfo() 
    this.canvas.onmousemove = (e) => {
      this.mapHilight(e)
    }
  }

  getInfo() {
    for(const area of this.areas) {
      this.info.coords.push(area.coords.split(','))
      this.info.hrefs.push(area.href);
    }
  }

  mapHilight(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for(let i = 0; i < this.info.coords.length; i++) {
      const coord = this.info.coords[i];
      this.ctx.beginPath(); 
      this.ctx.moveTo(coord[0], coord[1])
      for(let i = 2; i < coord.length; i+=2) {
        this.ctx.lineTo(coord[i], coord[i+1]);
      }
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.ctx.closePath();
      this.ctx.fillStyle = this.ctx.isPointInPath(x, y) ?  this.hoverColor :  'transparent';
      this.ctx.fill();
      if(this.ctx.isPointInPath(x, y)) {
        this.canvas.onclick = () => {
          location.href = this.info.hrefs[i]
        }
      }
    }
  }
}

export default CanvasPoly
