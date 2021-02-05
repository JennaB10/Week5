// 1. find form element
// 2. add event listener on form submit
// 3. on submit event:
//    a. get data from API URL 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
//    b. calculate total bitcoin value in USD currency
//    c. modify output to display `Your _____ Bitcoin is worth ________ USD`

//window.addEventListener('DOMContentLoaded', function () {

  window.addEventListener('DOMContentLoaded', function (event) {
    alert('the page is loaded!')
  // let url = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
})

let clickeMeButton = document.querySelector('.click-me-button')
clickMeButton = addEventListener('click',function(event){
  console.log(event)
  let outputElement = document.querySelector('.output')
  //outputEleemnt.innerHTML = '<p>Click me! was clicked </p>'
  outputElement.insertAdjacentHTML('beforeend',`
  <p>Click me! was clicked</p>
  `)
})

//add event listener has two arguements <- two input values. The first one is the name of an event. The brower
//predefines a whole bunch of events, prewritten and the browser knows how to hear them (click, scroll, etc)
//the second is a function that we are defining <- an anonymous function is the second arguement. Whatever we put in here doesn't happen until the event fires

//you don't NEED to extract something to a function, you can dry up your code but you never have to
let googleLink = document.querySelector('.google-link')
googleLink.addEventListener('click', function(event) {
  event.preventDefault()
  console.log('something happened')

  let outputElement = document.querySelector('.output')
  outputElement.insertAdjacentHTML('beforeend', `
  <p>Google was clicked</p>
  `)
})

let nameInput = document.querySelector('#firstname')
//console.log(nameInput)
nameInput.addEventListener('change',function(event){
let greetElement = document.querySelector('#greet')
greetElement.innerHTML = `Hi, ${nameInpute.value}` //inputs don't have inner html they have .value

if (nameInput.value.length >0) {
  greetElement.innerHTML = 'Hi'
}

})
