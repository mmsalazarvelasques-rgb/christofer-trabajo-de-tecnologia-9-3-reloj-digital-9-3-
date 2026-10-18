let hora = 12
let minuto = 0
let segundos = 0
basic.forever(function () {
    if (true) {
        basic.showNumber(minuto)
    }
})
basic.forever(function () {
    basic.pause(1000)
    segundos += 1
    if (segundos == 60) {
        segundos = 0
        minuto += 1
    }
    if (minuto == 60) {
        minuto = 0
        hora += 1
        basic.showNumber(minuto)
    }
    if (hora == 13) {
        hora = 1
        basic.showNumber(hora)
    }
})
