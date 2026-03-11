const StudentTable = ({ students, onDelete, setEditId }) => {
  return (
    <table border="1" cellPadding="5">
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>국어</th>
          <th>수학</th>
          <th>영어</th>
          <th>총점</th>
          <th>평균</th>
          <th>입력날짜</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>{s.name}</td>
            <td>{s.kor}</td>
            <td>{s.math}</td>
            <td>{s.eng}</td>
            <td>{s.total}</td>
            <td>{s.avg}</td>
            <td>{s.createdAt}</td>
            <td>
              <button onClick={() => setEditId(s.id)}>수정</button>
              <button onClick={() => onDelete(s.id)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
