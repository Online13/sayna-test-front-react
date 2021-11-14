import { useEffect, useMemo, useRef } from "react";
import observe from "../../../assets/scripts/observe";
import { star } from "../../../services/Url";
import Button from "../Button/Button";
import Check from "../Check/Check";
import "./PriceCard.scss";

function PriceCard({ active=false, type, price, options }) {

  const card = useRef();

  useEffect(() => {
    observe({
      target: card.current,
      threshold: 0.5,
      callback: e => {
        if (e.intersectionRatio > 0.5) {
          card.current.classList.add(`appear`);
        } else {
          card.current.classList.remove(`appear`);
        }
      }
    });
  },[]);

  const theme = useMemo(() => {
    switch (type) {
      case "basic":
        return "#26CFA2";
      case "professional":
        return "#FFAE8C";
      case "premium":
        return "#438AFF";
      default:
        return "none";
    }
  }, [type]);

  const color = useMemo(() => {
    switch (type) {
      case "basic":
        return "#6DCAB2";
      case "professional":
        return "white";
      case "premium":
        return "#77C0EE";
      default:
        return "none";
    }
  },[type]);

  const bulle = useMemo(() => {
    switch (type) {
      case "basic":
        return "#BEFFDB";
      case "professional":
        return theme;
      case "premium":
        return "#D7F4FF";
      default:
        return "none";
    }
  },[type, theme]);

  return (
    <div ref={card} className={`price-card ${active ? "active" : ""}`}>
      <div className="type" style={{ color: theme }}>
        {type}
      </div>
      {active && <div className="save">
        <span>SAVE 20%</span>  
      </div>}
      {active && <div className="star">
        <img src={star} alt="star yellow" />
      </div>}
      <div className="price-bulle">
        <div className="bulle" style={{ backgroundColor: bulle, color }}>
          {price}
        </div>
      </div>
      <div className="plan">
        {options.map((option, id) => {
          return (<div key={`option-${id}-${type}`}>
            <Check descri={option} />
          </div>);
        })}
      </div>
      <div className="action">
        <Button background={theme} color="white">
          Choose Plan
        </Button>
      </div>
    </div>
  );
}

export default PriceCard;