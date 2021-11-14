import Button from "../Button/Button";
import "./Proposal.scss";

function Proposal({ alt, src, title, description, link }) {
  return (
    <div className="proposal">
      <div className="proposal-card">
        <div className="logo">
          <img src={src} alt={alt} />
        </div>
        <div className="proposal-content">
          <h4 className="title">{title}</h4>
          <p className="description">{description}</p>
        </div>
        <div className="btn">
          <Button background="#26CFA2" color="white">Get your free Quote</Button>
        </div>
      </div>
    </div>
  );
}

export default Proposal;