import './style.css'

const app = document.querySelector('#app')

const bloks = document.querySelectorAll('.item')
console.log(bloks)
let n = 0

for (const item of bloks) {
  item.addEventListener('click', () => {
    console.log('由外到内')
    console.log(item)
    setTimeout(() => {
      item.classList.add('active')
    }, n * 500)
    n += 1
  }, true)
}

console.log('=== 分割线 ===')

for (const item of bloks) {
  item.addEventListener('click', () => {
    console.log('由内到外')
    console.log(item)
    setTimeout(() => {
      item.classList.remove('active')
    }, n * 500)
    n += 1
  })
}
