//1. 사용자 정의된 객체
let obj1 = {name : "이도훈",age:29}
let obj2 = {...obj1};

obj2.hobby = "축구";
console.log(obj1===obj2);

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));