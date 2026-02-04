//클래스속에 멤버변수 반복문을 이용하여 출력
const person = { 
name: "김동진", 
age: 25, 
tall: 179 
};  

const personKeys = Object.keys(person);
console.log(personKeys);

for (let index = 0; index < personKeys.length; index++) {
  const key = personKeys[index];
  console.log(`${key} = ${key}person[key]`);
}

Object.values(person);