import { useState } from "react";


const Count = ()=> {
  const [count,setCount] = useState(0);
  const onPluseClick = (e)=> {setCount(count+1) }

  return <>
  <div>
    <h1>{count}</h1>
    <button type="button" onClick={onPluseClick}>+</button>
  </div>
  
  </>
}

export default Count;