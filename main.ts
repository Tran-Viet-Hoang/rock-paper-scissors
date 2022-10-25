radio.onReceivedNumber(function (receivedNumber) {
    Player2 = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    if (Player2 == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Player2 == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(Player1)
    Accept_choice = 1
    basic.showLeds(`
        . # . # .
        . # # . .
        # # # # #
        # # # . .
        # # . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(Player1)
    Accept_choice = 1
    basic.showLeds(`
        . # . # .
        . # # . .
        # # # # #
        # # # . .
        # # . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    if (Accept_choice == 0) {
        Player1 += 1
        if (Player1 == 4) {
            Player1 = 1
        }
    }
})
let Result = 0
let Accept_choice = 0
let Player2 = 0
let Player1 = 0
radio.setGroup(60)
Player1 = 0
Player2 = 0
Accept_choice = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.showLeds(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (Player1 == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Player1 == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    while (Player2 > 0 && Accept_choice == 1) {
        Result = Player1 - Player2
        if (Result == 0) {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                `)
            music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        } else if (Result == -2 || Result == 1) {
            basic.showLeds(`
                # . . . #
                # . . . #
                # . # . #
                # # . # #
                # . . . #
                `)
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        } else {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # # # # #
                `)
            music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
            Player2 = 0
            Accept_choice = 0
        }
    }
})
