import { check } from "../../../services/Url";
import "./BenefitItem.scss";

function BenefitItem({ describe, alt, title }) {
  return (
    <div className="benefit-item">
      <div className="benefit-logo">
        <img src={check} alt={alt} className="logo" />
      </div>
      <div className="benefit-content">
        <strong>{title}</strong>
        <p>{describe}</p>
      </div>
    </div>
  );
}

export default BenefitItem;