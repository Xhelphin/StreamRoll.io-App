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
var queueBetweenPlus = document.getElementById("queuebetween+")
var queueCurrent = document.getElementById("queuecurrent")
var queueItems = document.getElementById("queueitems")
var queueButton = document.getElementById("queuebutton")

var uri = 'https://streamroll.io/roll/'

sendButton.addEventListener('click', async () => {
    updateCurrentQueue()
    var itemToSend = queueItems.innerText + "+" + queueCurrent.innerText
    if (uuidInput.value != "") {
        console.log(itemToSend)
        let url = uri + uuidInput.value + '/' + itemToSend
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open( "GET", url, false)
        xmlHttp.send( null )
    }
})

function updateCurrentQueue() {
    if (number.innerText == "5") {
        var numOfDice = customInput.value
    } else {
        var numOfDice = number.innerText
    }
    queueCurrent.innerText = numOfDice + "D" + dice.innerText
    if (queueItems.innerText != "") {
        queueBetweenPlus.classList.remove("itemhidden")
    } else {
        if (!(queueBetweenPlus.classList.contains("itemhidden"))) {
            queueBetweenPlus.classList.add("itemhidden")
        }
    }
}

oneButton.addEventListener('click', async () => {
    number.innerText = "1"
    oneButton.classList.add("oneactivated")
    twoButton.classList.remove("twoactivated")
    threeButton.classList.remove("threeactivated")
    fourButton.classList.remove("fouractivated")
    customInput.value = ""
    updateCurrentQueue()
})

twoButton.addEventListener('click', async () => {
    number.innerText = "2"
    oneButton.classList.remove("oneactivated")
    twoButton.classList.add("twoactivated")
    threeButton.classList.remove("threeactivated")
    fourButton.classList.remove("fouractivated")
    customInput.value = ""
    updateCurrentQueue()
})

threeButton.addEventListener('click', async () => {
    number.innerText = "3"
    oneButton.classList.remove("oneactivated")
    twoButton.classList.remove("twoactivated")
    threeButton.classList.add("threeactivated")
    fourButton.classList.remove("fouractivated")
    customInput.value = ""
    updateCurrentQueue()
})

fourButton.addEventListener('click', async () => {
    number.innerText = "4"
    oneButton.classList.remove("oneactivated")
    twoButton.classList.remove("twoactivated")
    threeButton.classList.remove("threeactivated")
    fourButton.classList.add("fouractivated")
    customInput.value = ""
    updateCurrentQueue()
})

customInput.addEventListener('click', async () => {
    number.innerText = "5"
    oneButton.classList.remove("oneactivated")
    twoButton.classList.remove("twoactivated")
    threeButton.classList.remove("threeactivated")
    fourButton.classList.remove("fouractivated")
    updateCurrentQueue()
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
    updateCurrentQueue()
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
    updateCurrentQueue()
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
    updateCurrentQueue()
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
    updateCurrentQueue()
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
    updateCurrentQueue()
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
    updateCurrentQueue()
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
    updateCurrentQueue()
})

queueButton.addEventListener('click', async () => {
    updateCurrentQueue()
    if (queueItems.innerText == "") {
        queueItems.innerText = queueCurrent.innerText
    } else {
        queueItems.innerText = queueItems.innerText + "+" + queueCurrent.innerText
    }
    updateCurrentQueue()
})

/* Run at app start */
oneButton.classList.add("oneactivated")
d4Button.classList.add("d4activated")
queueBetweenPlus.classList.add("itemhidden")
updateCurrentQueue()