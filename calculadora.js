var n1 = document.querySelector('#numero1')
var n2 = document.querySelector('#numero2')
var resultado = document.querySelector('span')

function somar(){
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value);
}