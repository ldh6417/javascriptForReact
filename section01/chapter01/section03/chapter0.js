
// const arr=["a","b","c","d"];
// //화살표 함수
// arr.forEach((eng)=>console.log(eng));
// //map 문
// let newArray =arr.map((value) => "집어넣기:" + value);
// console.log(newArray);

//  let array = [ 
//  { name: "일도훈", hobby: "축구" },
//  { name: "이도훈", hobby: "수영" }, 
//  { name: "삼도훈", hobby: "독서" }, 
//  ]; 

// const finded = array.find(
//   (item) => item.name === "일도훈"
// );
// console.log(finded);

// const filter = array.filter(
//   (item)=>item.hobby === "수영"
// );
// console.log(filter);

// let findIndex = array.findIndex((array) => array.name === "이도훈");
// console.log(array[findIndex]);
// console.log("************");

// let slicearray = array.slice(1);
// console.log(slicearray);

// let array2 = [ 
//  { name: "일대근", hobby: "축구" },
//  { name: "이대근", hobby: "수영" }, 
//  { name: "삼대근", hobby: "독서" }, 
//  ]; 

// let array3 = array.concat(array2);
// console.log(array2);
// let eng = [0,1,2,3,4];
// eng.sort((num1,num2)=> num1 - num2);
// console.log(eng);

// let num = ["4","1","5","2","3"];
// num.sort()
// console.log(num);


const array1 = ["오늘", "수업", "쉽지", "않네", "ㅎ;"]

const joined = array1.join("-");
console.log(joined);

const splited = joined.split("-");
console.log(splited);











// console.log("*****************")
// //다른방법 표현
// arr.forEach(function(e){  
//  console.log(e); 
// });

// console.log("*****************")
// //현재배열을 2배로해서 새로운 배열로 만들기
// const arr2=[1,2,3,4];
// const newArr = [];
// arr2.forEach(function(elm){
//   newArr.push(elm*2);
// });
// console.log(newArr);
// console.log("*****************")

// //다른방법 표현
// const newArr2 = arr.map((elm)=>{return elm*2});
// console.log(newArr2);
// console.log("*****************")

// //배열속 원하는 값 찾기
// const arr3 = [1,2,3,4];
// let findnumber = 3;
// arr3.forEach((elm)=> {
//   if (elm === findnumber) {
//     console.log(true);
//   }
// });
// //다른방법
// //const arr3 = [1,2,3,4];
// let findnumber2 = 2;
// console.log(arr3.includes(findnumber2));
// //위치 찾기
// //const arr3 = [1,2,3,4];
// let mapnumber = "3";
// console.log(arr.indexOf(mapnumber));
// //배열속 객체 찾기
// //const arr3 = [1,2,3,4];
// const findIdex = arr3.findIndex(
//   (item)=>item ===3
// );
// console.log(findIdex);
// onsole.log("*****************");















