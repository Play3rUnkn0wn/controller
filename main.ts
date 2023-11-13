enum RadioMessage {
    message1 = 49434,
    MoveLeft = 63573,
    MoveRight = 16346,
    MoveBackward = 59054,
    MoveForwards = 63949
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.MoveLeft)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.MoveRight)
})
let Presses = 0
hummingbird.startHummingbird()
radio.setGroup(99234)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB) && !(Presses >= 3)) {
        Presses += 1
    }
    if (Presses >= 3) {
        Presses = 0
    }
    if (Presses == 1) {
        radio.sendMessage(RadioMessage.MoveForwards)
    }
    if (Presses == 2) {
        radio.sendMessage(RadioMessage.MoveBackward)
    }
})
