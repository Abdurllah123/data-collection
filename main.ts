serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("sound", input.soundLevel())
})
