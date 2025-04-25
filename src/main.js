import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

createApp(App).mount('#app')

export default function initPage() {
  document.addEventListener('DOMContentLoaded', function () {
    const elemsA = document.querySelectorAll('a')
    const elModal3 = document.querySelector('#modal3')

    elemsA.forEach(elA => elA.setAttribute('draggable', false))

    M.AutoInit()

    document
      .querySelector('#search ~ i')
      .addEventListener('click', function () {
        M.Modal.getInstance(elModal3).close()
        document.querySelector('#search').value = ''
      })

    document.querySelector('#search').addEventListener('click', function () {
      M.Modal.prototype._handleFocus = () => {}
      M.Modal.getInstance(elModal3).open()
      this.focus()
    })
  })
}
