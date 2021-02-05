window.addEventListener('DOMContentLoaded', function () {
  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥

document. querySelector('div')

document.querySelector('div div')

document.querySelector('.fun-times') //to seek out Fun Times -> must use the full first class (class is separated by spaces) cannot just do like "Fu" for instance. If numerous classes have fun times in them it defaults to the first one (top one)
// need to use specific selector/identifier that's very particular


//store an element in a variable
let funTime = document.querySelector('.fun-times')

//modifiers
funTime.innerHTML

//innerHTML is an attribute it will return all the html of every node and element in DOM tree
//like any property you can reassign it funTimes.innerHTML = "Crazy Times!"
//innertHTML will REPLACE everything it does not ADD it by writing it twice

//classes can appear many times in HTML
//an ID can only be once or your code will be invalid
//an input doesn't have any inner HTML so instead you use te value property - "favoriteInput.value"
// . is used when it's a class

let movieList = document.querySelector('.moves-to-watch')

//movieList

movieList.insertAdjacentHTML('beforeend',`<li>Star Wars</li>`)
// expects two inputs - a location (beforeend (before the end), afterbegin, afterend, beforebegin)

document.querySelectorAll('div div')
let divs = document.querySelectorAll('div div')
//When you want to do the same thing to all elements, with a loop
//Why use div div when doing QuerySelectorAll?
// if you say 'div' is will loop for all of them and replace them all with Crazy Times. But it only goes to the very first div and replaces it with crazy times and makes the next div gone


//DOM Manipulation

  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
})
