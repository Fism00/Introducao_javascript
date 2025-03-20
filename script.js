//atividade 1
function atividade1(){
let number = prompt("digite um numero");

    function verificarpar(number){
    if (0 == number % 2){
        console.log("é par");
    } else {
        console.log("é impar");
    }
}
 verificarpar(number);
}
//Atividade 2
function atividade2(){
let Pnumero = parseInt(prompt("Me fale um numero"));
let Snumero = parseInt(prompt("Me fale outro numero"));

let soma = (Pnumero+Snumero);
let subtracao = (Pnumero-Snumero);
let multi = (Pnumero*Snumero);

function calculos(){
    console.log("a Soma deles é: " +soma);
    console.log("a Subtração deles é: " +subtracao);
    console.log("a Multiplicação deles é: " +multi);
    if (Snumero == 0){
        console.log("ta maluco doidão divisão por zero!")
     } else {
     let divisao = (Pnumero/Snumero) 
    console.log("a Divisão deles é: " +divisao)}
}
calculos()
}
