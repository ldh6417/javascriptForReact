import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

function App() {
  const [students, setStudents] = useState([]);
  const [editId, setEditId] = useState(null);

  // 총점 평균 계산
  const calculate = (kor, math, eng) => {
    const total = Number(kor) + Number(math) + Number(eng);
    const avg = (total / 3).toFixed(1);
    return { total, avg };
  };

  // 추가
  const onCreate = (studentData) => {
    const { total, avg } = calculate(
      studentData.kor,
      studentData.math,
      studentData.eng
    );

    const newStudent = {
      id: Date.now(),
      ...studentData,
      total,
      avg,
    };

    setStudents([...students, newStudent]);
  };

  // 삭제
  const onDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // 수정
  const onUpdate = (studentData) => {
    const { total, avg } = calculate(
      studentData.kor,
      studentData.math,
      studentData.eng
    );

    setStudents(
      students.map((s) =>
        s.id === editId
          ? { ...s, ...studentData, total, avg }
          : s
      )
    );

    setEditId(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>학생 성적 관리 CRUD</h2>

      <StudentForm
        onCreate={onCreate}
        onUpdate={onUpdate}
        editId={editId}
        students={students}
      />

      <StudentTable
        students={students}
        onDelete={onDelete}
        setEditId={setEditId}
      />
    </div>
  );
}

export default App;
