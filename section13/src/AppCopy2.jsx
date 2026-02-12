import { Routes, Route,Link,useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import New from "./components/New";
import NotFound from "./components/NotFound";
import Edit from "./components/Edit";
import Diary from "./components/Diary";
import Header from "./components/Header";

function App() {
  const nav = useNavigate();
  const onClickGoPage = (e)=> {
    nav(`/${e.target.value}`)
  }
  return (
    <>
      {/*여기에 적은 내용은 모든페이지가 공통으로 사용 */}
      <h2> <Link to="/">Home</Link> ||<Link to="/new">New</Link> ||<Link to="/edit">Edit</Link> ||<Link to="/diary/1">Diary</Link> </h2>
      <h2> <a href="/">Home</a>|| <a href="/new">New</a>|| <a href="/diary">Diary</a>|| <a href="/edit">Edit</a> <br /> </h2>
      
      <button value="" onClick={onClickGoPage}>Home</button>
      <button value="New" onClick={onClickGoPage}>New</button>
      <button value="Diary" onClick={onClickGoPage}>Diary</button>
      <button value="Edit" onClick={onClickGoPage}>Edit</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new/:id" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
