//1.일반 포문
const array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);  
}

console.log("******************")
//2 forEach
array.forEach((value)=>{console.log(value)});


console.log("******************")
//3 for of 문
for( let data of array){
  console.log(data);
}


console.log("******************")
//4. for in 문
for( let index in array){
  console.log(`index = ${index}${array}[index]`);
}