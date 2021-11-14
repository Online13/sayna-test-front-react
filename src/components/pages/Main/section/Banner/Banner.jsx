import "./Banner.scss";
import SubSection from "./../../../../layouts/SubSection/SubSection";
import Button from "./../../../../shared/Button/Button";
import Background from "../../../../shared/Background/Background";
import { banner } from "../../../../../services/Url";

function Banner() {
  return (
    <Background className="bg-banner" src={banner} alt={"banner for this site"}>
      <div className="banner">
        <div className="content">
          <span className="greeting">Hello, We are Fincorp</span>
          <h1>Insurance <br /> made easy.</h1>
          <Button background="linear-gradient(-225deg, #EDA384, #F40F7C)" color="white">
            Get your free Quote
          </Button>
        </div>
        <SubSection className="banner-sub-section">
          <div className="content">
            <h2 className="title"> A new take on insurance </h2>
            <p className="description">Great for individuals and business</p>
          </div>
        </SubSection>
      </div>
    </Background>
  );
}

export default Banner;