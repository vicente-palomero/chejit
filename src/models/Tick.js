class Tick {
  constructor(id, type) {
    this.id = id
    this.type = type
    this.timestamp = Date.now()
    this.isEditing = false
    this.edited = false
  }

  getId() {
    return this.id
  }

  getType() {
    return this.type ? 'in' : 'out'
  }

  getDate() {
    return new Date(this.timestamp)
  }

  formatDate() {
    return new Date(this.timestamp).toLocaleString('es-ES')
  }

  swapEditing() {
    this.isEditing = !this.isEditing
  }
}

export default Tick
