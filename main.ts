input.onButtonPressed(Button.A, function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P1)))
})
function servoOn () {
    pins.servoWritePin(AnalogPin.P15, 80)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P15, 0)
    basic.pause(2000)
}
basic.showIcon(IconNames.Heart)
let strip = neopixel.create(DigitalPin.P2, 5, NeoPixelMode.RGB)
pins.servoWritePin(AnalogPin.P15, 0)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 500) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showIcon(IconNames.No)
        servoOn()
    } else {
        strip.showRainbow(1, 360)
        basic.showIcon(IconNames.Happy)
    }
})
