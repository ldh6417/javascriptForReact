//1.날짜를 생성하는 방법
let date1 = new Date();
let timeValue = date1.getTime();
console.log(timeValue);
console.log(date1);

//2. 사용자가 날짜를 설정하는방법
let date2 = new Date(1995,1-1,1,23,59,59);
let timeValue2 = date2.getTime();
console.log(timeValue2);
console.log(date2);


//3. 상대방에게 getTime() 주게되면 날짜로 복구가능할까
let date3 = new Date(timeValue2);
console.log(`date3=${date3}`);


//4.날짜에서 원하는 추출 방법
let date4 = new Date();
let year =date4.getFullYear();
let month =date4.getMonth()+1;
let date =date4.getDate();
let hour =date4.getHours();
let min =date4.getMinutes();
let sec =date4.getSeconds();
let msec =date4.getMilliseconds();

console.log(year);
console.log(month);
console.log(date);
console.log(hour);
console.log(min);
console.log(sec);
console.log(msec);

// 시간제외 날짜만 출력하기
let date5 = new Date();
console.log(date5.toDateString());

//현재 지역의 시간을 출력
console.log(date5.toLocaleDateString);
