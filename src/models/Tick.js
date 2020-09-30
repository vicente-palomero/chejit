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

  formatDate() {
    return new Date(this.timestamp).toLocaleString('es-ES')
  }

  swapEditing() {
    this.isEditing = !this.isEditing
  }
}

export default Tick
