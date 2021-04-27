
var display = document.getElementById('display');

var display = document.getElementById('minutos');
var display = document.getElementById('segundos');
var display = document.getElementById('comecar');

var cronometroSeg;

var minutoAtual;
var segundoAtual;

var interval;

for(var i = 0; i <= 60; i++){
    minutos.innerHTML += '<option value="' +i+ '">' +i+ ' </option>';
}

for(var i = 1; i <= 60; i++){
    segundos.innerHTML += '<option value="' +i+ '">' +i+ ' </option>';
}