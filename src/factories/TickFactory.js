import Tick from '../models/Tick'

class TickFactory {
  static build(id, type) {
    return new Tick(id, type)
  }
}

export default TickFactory
