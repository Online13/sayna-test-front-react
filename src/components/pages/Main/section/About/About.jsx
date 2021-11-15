import Background from "../../../../shared/Background/Background";
import "./About.scss";
import BenefitItem from "../../../../shared/BenefitItem/BenefitItem";
import { about } from "../../../../../services/Url";

function About() {
  return (
    <Background className="bg-about" src={about} alt="about banner">
      <div className="about">
        <div className="about-content">
          <div className="part-1">
            <h3>Monotonectally deploy seamless data and resource maximizing systems. </h3>
            <h4>Great for individuals and small families up to 4 members.</h4>
            <p>
              A strong, up-to-date, employee benefits health insurance program is vital for attracting and retaining good employees. It takes diligence, creativity and attention to detail to ensure you are getting the best “bang for your buck” each and every year.
            </p>
          </div>
          <div className="list part-2">
            <BenefitItem
              id={0}
              title="Comprehensive Insurance"
              describe="Dynamically repurpose e-business users rather than granular products."
            />
            <BenefitItem
              id={1}
              title="Support is just a call away"
              describe="Rapidiously customize value-added platforms compliant action items."
            />
            <BenefitItem
              id={2}
              title="Say goodbye to paperwork."
              describe="Globally deliver economically sound communities relationships."
            />
          </div>
        </div>
      </div>
    </Background>
  );

}

export default About;