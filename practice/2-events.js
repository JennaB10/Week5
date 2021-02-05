function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}
//this tells us to wait until the DOM Content is loaded and then do the function
window.addEventListener('DOMContentLoaded', function (event) {
  alert('the page is loaded!')


  // 1. use final code from practice/1-dom.js to modify dice
  // 2. add event listener when user clicks "Roll"
  // 3. on click event:
  //    a. get the user-entered player name from the input
  //    b. insert <li> with player name and dice total: `<li>______ rolled __</li>

  // ⬇️ ⬇️ ⬇️ YOUR CODE GOES HERE ⬇️ ⬇️ ⬇️

  
  //#1
  let die1 = getRandomInt(6)
  //console.log(die1)
  let die2 = getRandomInt(6)
  let total = die1 + die2

  //#2
  //dice is a good selector when looking at the html if you didn't have a good one then you can always add one
  let dice = document.querySelector('.dice')
  //console.log(dice)


  dice.innerHTML = `
  <img src="../images/dice/${die1}.png" class="die w-1/2 md:w-1/6">
  <img src="../images/dice/${die2}.png" class="die w-1/2 md:w-1/6">
  `
let playerInput = document.querySelector('#player')
let payerName = playerInput.value
console.log(playerName)

let resultElement = document.querySelector('.result')




  //#2
  let button = document. querySelector('#roll-button')
    button.addEventListener('click',function(event){
      //console.log('clicked')

    })



  // ⬆️ ⬆️ ⬆️ YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE ⬆️ ⬆️ ⬆️
})
