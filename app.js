const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
  fetchData()
})
items.addEventListener('click', e => {
  addCarrito(e)
})

const fetchData = async () => {
  try {
    const res = await fetch('https://finalspaceapi.com/api/v0/character')
    const data = await res.json()
    //console.log(data)
    pintarCards(data)
  } catch (error) {
    console.log(error)
  }
}

const pintarCards = data => {
  data.forEach(producto => {
    templateCard.querySelector('h5').textContent = producto.name
    templateCard.querySelector('p').textContent = producto.id * '200'
    templateCard.querySelector('img').setAttribute('src', producto.img_url)
    templateCard.querySelector('.btn-dark').dataset.id = producto.id
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
  })
  items.appendChild(fragment)
}
