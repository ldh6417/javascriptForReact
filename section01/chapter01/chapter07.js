let a; 
console.log(a);
console.log (typeof a);
//누군가 값을 주었다 어떠한 값을 줄지모름
//동적타입이기 떄문에 모든타입을 다 받아버리단.
// 절대 받으면 안되는것 null unidefined
let b = 20;
a = 30;
a = a ?? b;
console.log(a);

//11. 삼항연산자 
// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀" 
let var8 = 10; 
let res = var8 % 2 === 0 ? "짝수" : "홀수"; 
console.log(res);