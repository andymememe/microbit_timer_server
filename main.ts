input.onButtonPressed(Button.A, function () {
    Planted = 0
    Timer = 5
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    Planted = 1
    music.stopMelody(MelodyStopOptions.All)
})
let Timer = 0
let Planted = 0
radio.setGroup(1)
radio.setTransmitPower(7)
Planted = 0
Timer = 5
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.ForeverInBackground)
basic.forever(function () {
    if (Planted == 0) {
        basic.showNumber(Timer)
        basic.pause(1000)
        Timer += -1
        if (Timer < 0) {
            Timer = 5
        }
    } else {
    	
    }
})
