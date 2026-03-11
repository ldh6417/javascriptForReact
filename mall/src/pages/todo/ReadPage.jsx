import Header from "../../include/Header";
import { useParams, useNavigate, useSearchParams, createSearchParams } from "react-router-dom";
import { useCallback } from "react";
import ReadComponent from "../../components/todo/ReadComponent";
import useCustomMove from "../../hooks/useCustomMove";
import "./ReadPage.css";

const ReadPage = () => {
  const { tno } = useParams();
  const navigate = useNavigate();
  const [queryParms] = useSearchParams();
  const { moveToList, meveToModify } = useCustomMove();

  const page = queryParms.get("page") ? parseInt(queryParms.get("page")) : (1);
  const size = queryParms.get("size") ? parseInt(queryParms.get("size")) : (10);
  // "?page=1&size=10"
  const queryStr = createSearchParams({ page, size }).toString();

  //동적 페이지 이동 

  const moveModify = useCallback(() => {
    navigate({
      pathname: `/todo/modify/${tno}`, search: queryStr
    });
  }, [navigate, tno, queryStr]);

  return (
    <div className="main-container">
      <Header />
      <ReadComponent tno={tno} moveToList={moveToList} moveToModify={moveModify} />
    </div>
  );
};

export default ReadPage;