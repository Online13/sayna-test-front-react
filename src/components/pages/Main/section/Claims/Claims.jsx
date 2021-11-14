import { useMemo } from "react";
import Claim from "../../../../shared/Claim/Claim";
import "./Claims.scss";
import im1 from "./../../../../../assets/images/after-blue.png";
import im2 from "./../../../../../assets/images/after-pink.png";

function Claims() {

  const claims = useMemo(() => {
    return [
      {
        id: 0,
        backgroundColor: "#B0F3FF",
        color: "#99E1EE",
        title: "Report Claim",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros."
      },
      {
        img: im1
      },
      {
        id: 1,
        backgroundColor: "#FBD1FF",
        color: "#E9B4ED",
        title: "Claim Processing",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros."
      },
      {
        img: im2
      },
      {
        id: 2,
        backgroundColor: "#DAFFD3",
        color: "#B9E7B0",
        title: "Final Settlement",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nunc vitae velit rutrum suscipit non et eros."
      },
    ];
  }, []);

  return (
    <div className="claims">
      <div className="claims-title">
        <h2 className="title">Simplified Claims</h2>
        <p className="description">Easy as One, Two, Three</p>
      </div>
      <div className="claims-content">
        {claims.map((claim, id) => {
          if (claim.img !== undefined && claim.img !== null) {
            return (<div key={`claim-div-${id}`} className="liaison">
              <img src={claim.img} alt="liaison"/>  
            </div>);
          } else {
            return (<Claim
              key={`claim-${claim.id}`}
              id={claim.id}
              title={claim.title}
              content={claim.content}
              backgroundColor={claim.backgroundColor}
              color={claim.color}
            />);
          }
        })}

      </div>
    </div>
  );
}

export default Claims;