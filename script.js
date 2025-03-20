//atividade 1
function atividade1(){
let number = prompt('digite um numero');

    function verificarpar(number){
    if (0 == number % 2){
        console.log('é par');
    } else {
        console.log('é impar');
    }
}
 verificarpar(number);
}
//Atividade 2
function atividade2(){
let Pnumero = parseFloat(prompt('Me fale um numero'));
let Snumero = parseFloat(prompt('Me fale outro numero'));

function calculos(num1,num2){
const soma = num1+num2;
const subtracao = num1-num2;
const multi = num1*num2;


    console.log('a Soma deles é: ' +soma);
    console.log(' Subtração deles é: ' +subtracao);
    console.log('a Multiplicação deles é: ' +multi);
    if (num2 == 0){
        console.log('ta maluco doidão divisão por zero!')
     } else {
     const divisao = num1/num2 
    console.log('a Divisão deles é: ' +divisao)}
}
calculos(Pnumero,Snumero)
}

//Atividade 3
function atividade3(){
    for (let i = 10; i >= 1; i++ ){
        console
    }

}
