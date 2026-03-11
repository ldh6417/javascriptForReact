import { useState, useEffect } from "react";

const StudentForm = ({ onCreate, onUpdate, editId, students }) => {
  const [name, setName] = useState("");
  const [kor, setKor] = useState("");
  const [math, setMath] = useState("");
  const [eng, setEng] = useState("");
  const [date, setDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

 useEffect(() => {
  if (editId === null) return;

  const student = students.find((s) => s.id === editId);

  if (!student) return;  
  setName(student.name);
  setKor(student.kor);
  setMath(student.math);
  setEng(student.eng);
  setDate(student.createdAt);

}, [editId, students]);




  const reset = () => {
    setName("");
    setKor("");
    setMath("");
    setEng("");
    setDate(new Date().toISOString().slice(0, 10));
  };

  const handleSubmit = () => {
    if (!name || !kor || !math || !eng) return;

    const data = { name, kor, math, eng, createdAt: date };

    if (editId) {
      onUpdate(data);
    } else {
      onCreate(data);
    }

    reset();
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />
      <input
        type="number"
        value={kor}
        onChange={(e) => setKor(e.target.value)}
        placeholder="국어"
      />
      <input
        type="number"
        value={math}
        onChange={(e) => setMath(e.target.value)}
        placeholder="수학"
      />
      <input
        type="number"
        value={eng}
        onChange={(e) => setEng(e.target.value)}
        placeholder="영어"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId ? "수정완료" : "추가"}
      </button>
    </div>
  );
};

export default StudentForm;
