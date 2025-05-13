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
    let i = 10
    while (i >= 1){
       console.log(i);
       i--;
    }
}

//Atividade 4
function atividade4(){
    let palavra = prompt('Me fale uma palavra:');
    function inverter(letras){
        cortado = letras.split('');
        arvalap = cortado.reverse();
        descortado = arvalap.join('');

        console.log(descortado)
    }

inverter(palavra)
}

//atividade 5
function atividade5(){
    let sPalavra = prompt('Me fale uma palavra:'); 
    function contarCaracteres(palavrinha){
        separado = palavrinha.length;
        console.log('essa palavra tem: ' +separado+ ' letras')
    }
    contarCaracteres(sPalavra)
}

//atividade 6
function atividade6(){
    let carro = {
        marca: 'honda',
        modelo: 'civic',
        ano: 1997,
        falaPropriedade: function(){
            console.log('A marca do carro é: ' +this.marca);
            console.log('O modelo do carro é: ' +this.modelo);
            console.log('O ano do carro é: ' +this.ano);
        }
    };
    carro.falaPropriedade(carro);
}

//atividade 7
function atividade7(){
    let snome = prompt('qual é seu nome?');
    let smensagem = prompt('qual é sua mensagem?');
    if (smensagem == 0){
        smensagem = ('Olá!');   
    }
    
    function mensagemPersonalizada(nome,mensagem){
        console.log(mensagem+ ' ' +nome);
    }
    mensagemPersonalizada(snome,smensagem);
}

//Atividade 8
function atividade8(){
    let numero1 = parseFloat(prompt('Fale sua primeira nota:'));
    let numero2 = parseFloat(prompt('Fale sua segunda nota:'));
    let numero3 = parseFloat(prompt('Fale sua terceira nota:'));
    function mediador(num1,num2,num3){
        soma = num1+num2+num3;
        media = soma/3;
        console.log('Sua media é: ' +media);
    }
    mediador(numero1,numero2,numero3)
}

//atividade 9
function atividade9(){
    console.log('numeros multiplos de 3, de uma contagem até 20!')
    let e = 0;
    let v = 0;
    let s = 0;
    let Multiplos = [];
    let nMultiplos = [];
    for (let a = 1; a <= 20; a++){
        if (a % 3 == 0){
            Multiplos[e] = a
            e++;
        } else {
            nMultiplos[v] = a
            v++;
        }
        
    };
    console.log('numeros multiplos de 3:')
    for (let s = 0; s < Multiplos.length; s++){
        console.log(Multiplos[s]);
    }
    console.log('numeros que não são multiplos de 3:')
    for (let s = 0; s < nMultiplos.length; s++){
        console.log(nMultiplos[s]);
    }
}

//atividade 10
function atividade10(){
    let palindromo = prompt('Me fale uma palavra:');
    function verificarPalidromo(letras){
        invertida = letras.split('').reverse().join('');
        console.log('a palavra normal: ' +letras);
        console.log('a palavra invertida: ' +invertida);
        if (letras == invertida){
            console.log('é um palindromo :D');
        } else {
            console.log('não é palindromo :C');
        };
        
    }

verificarPalidromo(palindromo)
}

//atividade 11

function atividade11(){
    let posouneg = prompt('me fale um numero:');
    function verificarSinal(number1){
        if (number1 == 0){
            console.log('Seu numero é zero ele meio que não tem sinal')
        } else{
        if(number1 >= 0){
            console.log('Seu numero é positivo');
        } else {
            console.log('seu numero é negativo');
        };
        };
    }
    verificarSinal(posouneg);
}
