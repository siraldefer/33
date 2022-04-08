let pilota = game.createSprite(2, 2)
basic.forever(function () {
    pilota.move(1)
    pilota.ifOnEdgeBounce()
    if (input.buttonIsPressed(Button.A)) {
        pilota.move(1)
        pilota.ifOnEdgeBounce()
    }
    if (input.buttonIsPressed(Button.B)) {
        pilota.move(1)
        pilota.ifOnEdgeBounce()
    }
    if (input.buttonIsPressed(Button.AB)) {
        game.pause()
    }
})
