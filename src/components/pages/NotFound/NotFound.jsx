import "./NotFound.scss";
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <h2>not found</h2>
        <Link to="/">go back home</Link>
      </div>
    </div>
  );
}

export default NotFound;