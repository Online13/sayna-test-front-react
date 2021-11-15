import { useEffect, useRef } from "react";
import observe from "../../../assets/scripts/observe";
import { check } from "../../../services/Url";
import "./BenefitItem.scss";

function BenefitItem({ id, describe, alt, title }) {

  const benefit = useRef();

  useEffect(() => {
    observe({
      target: benefit.current,
      threshold: 0.5,
      callback: e => {
        if (e.intersectionRatio > 0.5) {
          benefit.current.classList.add(`appear-${id}`);
        } else {
          benefit.current.classList.remove(`appear-${id}`);
        }
      }
    });
  },[id]);

  return (
    <div className="benefit-item" ref={benefit}>
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