import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiaryList = ({ montlyData }) => {
  const [sortType, setSortType] = useState("latest");

  //페이지라우팀
  const nav = useNavigate();

  // 정렬 처리 (내림차순,오름차순)
  const getSortedMonthlyData = () => {
    return montlyData
      .slice()
      .sort((a, b) => {
        if (sortType === "oldest") {
          return a.createdDate - b.createdDate;
        } else {
          return b.createdDate - a.createdDate;
        }
      });
  };



  const sortedMonthlyData = getSortedMonthlyData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="latest">LATEST</option>
          <option value="oldest">OLDEST</option>
        </select>

        <Button text="새로운일기쓰기" type="POSITIVE" onClick={() => nav("/new")} />
      </div>

      <div className="list_Wrapper">
        {sortedMonthlyData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
