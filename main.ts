basic.forever(function () {
    basic.showLeds(`
        . . . # .
        . . # . .
        . # # # .
        # . . # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # .
        . . . # .
        . . . # .
        . . . # .
        . . . # .
        `)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
})
