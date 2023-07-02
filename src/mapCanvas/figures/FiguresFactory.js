import Rect from './Rect'
import Poly from './Poly'
import Circle from './Circle'

export default class FiguresFactory {
  static createFigure(type, args) {
    switch (type) {
      case 'rect':
        return new Rect(...args);
      case 'poly':
        return new Poly(...args);
      case 'circle':
        return new Circle(...args);
      default:
        throw new Error(`Invalid figure type: ${type}`);
    }
  }
}