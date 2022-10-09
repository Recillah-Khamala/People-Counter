const log = console.log 

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

let count = 0

const increment = () => {
  count += 1
  countEl.textContent = count
   
}

const save = () => {
  const separator = count + " - "
  saveEl.textContent += separator
  countEl.textContent = 0
  count = 0
}

