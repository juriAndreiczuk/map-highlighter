import FigureRect from './FigureRect'
import FigurePoly from './FigurePoly'
import FigureCircle from './FigureCircle'

export default class FiguresFactory {
  static createFigure(type, args) {
    switch (type) {
      case 'rect':
        return new FigureRect(...args)
      case 'poly':
        return new FigurePoly(...args)
      case 'circle':
        return new FigureCircle(...args)
      default:
        throw new Error(`Invalid figure type: ${type}`)
    }
  }
}