
let display = document.getElementById('display')

let minutes = document.getElementById('minutes')
let segundos = document.getElementById('seconds')

let comecar = document.getElementById('comecar')

let cronometroSeg

let minutoAtual
let segundoAtual

let interval

for (var i = 0; i <= 60; i++) {
    if (i < 10) {
        i = '0' + i
    }
    minutes.innerHTML += '<option value= " ' + i + ' " >' + i + '</option>'
}

for (let i = 0; i <= 60; i++) {
    if (i < 10) {
        i = '0' + i
    }
    segundos.innerHTML += '<option value = " ' + i + ' " >' + i + '</option>'
}

comecar.addEventListener('click', function(){
    minutoAtual = minutes.value
    segundoAtual = seconds.value

    display.innerHTML = minutoAtual + ':' + segundoAtual

    interval = setInterval (function(){
        segundoAtual--
        if (segundoAtual <= 0) {
            if (minutoAtual > 0) {
                minutoAtual--
                segundoAtual = 59;
            }else {
                alert('Timer')
                clearInterval(interval)
            }
        }
        let format = (minutoAtual < 10 ? '0' + minutoAtual : minutoAtual) + ':' + (segundoAtual < 10 ? '0' + segundoAtual : segundoAtual)
        display.innerHTML = format    
    }, 1000)
    
})
