import "./BenefitItem.scss";
import check from "./../../../assets/images/tick.png";

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