// Created By: Evan
// 
// Created on: Sept. 2020
// 
// This program: Uses robot bit neopixels for a traffic light
// 
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
let Delay = 1000
strip.clear()
basic.showIcon(IconNames.Yes)
strip.show()
basic.forever(function () {
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    basic.pause(Delay)
    strip.show()
    strip.clear()
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(Delay)
    strip.show()
    strip.clear()
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    basic.pause(Delay)
    strip.show()
    strip.clear()
})
