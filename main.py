hora = 12
minuto = 0
segundos = 0

def on_forever():
    global segundos, minuto, hora
    basic.pause(1000)
    segundos += 1
    if segundos == 60:
        segundos = 0
        minuto += 1
        basic.show_number(segundos)
    if minuto == 60:
        minuto = 0
        hora += 1
        basic.show_number(minuto)
    if hora == 13:
        hora = 1
        basic.show_number(hora)
basic.forever(on_forever)
