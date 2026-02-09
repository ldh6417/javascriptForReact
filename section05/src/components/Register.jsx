import { useState } from "react";
import { useRef } from "react";
//회원 가입폼
//1.이름 2.생년월일 3.국적 4.자기소개

const Register = () => {

  //useState
  const [input, setInput] = useState({
    name: '',        // 초기값은 빈 문자열이 좋아요
    birth: '',
    national: '',
    bio: ''
  });

  // useRef
  const countRef = useRef(0);
  const inputNameRef = useRef(null);
  const inputBioRef = useRef(null);

  //이벤트 정의
  const onChange = (e) => {
    countRef.current++;
    console.log(`current = ${countRef.current}`);

    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    // 이름이 비어있으면 이름 input에 포커스
    if (input.name === "") {
      inputNameRef.current.focus();
      console.log(inputNameRef);
      return;
    }

    // 자기소개가 비어있으면 textarea에 포커스
    if (input.bio === "") {
      inputBioRef.current.focus();
      console.log(inputBioRef);
      return;
    }

    console.log("제출 성공", input);
  };

  return (
    <>
      <div>
        <label htmlFor="name">성명</label>
        <input
          ref={inputNameRef}
          value={input.name}
          type="text"
          name="name"
          id="name"
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="birth">생년월일</label>
        <input
          value={input.birth}
          type="date"
          name="birth"
          id="birth"
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="national">국적</label>
        <select
          name="national"        // name은 반드시 문자열
          id="national"
          value={input.national}
          onChange={onChange}
        >
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="jp">일본</option>
        </select>
      </div>

      <div>
        <label htmlFor="bio">자기소개</label>
        <textarea
          ref={inputBioRef}
          name="bio"
          id="bio"
          cols="30"
          rows="10"
          value={input.bio}
          onChange={onChange}
        />
      </div>

      <div>
        <button type="button" onClick={onSubmit}>
          제출
        </button>
      </div>
    </>
  );
};

export default Register;
