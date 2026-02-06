const Main = ()=>{
  let number = 9;
  const obj = {name :"ldh", age:29};
  const array = [1,2,3,4]
  let test;

  return <> 
  <main>
     <h1>Main 영역</h1>
     <h1>number = {number %2 === 0 ? '짝수' : '홀수'}</h1>
     <h1>상수 = {10}</h1>
     <h1>number = {number}</h1>
     <h1>[1,2,3] = {[1,2,3,]}</h1>
     <h1>array = {array}</h1>
     <h1>obj.name = {obj.name}</h1>
     <h1>undefind = {undefined}</h1>
     <h1>unull = {null}</h1>
     <h1>unull 병합연사자  test = {test ?? 10}</h1>


  </main>
  </>
};
export default Main;

