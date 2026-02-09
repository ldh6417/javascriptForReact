/*
console.log(1);
setTimeout(()=>{
 console.log(2);
},3000);
console.log(3);


//함수선언식
function task(a,b) { 
  setTimeout(() => { 
    let sum = a+ b;
    console.log(`a+b = ${sum}`); 
  }, 3000); 
} 
task(10,20);


//함수선언식
function task(a,b) { 
  setTimeout(()=>{
    let sum = a+b;
    callbackA(sum)
  },3000); 
}

task(10,20,(sum) => console.log(sum));

//2번방식
function task(a,b) { 
  setTimeout(()=>{
    let sum = a+b;
    console.log(sum);
  },3000); 
}

task(10,20);


//3번방식
function task(a,b,callback) { 
  setTimeout(()=>{
    callback(a,b)
  },3000); 
}

task(10,20,(a,b) => console.log(`a+b=${a+b+1000}`));
*/


//1단계 음식을 주문하는사람
// 이벤트 음식을 주문하면 3초후에
// 핸들러 음식이 완성이 되서 나오는것
function oder (food,callback){
  console.log(`${food}가 주문되었습니다.`);
  setTimeout(()=> {
    callback(food)
  },3000);
}

oder("떡볶이",(food)=> console.log (`${food}가 완성`))

//1단계 음식을 차갑게주문하는사람
function coldfood (food,callback){
  console.log(`${food}차갑게 요청.`);
  setTimeout(()=> {
    callback(food)
  },3000);
}
coldfood("떡볶이 완성",(food)=> console.log (`${food}냉동 완성`))

//1단계 음식을 냉동주문하는사람
function frezefood (food,callback){
  console.log(`${food}냉동 요청.`);
  setTimeout(()=> {
    callback(food)
  },3000);
}
frezefood("떡볶이 완성",(food)=> console.log (`${food}내동 완성`))


