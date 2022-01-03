"user strict"

let horas = 0;
let minutos = 0;
let segundos = 0;
let tempo = 1000;//tempo em milisegundos
let cronometro;

function iniciar() {
    cronometro = setInterval(() => {timer(); }, tempo);
}

function pausar() {
    clearInterval(cronometro);
}

function zerar() {
    horas = 0;
    minutos = 0;
    segundos = 0;
    document.getElementById('counter').innerText = '00:00:00';
}

function timer(){

    segundos++;

    if(segundos == 60){
        segundos = 0;
        minutos++;

        if(minutos == 60){
            minutos = 0;
            horas++;
        }
    }


    let format = (horas < 10 ? '0' + horas:horas) + ':' + (minutos < 10 ? '0' + minutos:minutos) + ':' + (segundos < 10 ? '0' + segundos:segundos)
    document.getElementById('counter').innerText = format;
}