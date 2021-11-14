import "./Banner.scss";
import SubSection from "./../../../../layouts/SubSection/SubSection";
import Button from "./../../../../shared/Button/Button";
import Background from "../../../../shared/Background/Background";
import { useEffect, useRef } from "react";
import observe from "../../../../../assets/scripts/observe";
import { banner } from "../../../../../services/Url";

function Banner() {

  const tagbanner = useRef();
  const top= useRef();

  useEffect(() => {
    observe({
      target: tagbanner.current,
      threshold: 0.5,
      callback: e => {
        if (e.intersectionRatio > 0.5) {
          tagbanner.current.classList.add(`appear`);
        } else {
          tagbanner.current.classList.remove(`appear`);
        }
      }
    });
    observe({
      target: top.current,
      threshold: 0.5,
      callback: e => {
        if (e.intersectionRatio > 0.5) {
          top.current.classList.add(`appear`);
        } else {
          top.current.classList.remove(`appear`);
        }
      }
    });
  },[]);

  return (
    <Background className="bg-banner" src={banner} alt={"banner for this site"}>
      <div className="banner">
        <div className="tcontent content" ref={tagbanner}>
          <span className="greeting">Hello, We are Fincorp</span>
          <h1>Insurance <br /> made easy.</h1>
          <Button background="linear-gradient(-225deg, #EDA384, #F40F7C)" color="white">
            Get your free Quote
          </Button>
        </div>
        <SubSection className="banner-sub-section">
          <div className="top content" ref={top}>
            <h2 className="title"> A new take on insurance </h2>
            <p className="description">Great for individuals and business</p>
          </div>
        </SubSection>
      </div>
    </Background>
  );
}

export default Banner;