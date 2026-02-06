const Sub2 = ()=>{
  const user = {name: "ldh" , isLogin: true}  

  return<> 
  {user.isLogin === true ? (<div>{user.name}로그아웃</div>):(<div>로그인</div>)}


  </>
  

};

export default Sub2;

