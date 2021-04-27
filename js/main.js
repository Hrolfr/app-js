
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
//começa de 1,pois segundos funcionam assim

 comecar.addEventListener('click', function(){
   minutoAtual = minutos.value;
   segundoAtual = segundos.value;

   display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;

   interval = setInterval(function(){

   segundoAtual--;
   if(segundoAtual <= 0){
       if (minutoAtual > 0){
  
          minutoAtual--;
          segundoAtual = 59;
       }else{
           alert("Acabou!");
           document.getElementById("sound").play();
           clearInterval(interval);
       }
   }
   display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
   },1000); //vai ser chamada de 1 em 1s

 })

 //com o value eu vou conseguir recuperar o que está selecionado nos itens
 /*ele ouxa o display,chama o childNodes no índice 1.
 ChildNodes no JS vai pegar todos os elementos filhos;Como só tenho 1 aqui,chamo no índice 1 e então to pegando o h3.
 Depois chamo o innerHTML e coloco o valor de forma dinamica que será atualizado com o evento setinterval*/