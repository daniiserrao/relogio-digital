function atualizarTempo() {
    let hora = document.querySelector('.hora');
    let dia = document.querySelector('.data');

    let agora = new Date();

    let horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds());

    let data = agora.getDate() + '/' + (agora.getMonth() + 1) + '/' +agora.getUTCFullYear();

    hora.textContent = horario;
    dia.textContent = data; 


}

function corrigirHorario(numero) {
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

setInterval(atualizarTempo, 1000);


let display = document.querySelector('.display');

let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');

let comecar = document.getElementById('comecar');

let cronometroSeg;

let minutoAtual;
let segundoAtual;

let interval;

for (let i = 0; i <= 60; i++) {
    minutos.innerHTML += '<option value= " ' + i + ' "> ' + i + '</option>';
}

for (let i = 0; i <= 60; i++) {
    segundos.innerHTML += '<option value = "'+ i +'">' + i + '</option>';
}


