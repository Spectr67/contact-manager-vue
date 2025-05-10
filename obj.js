// const obj = {
//   x: 42,
//   displayX: this.x,
// }

// console.log(obj.displayX)

function fn() {
  const obj = {
    x: 42,
    displayX: this.x,
  }
  return obj
}

let ff = fn.call({ x: 43 })
console.log(ff)
