import { useState } from 'react'
import './App.css'

function App() {
  const [students,setStudents] = useState("");

  return (
    <>
     <h1>학생관리 curd</h1>
     <h3>학생수:{students.length}</h3>
    <input value={name} onChange={(e)=>setName
    (e.target.value)}placeholder='이름을입력'>
    </input>
    </>
  )
}

export default App
