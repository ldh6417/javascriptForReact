import Header from "../../include/Header";
import { useParams, useSearchParams } from "react-router-dom";
import "./ModifyPage.css"

const ModifyPage = () => {
  const { tno } = useParams();
  const [queryParms] = useSearchParams();

  const page = queryParms.get("page") ? parseInt(queryParms.get("page")) : (1);
  const size = queryParms.get("size") ? parseInt(queryParms.get("size")) : (10);

  return (
    <div className="main-container">
      <Header />
      <p>Modify Page tno = {tno}</p>
      <p>Modify Page tno = {page} size={size}</p>
      <main className="content-area">
        <div className="button-wrapper">
          <button className="custom-btn-outline" type="button">
            Modify Page
          </button>
        </div>
      </main>
    </div>
  );
};

export default ModifyPage;