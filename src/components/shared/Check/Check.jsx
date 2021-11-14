import check from "./../../../assets/images/check-svgrepo-com.svg";
import "./Check.scss";

function Check({ descri }) {
  return (
    <div className="check">
      <div className="icon">
        <img src={check} alt="check icon" />
      </div>
      <p className="description">{descri}</p>
    </div>
  );
}

export default Check;