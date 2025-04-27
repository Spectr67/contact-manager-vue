export default function () {
  const elemsA = document.querySelectorAll('a')
  const elModal3 = document.querySelector('#modal3')

  console.log(elModal3)
  console.log(M)

  elemsA.forEach(elA => elA.setAttribute('draggable', false))

  M.AutoInit()

  document.querySelector('#search ~ i').addEventListener('click', function () {
    M.Modal.getInstance(elModal3).close()
    document.querySelector('#search').value = ''
  })

  document.querySelector('#search').addEventListener('click', function () {
    M.Modal.prototype._handleFocus = () => {}
    M.Modal.getInstance(elModal3).open()
    this.focus()
  })
}
