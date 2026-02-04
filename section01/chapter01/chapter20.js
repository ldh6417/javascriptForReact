//내장함수(라이브러리) (반복문 => 자기스타일로 변경 반복문)
//forEach 멤버함수 화살표함수
/*
const array = [1,2,3,4];

 for (let i = 0; i < array.length; i++) {
  
 console.log(array[i]);
 }

array.forEach((value,index,array)=>{
  console.log(`value=${value}`)
  console.log(`value=${index}`)
  console.log(`value=${array}`)
  console.log(`**********************************`)
});

array.forEach((value)=>{
  console.log(`${value}`)
});



console.log(array);
*/
// const array = [1,2,3,4];
// const newArray = [];

// for (let i = 0; i < array.length; i++) {
//   let value =  array[i];
//   value = value * 10;
//   newArray.push(value);
// }

// console.log(array)
// console.log(newArray)

// let _newArray = array.map((value)=> value*10);
// console.log (_newArray);

//filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환


// let array2 = [ 
// { name: "구길동", hobby: "테니스" },
// { name: "저길동", hobby: "테니스" }, 
// { name: "홍길동", hobby: "독서" }, 
// ]; 

// let newArray2 = array2.filter(item => item.hobby === "테니스");
// array2.filter((value)=>{value.hobby === "독서"});

// console.log(array2);
// console.log(newArray2);

// array1.filter((value)=>{value.hobby === "테니스"});

// console.let(array1);
// console.let(newArray1);
/*
let array1 = [ 
{ name: "구길동", hobby: "테니스" },
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 

let findItem = null;
for (let i = 0; i < array1.length; i++) {
  let item = array1[i];
  if (item.hobby === "독서") {
    findItem = item;
    break;
  }
}
console.log(findItem);


let findItem2 = array1.find((value)=>value.hobby === "독서");

let findIdex = array1.findIndex((value)=>value.hobby === "독서");

let findIdex2 = array1.indexOf({name: "홍길동", hobby: "독서"});

console.log(findIdex2);
*******************
*********************
/*/

// sice(strt,nad)
/*
let array1 = [ 
{ name: "구길동", hobby: "테니스" },
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
{ name: "구길동", hobby: "테니스" },
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 
let newArray  = array1.slice(0,3);
console.log(newArray);
*/


// let array1 = [ 
// { name: "구길동", hobby: "테니스" }, 
// { name: "저길동", hobby: "테니스" }, 
// { name: "홍길동", hobby: "독서" }, 
// ]; 

// let array2 = [ 
// { name: "구길동", hobby: "테니스" }, 
// { name: "저길동", hobby: "테니스" }, 
// { name: "홍길동", hobby: "독서" },
// ]; 

// let array3 = array1.concat(arra2)
// console.log(array3);

// 배열을 사전순으로 내림차순 정렬하는 메서드 
/*
let arry3 = [0,1,3,2,10,30,20]; 

//숫자단위는 정렬은 문제가 발생한다.
arry4.sort((num1,num2)=> num1 - num2);


//숫자를 정렬
let arry4 = ["abc","def","asd","qwe","zxc","cvb"]; 
console.log(arry4);
arry4.sort()


let arry5 = ["abc","def","asd","qwe","zxc","cvb"]; 
let arry6 = arry5.sort().reverse();
console.log(arry6);
*/

const arr6 = ["김동진","님","안녕하세요","반가워요"]; 
const joined = arr6.join("=="); 
console.log(joined);

const array7 = joined.split("==");
console.log(array7);

