class Tick {
  constructor(id, type) {
    this.id = id
    this.type = type
    this.timestamp = Date.now()
  }

  getType() {
    return this.type ? 'in' : 'out'
  }

  formatDate() {
    return new Date(this.timestamp).toLocaleString('es-ES')
  }
}

export default Tick
