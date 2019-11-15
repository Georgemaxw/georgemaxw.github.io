

var novoP = document.querySelector('p');
novoP.textContent = 'Elemento p criado com o DOM e o JS!';

/*document.querySelector('p').textContent = 'Elemento p criado com o DOM e o JS!';*/



/*document.querySelector('h1').onclick = function () {
    alert('Não me cutuque!');
}*/

var meuHTML = document.querySelector('h1');
meuHTML.onclick = function() {  alert('Não me cutuque!'); };



function CliqueEmP() {
    return alert('Você clicou em um parágrafo!');
}

document.querySelector('#Clicavel').onclick = CliqueEmP;



var MinhaImg = document.querySelector('#Power');

MinhaImg.onclick = function() {
    var Src = MinhaImg.getAttribute('src');
    if(Src === '../images/Power-On.png') {
        MinhaImg.setAttribute ('src','../images/Power-Off.png');
    } else {
        MinhaImg.setAttribute ('src','../images/Power-On.png');
    }
}



//alert('Olá!')



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Por favor, digite seu nome.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Olá ' + myName + '!';
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Olá ' + storedName + '!';
  }

  myButton.onclick = function() {
    setUserName();
  }



  document.querySelector('#Botao').onclick = function() { alert('Testado') };



/*var Entrada = prompt('Digite algo:')
alert('Você digitou isto: ' + Entrada)*/