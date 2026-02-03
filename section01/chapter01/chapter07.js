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