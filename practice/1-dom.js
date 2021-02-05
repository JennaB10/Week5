function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

window.addEventListener('DOMContentLoaded', function () {

  // 1. use getRandomInt(6) to randomize dice values
  // 2. find the dice element
  // 3. replace the element's inner html with new html using the dice values above

  // ⬇️ ⬇️ ⬇️ YOUR CODE GOES HERE ⬇️ ⬇️ ⬇️

  //#1
  let die1 = getRandomInt(6)
  //console.log(die1)
  let die2 = getRandomInt(6)

  //#2
  //dice is a good selector when looking at the html if you didn't have a good one then you can always add one
  let dice = document.querySelector('.dice')
  console.log(dice)

  //#3
dice.innerHTML = `
  <img src="../images/dice/${die1}.png" class="die w-1/2 md:w-1/6">
  <img src="../images/dice/${die2}.png" class="die w-1/2 md:w-1/6">
`
// ` allow you to replace one html with variables
  // ⬆️ ⬆️ ⬆️ YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE ⬆️ ⬆️ ⬆️
})
