
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
function desenhaRetangulo(x,y){
  pincel.fillStyle="black";
  pincel.lineWidth=1;
  pincel.strokeRect(x, y, 50,50);

}

function quantidadeRetangulos(x, y,quantidade){
  for(var i=0; i<quantidade;i++){
    desenhaRetangulo(x,y);
    x=x+50;
  }
}
function addLetra(letra, x,y){
  pincel.fillStyle='black';
  pincel.font='40px serif';
  pincel.fillText(letra,x,y);
}

function addLetraPos(index, letra){
  for(var j=0;j<index.length; j++){
    x=60+(index[j]*50);
    addLetra(letra, x,590);
  }
};

function addLetraErrada(p, letra){
  var x= 500+(50*p);
  var y=300
  addLetra(letra,x, y);
}

function messagemVenceu(){
  addLetra("Você venceu!",500, 200);
}
function mensagemPerdeu(word){
  var msg= "A palavra era "+word;
  addLetra("Você perdeu!", 450, 200);
  addLetra(msg, 350, 240);
}

function desenhaForca() {
  pincel.fillStyle="black";
  pincel.beginPath();
  pincel.moveTo(50,400);
  pincel.lineTo(50, 50);
  pincel.lineTo(250,50);
  pincel.lineTo(250,75);
  pincel.lineWidth=15;
  pincel.stroke();
}

function desenhaCabeca(){
  pincel.beginPath();
  pincel.arc(250, 120,40, 0, 2*Math.PI);
  pincel.lineWidth=10;
  pincel.stroke();

}


function desenhaCorpo(){
  pincel.beginPath();
  pincel.moveTo(250,160);
  pincel.lineTo(250,300);
  pincel.lineWidth=10;
  pincel.stroke();
}
function desenhaBracoDireito(){
  pincel.beginPath();
  pincel.moveTo(250,180);
  pincel.lineTo(290,220);
  pincel.lineWidth=10;
  pincel.stroke();

}

function desenhaBracoEsquerdo(){
  pincel.beginPath();
  pincel.moveTo(250,180);
  pincel.lineTo(210,220);
  pincel.lineWidth=10;
  pincel.stroke();
}



function desenhaPernaEsquerda(){
  pincel.beginPath();
  pincel.moveTo(250,290);
  pincel.lineTo(200,360);
  pincel.lineWidth=10;
  pincel.stroke();
}


function desenhaPernaDireita(){
  pincel.beginPath();
  pincel.moveTo(250,290);
  pincel.lineTo(300,360);
  pincel.lineWidth=10;
  pincel.stroke();

}
function clearCanvas(){
  pincel.clearRect(100,75,250,300);

}
