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
