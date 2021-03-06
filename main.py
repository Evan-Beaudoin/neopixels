strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
Delay = 1000
strip.clear()
basic.show_icon(IconNames.YES)
strip.show()

def on_forever():
    strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.GREEN))
    basic.pause(Delay)
    strip.show()
    strip.clear()
    strip.set_pixel_color(2, neopixel.colors(NeoPixelColors.YELLOW))
    basic.pause(Delay)
    strip.show()
    strip.clear()
    strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.RED))
    basic.pause(Delay)
    strip.show()
    strip.clear()
basic.forever(on_forever)
