import { check2 } from "../../../services/Url";
import "./Check.scss";

function Check({ descri }) {
  return (
    <div className="check">
      <div className="icon">
        <img src={check2} alt="check icon" />
      </div>
      <p className="description">{descri}</p>
    </div>
  );
}

export default Check;