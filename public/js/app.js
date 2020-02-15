console.log("Client side javascript file is loaded");

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then(data => {
    console.log(data)
  })
})

fetch('http://localhost:3000/weather?address=boston').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data.location)
      console.log(data.forecast)
    }
  })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
let messageOne = document.querySelector('#message-1')
let messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const location = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''

  fetch(`/weather?address=` + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
        messageTwo.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })

  console.log('Testing!')
})