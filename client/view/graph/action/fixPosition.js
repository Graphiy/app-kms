import Action from '../../../action'

export default class Self extends Action {
  constructor (p) {
    super(p)
    this.id = 'graphFixItemPosition'
    this._label = 'Fix Item Position'
  }

  execute () {
  }
}
