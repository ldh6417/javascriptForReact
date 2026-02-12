import { Routes, Route } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";
import "./App.css";

import Home from "./components/Home";
import New from "./components/New";
import NotFound from "./components/NotFound";
import Edit from "./components/Edit";
import Diary from "./components/Diary";

// 가상 데이터
const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date(2026, 1, 3).getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date(2026, 0, 1).getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];

    case "UPDATE":
      return state.map((item) =>
        item.id === action.data.id ? action.data : item
      );

    case "DELETE":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}

// Context 생성
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  // CREATE
  const onCreate = (createdDate, emotionId, content) => {
    const newItem = {
      id: idRef.current++,
      createdDate,
      emotionId,
      content,
    };

    dispatch({ type: "CREATE", data: newItem });
  };

  // UPDATE
  const onUpdate = (id, createdDate, emotionId, content) => {
    const updatedItem = {
      id,
      createdDate,
      emotionId,
      content,
    };

    dispatch({ type: "UPDATE", data: updatedItem });
  };

  // DELETE
  const onDelete = (id) => {
    dispatch({ type: "DELETE", id });
  };

  return (
    <DiaryStateContext.Provider value={state}>
      <DiaryDispatchContext.Provider
        value={{ onCreate, onUpdate, onDelete }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
