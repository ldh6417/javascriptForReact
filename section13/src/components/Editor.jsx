import { useEffect, useState } from "react";
import Button from "./Button";
import './Editor.css'
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "끔찍함",
  },
];

//날짜를 문자열로 리턴하는 함수
const getStringDate = (targetDate) => {
  //yyyy-mm-dd 형식
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`
  if (date < 10) date = `0${date}`
  return `${year}-${month}-${date}`;
}

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();
  const [createdDate, setCreatedDate] = useState(initData ? new Date(initData.createdDate) : new Date())
  // useEffect 없이 바로 초기값으로 할당
  const [input, setInput] = useState(initData ? {
    ...initData,
    createdDate: new Date(initData.createdDate)
  } : {
    createdDate: new Date(),
    emotionId: 3,
    content: ""
  });

  //마운트기능 마운트가 되자마자 전달되는 initData 값을 각각의 useState 변수 저장해야된다.




  const onChangeInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    if (name === 'createdDate') {
      value = new Date(value)
    }
    setInput({ ...input, [name]: value })
  }


  return <>
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" name="createdDate" value={getStringDate(input.createdDate)} onChange={onChangeInput} />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => {
            return <EmotionItem key={item.emotionId} {...item}
              onClick={(e) => { onChangeInput({ target: { name: "emotionId", value: item.emotionId } }) }}
              isSelected={item.emotionId === input.emotionId} />
          })}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?" name="content" value={input.content}
          onChange={onChangeInput} />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button text={"작성완료"} type={"POSITIVE"} onClick={() => onSubmit(input)} />
      </section>
    </div>
  </>
}
export default Editor;