import Header from "./Header";
import Button from "./Button";
import DiaryList from "./DiaryList";
import { DiaryStateContext } from "../App";
import { useContext, useState } from "react";

const Home = () => {
  const state = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  // 이전달
  const onDecreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
    );
  };

  // 다음달
  const onIncreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
    );
  };

  // 시작일 / 종료일
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();

  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();

  const monthlyData = state.filter((item) => item.createdDate >= beginTime & item.createdDate <= endTime);

  return (
    <>
      <Header
        leftChild={
          <Button text="<" type="이전달" onClick={onDecreaseMonth} />
        }
        rightChild={
          <Button text=">" type="다음달" onClick={onIncreaseMonth} />
        }
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1
          }월`}
      />

      <DiaryList montlyData={monthlyData} />
    </>
  );
};

export default Home;
