import SquareCard from "../../../../shared/SquareCard/SquareCard";
import "./Insurance.scss";
import homeIcon from "./../../../../../assets/images/home-insurance.svg";
import carIcon from "./../../../../../assets/images/car-insurance.svg";
import lifeIcon from "./../../../../../assets/images/life-insurance.svg";
import businessIcon from "./../../../../../assets/images/business-insurance.svg";
import travelIcon from "./../../../../../assets/images/travel-insurance.svg";
import otherIcon from "./../../../../../assets/images/other-insurance.svg";
import { useMemo } from "react";

function Insurance() {

  const insuranceType = useMemo(() => {
    return [
      {
        icon: homeIcon,
        title: "Home Insurance",
        bg: "#B0F3FF",
        alt: ""
      },
      {
        icon: carIcon,
        title: "Car Insurance",
        bg: "#FBD1FF",
        alt: ""
      },
      {
        icon: lifeIcon,
        title: "Life Insurance",
        bg: "#DAFFD3",
        alt: ""
      },
      {
        icon: businessIcon,
        title: "Business Insurance",
        bg: "#FFF4B4",
        alt: ""
      },
      {
        icon: travelIcon,
        title: "Travel Insurance",
        bg: "#FFDAD1",
        alt: ""
      },
      {
        icon: otherIcon,
        title: "Other Insurance",
        bg: "#D3D3FF",
        alt: ""
      },

    ]
  }, []);

  return (
    <div className="insurance">
      <div className="insurance-title">
        <h2 className="title">Choose your Instance</h2>
        <p className="description">
          Keep Your Life Smile, Safe, and Wealthy
        </p>
      </div>
      <div className="insurance-content">
        {insuranceType.map(insurance => {
          return <SquareCard
            src={insurance.icon}
            alt={insurance.alt}
            title={insurance.title}
            bg={insurance.bg}
            content="Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage."
          />
        })}
      </div>
    </div>
  );
}

export default Insurance;