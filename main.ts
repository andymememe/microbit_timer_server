input.onButtonPressed(Button.A, function () {
    ID += 1
    ID = ID % 4
    basic.showNumber(ID)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(ID)
    radio.sendNumber(1)
})
let ID = 0
radio.setGroup(0)
ID = 0
basic.showNumber(ID)
basic.forever(function () {
	
})
