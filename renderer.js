const { ipcRenderer, remote } = require('electron')

var uuidInput = document.getElementById('uuidinput')
var oneButton = document.getElementById('onebutton')
var twoButton = document.getElementById('twobutton')
var threeButton = document.getElementById('threebutton')
var fourButton = document.getElementById('fourbutton')
var customInput = document.getElementById('custominput')
var d4Button = document.getElementById('d4button')
var d6Button = document.getElementById('d6button')
var d8Button = document.getElementById('d8button')
var d10Button = document.getElementById('d10button')
var d12Button = document.getElementById('d12button')
var d20Button = document.getElementById('d20button')
var d100Button = document.getElementById('d100button')
var sendButton = document.getElementById('sendbutton')
var number = document.getElementById('number')
var dice = document.getElementById('dice')

var uri = 'https://streamroll.io/roll/'

sendButton.addEventListener('click', async () => {
    if (uuidInput.value != "") {
        if (number.innerText == "5") {
            var numOfDice = customInput.value
        } else {
            var numOfDice = number.innerText
        }
        let url = uri + uuidInput.value + '/' + numOfDice + 'd' + dice.innerText
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open( "GET", url, false)
        xmlHttp.send( null )
    }
})

oneButton.addEventListener('click', async () => {
    number.innerText = "1"
    oneButton.classList.add("oneactivated")
    twoButton.classList.remove("twoactivated")
    threeButton.classList.remove("threeactivated")
    fourButton.classList.remove("fouractivated")
    customInput.value = ""
})

twoButton.addEventListener('click', async () => {
    number.innerText = "2"
    oneButton.classList.remove("oneactivated")
    twoButton.classList.add("twoactivated")
    threeButton.classList.remove("threeactivated")
    fourButton.classList.remove("fouractivated")
    customInput.value = ""
})

threeButton.addEventListener('click', async () => {
    number.innerText = "3"
    oneButton.classList.remove("oneactivated")
    twoButton.classList.remove("twoactivated")
    threeButton.classList.add("threeactivated")
    fourButton.classList.remove("fouractivated")
    customInput.value = ""
})

fourButton.addEventListener('click', async () => {
    number.innerText = "4"
    oneButton.classList.remove("oneactivated")
    twoButton.classList.remove("twoactivated")
    threeButton.classList.remove("threeactivated")
    fourButton.classList.add("fouractivated")
    customInput.value = ""
})

customInput.addEventListener('click', async () => {
    number.innerText = "5"
    oneButton.classList.remove("oneactivated")
    twoButton.classList.remove("twoactivated")
    threeButton.classList.remove("threeactivated")
    fourButton.classList.remove("fouractivated")
})

d4Button.addEventListener('click', async () => {
    dice.innerText = "4"
    d4Button.classList.add("d4activated")
    d6Button.classList.remove("d6activated")
    d8Button.classList.remove("d8activated")
    d10Button.classList.remove("d10activated")
    d12Button.classList.remove("d12activated")
    d20Button.classList.remove("d20activated")
    d100Button.classList.remove("d100activated")
})

d6Button.addEventListener('click', async () => {
    dice.innerText = "6"
    d4Button.classList.remove("d4activated")
    d6Button.classList.add("d6activated")
    d8Button.classList.remove("d8activated")
    d10Button.classList.remove("d10activated")
    d12Button.classList.remove("d12activated")
    d20Button.classList.remove("d20activated")
    d100Button.classList.remove("d100activated")
})

d8Button.addEventListener('click', async () => {
    dice.innerText = "8"
    d4Button.classList.remove("d4activated")
    d6Button.classList.remove("d6activated")
    d8Button.classList.add("d8activated")
    d10Button.classList.remove("d10activated")
    d12Button.classList.remove("d12activated")
    d20Button.classList.remove("d20activated")
    d100Button.classList.remove("d100activated")
})

d10Button.addEventListener('click', async () => {
    dice.innerText = "10"
    d4Button.classList.remove("d4activated")
    d6Button.classList.remove("d6activated")
    d8Button.classList.remove("d8activated")
    d10Button.classList.add("d10activated")
    d12Button.classList.remove("d12activated")
    d20Button.classList.remove("d20activated")
    d100Button.classList.remove("d100activated")
})

d12Button.addEventListener('click', async () => {
    dice.innerText = "12"
    d4Button.classList.remove("d4activated")
    d6Button.classList.remove("d6activated")
    d8Button.classList.remove("d8activated")
    d10Button.classList.remove("d10activated")
    d12Button.classList.add("d12activated")
    d20Button.classList.remove("d20activated")
    d100Button.classList.remove("d100activated")
})

d20Button.addEventListener('click', async () => {
    dice.innerText = "20"
    d4Button.classList.remove("d4activated")
    d6Button.classList.remove("d6activated")
    d8Button.classList.remove("d8activated")
    d10Button.classList.remove("d10activated")
    d12Button.classList.remove("d12activated")
    d20Button.classList.add("d20activated")
    d100Button.classList.remove("d100activated")
})

d100Button.addEventListener('click', async () => {
    dice.innerText = "100"
    d4Button.classList.remove("d4activated")
    d6Button.classList.remove("d6activated")
    d8Button.classList.remove("d8activated")
    d10Button.classList.remove("d10activated")
    d12Button.classList.remove("d12activated")
    d20Button.classList.remove("d20activated")
    d100Button.classList.add("d100activated")
})

uuidInput.value = "UUID"