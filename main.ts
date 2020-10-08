input.onButtonPressed(Button.A, function () {
    peso += 1
    basic.showNumber(peso)
})
input.onButtonPressed(Button.AB, function () {
    IMC = 10000 * peso / (estatura * estatura)
    basic.showNumber(estatura)
    if (IMC > 25 && IMC <= 30) {
        basic.showString("Sobrepeso")
    } else if (IMC > 30) {
        basic.showString("Obesidad")
    } else if (IMC < 18.5) {
        basic.showString("Delgada")
    } else {
        basic.showString("Saludable")
    }
})
input.onButtonPressed(Button.B, function () {
    peso += -1
    basic.showNumber(peso)
})
input.onGesture(Gesture.Shake, function () {
    peso = 74
    basic.showNumber(peso)
})
let IMC = 0
let peso = 0
let estatura = 0
estatura = 180
peso = 74
IMC = 0
