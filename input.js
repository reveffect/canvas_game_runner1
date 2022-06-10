export class InputHandler {
  constructor() {
    this.keys = []
    window.addEventListener('keydown', e => {
      console.log(e.key, this.keys)
      if ((e.key === 'ArrowDown'
        || e.key === 'ArrowUp'
        || e.key === 'ArrowLeft'
        || e.key === 'ArrowRight'
        || e.key === 'Control'
      ) && this.keys.indexOf(e.key) === -1)/*-1 means that key is not presented*/ {
        this.keys.push(e.key)
      }
      console.log(e.key, this.keys)
    })
    window.addEventListener('keyup', e => {
      if (e.key === 'ArrowDown'
        || e.key === 'ArrowUp'
        || e.key === 'ArrowLeft'
        || e.key === 'ArrowRight'
        || e.key === 'Control') {
        this.keys.splice(this.keys.indexOf(e.key), 1)
      }
      console.log(e.key, this.keys)
    })
  }
}