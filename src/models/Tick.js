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

  getDatetime() {
    return new Date(this.timestamp)
  }

  formatDate() {
    return new Date(this.timestamp).toLocaleString('es-ES')
  }

  swapEditing() {
    this.isEditing = !this.isEditing
  }

  updateTimestamp(timestamp) {
    this.timestamp = timestamp || this.timestamp
  }
}

export default Tick
