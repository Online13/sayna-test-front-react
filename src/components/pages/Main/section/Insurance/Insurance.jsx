import SquareCard from "../../../../shared/SquareCard/SquareCard";
import "./Insurance.scss";
import { useMemo } from "react";
import { businessIcon, carIcon, homeIcon, lifeIcon, otherIcon, travelIcon } from "../../../../../services/Url";

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
        {insuranceType.map((insurance, id) => {
          return <SquareCard
            src={insurance.icon}
            alt={insurance.alt}
            title={insurance.title}
            bg={insurance.bg}
            key={`insurance-${id}`}
            content="Insurance can have various effects on society through the way that it changes who bears the cost of losses and damage."
          />
        })}
      </div>
    </div>
  );
}

export default Insurance;