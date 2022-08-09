// ARROW FUNCTION COM MAIS DE UMA LINHA DE INSTRUÇÃO
const verifica = (num1,num2) => {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return num1 + num2;
    }
}
// ARROW FUNCTION COM LINHA ÚNICA DE INSTRUÇÃO
const oiaso = numero => numero ** 2;

// EXPRESSÃO DE FUNÇÃO
const opa = function(numero) {return numero * 100};

console.log(verifica(1,2));
console.log(verifica(3,2));
console.log(oiaso(5));
console.log(opa(13));