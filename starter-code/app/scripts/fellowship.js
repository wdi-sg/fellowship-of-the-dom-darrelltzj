console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  // add each land as an article tag
    // inside each article tag include an h1 with the name of the land
  lands.forEach(function(land) {
    var landArticle = document.createElement('article')
    var landTitle = document.createElement('h1')
    landTitle.textContent = land
    landArticle.appendChild(landTitle)
    middleEarth.appendChild(landArticle)
  })
  // append middle-earth to your document body
  body.appendChild(middleEarth)
}
makeMiddleEarth();

var theShire = body.querySelectorAll('article')[0]
var rivendell = body.querySelectorAll('article')[1]
var mordor = body.querySelectorAll('article')[2]
// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var unorderedList = document.createElement('ul')
  hobbits.forEach(function(hobbit) {
    var list = document.createElement('li')
    list.className = 'hobbit'
    list.textContent = hobbit
    unorderedList.appendChild(list)
  })
  theShire.appendChild(unorderedList)
}
makeHobbits()

var frodo = body.querySelectorAll('.hobbit')[0]
var samwise = body.querySelectorAll('.hobbit')[1]
var meriadoc = body.querySelectorAll('.hobbit')[2]
var peregrin = body.querySelectorAll('.hobbit')[3]

// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement('div')
  theRing.id = 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  theRing.className = 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  theRing.addEventListener('click', oneClick)
  // add the ring as a child of Frodo
  frodo.appendChild(theRing)
}
keepItSecretKeepItSafe()

// Part 4
function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside')
  var listOfBuddies = document.createElement('ul')
  buddies.forEach(function(buddy){
    var buddyInput = document.createElement('li')
    buddyInput.textContent = buddy
    listOfBuddies.appendChild(buddyInput)
  })
  aside.appendChild(listOfBuddies)
  rivendell.appendChild(aside)
}
makeBuddies()

var gandalf = body.querySelectorAll('li:not(.hobbit)')[0]
var legolas = body.querySelectorAll('li:not(.hobbit)')[1]
var gimli = body.querySelectorAll('li:not(.hobbit)')[2]
var strider = body.querySelectorAll('li:not(.hobbit)')[3]
var boromir = body.querySelectorAll('li:not(.hobbit)')[4]
// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = 'Aragorn'
}
beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitList = body.querySelectorAll('.hobbit')
  hobbitList.forEach(function(hobbit) {
    // rivendell.appendChild(body.querySelector('.hobbit'))
    rivendell.appendChild(hobbit)
  })
}
leaveTheShire()

// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement('div')
  theFellowship.textContent = 'the-fellowship'
  rivendell.appendChild(theFellowship)
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var hobbitArr = Array.from(body.querySelectorAll('.hobbit'))
  var buddyArr = Array.from(body.querySelectorAll('aside ul li'))
  var characterArr = []
  buddyArr.forEach(function(buddy,i) {
    if (i === 4){
      characterArr.push(buddy)
    }
    else {
      characterArr.push(buddy)
      characterArr.push(hobbitArr[i])
    }
  })
  characterArr.forEach(function(character) {
    theFellowship.appendChild(character)
    alert(character.textContent + ' has joined the fellowship')
  })
}
forgeTheFellowShip()

// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalf.textContent = 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.backgroundColor = 'white'
  gandalf.style.border = 'solid grey'
}
theBalrog()

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('The horn of gondor has been blown')
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  boromir.style.textDecoration = 'line-through'
  body.querySelector('section div').removeChild(boromir)
}
hornOfGondor()

// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodoSamList = document.createElement('ul')
  frodoSamList.appendChild(frodo)
  frodoSamList.appendChild(samwise)
  mordor.appendChild(frodoSamList)
  // add a div with an id of 'mount-doom' to Mordor
  var newDiv = document.createElement('div')
  newDiv.id = 'mount-doom'
  mordor.appendChild(newDiv)
}
itsDangerousToGoAlone()

// Part 11

var mountDoom = document.querySelector('#mount-doom')
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var gollum = document.createElement('div')
  gollum.id = 'gollum'
  mordor.appendChild(gollum)
  // Remove the ring from Frodo and give it to Gollum
  gollum.appendChild(document.querySelector('#the-ring'))
  // Move Gollum into Mount Doom
  mountDoom.appendChild(gollum)
}
weWantsIt()

// Part 12
var gollum = document.querySelector('#gollum')
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  mountDoom.removeChild(gollum)
  // remove all the buddies from the document
  rivendell.removeChild(document.querySelector('aside'))
  var hobbitsBackList = document.createElement('ul')
  // Move all the hobbits back to the shire
  document.querySelectorAll('.hobbit').forEach(function(hobbit) {
    hobbitsBackList.appendChild(hobbit)
  })
  theShire.appendChild(hobbitsBackList)
}
thereAndBackAgain()

var clickCount = 0
var opacity = 0

function oneClick() {
  opacity = 0
  nazgulScreech()
  fadeIn()
  threeClicks()
}

function fadeIn() {
  if (opacity <= 1) {
    opacity += 0.1
    setTimeout(fadeIn,200)
  }
  frodo.style.opacity = opacity
}

function threeClicks() {
  clickCount += 1
  console.log(clickCount++) //Somehow, clickCount goes 1,3,5 instead of 1,2,3
  if(clickCount >= 5) {
    // var newBody = document.createElement('body')
    var header = document.createElement('h1')
    header.textContent = 'The Ring has been returned to Sauron and the world is over.'
    // newBody.appendChild(header)
    document.querySelector('html').removeChild(body)
    document.querySelector('html').appendChild(header)
  }
}
