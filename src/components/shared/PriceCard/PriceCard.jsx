import { useMemo } from "react";
import Button from "../Button/Button";
import Check from "../Check/Check";
import "./PriceCard.scss";

function PriceCard({ active=false, type, price, options }) {

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
    <div className={`price-card ${active ? "active" : ""}`}>
      <div className="type" style={{ color: theme }}>
        {type}
      </div>
      <div className="price-bulle">
        <div className="bulle" style={{ backgroundColor: bulle, color }}>
          {price}
        </div>
      </div>
      <div className="plan">
        {options.map((option, id) => <div>
          <Check key={`option-${id}-${type}`} descri={option} />
        </div>)}
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