//클래스속에 멤버변수 반복문을 이용하여 출력
const person = {
  name: "이도훈",
  age: 29,
  tall: 175
};

const personKey = Object.keys(person);
for (let i = 0; i < personKey.length; i++) {
  const curKey = personKey[i];
  const curValue = person[curKey];
  console.log(`${curKey} : ${curValue}`);
};
console.log("*****************");
const personValues = Object.values(person);
for (let i = 0; i < personValues.length; i++) {
  console.log( personValues[i])
};