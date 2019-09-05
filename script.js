const input = document.querySelector('input')
const paragraphs = document.querySelectorAll('p')

input.addEventListener('input', e => {
  const searchTerm = e.target.value
  const regex = new RegExp(searchTerm, 'g')
  const replacement = `<span class="highlighted">${ searchTerm }</span>`

  for (const p of paragraphs) {
    p.innerHTML = p.innerText.replace(regex, replacement)
  }
})
