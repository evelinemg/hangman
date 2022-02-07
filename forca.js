desenhaForca();
var p=0;
var botaoIniciar = document.querySelector("#iniciar-jogo");
botaoIniciar.addEventListener("click", function(event){
  var word = buscaPalavra();
  letras=split(word);
  espacos=letras.length;
  console.log(word);
  quantidadeRetangulos(50,550, espacos);
  p=0;
  clearCanvas();

});

function split(word){
  var word=word.split('');
  return word;

}
var letra= '';
var botaoNovaPalavra = document.querySelector("#nova-palavra");
botaoNovaPalavra.addEventListener("click", function(event){
  event.preventDefault();
  var areaLetra=document.querySelector("#input-nova-palavra");
  letra=areaLetra.value;
  verificaLetra(letra);
  var form = document.querySelector("input-nova-palavra");
  areaLetra.value='';

});
 function verificaLetra(letra){
   var index=[];
   n=0;
   for(var i=0; i<espacos;i++){
     if(letra==letras[i]){
       index[n]=i;
       n=n+1;
     }
   }
   console.log(n);
   if(n==0){
     desenhaMan(p);
     console.log(p);
     p=p+1;
   }
   console.log(index, letra);
   addLetraPos(index, letra);
 };

 function desenhaMan(p){
   if(p==0){
     desenhaCabeca();
   }
   else if(p==1){
     desenhaCorpo();
   }
   else if(p==2){
     desenhaBracoDireito();

   }
   else if(p==3){
     desenhaBracoEsquerdo();

   }
   else if(p==4){
     desenhaPernaDireita();
   }
   else if(p==5){
     desenhaPernaEsquerda();

   }
   else{
     console.log("perdeu");
   }


 }
