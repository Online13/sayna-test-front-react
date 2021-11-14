import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import Section from "../../layouts/Section/Section";
import Proposal from "../../shared/Proposal/Proposal";
import "./Main.scss";
import About from "./section/About/About";
import Banner from "./section/Banner/Banner";
import Claims from "./section/Claims/Claims";
import Insurance from "./section/Insurance/Insurance";
import Quote from "./section/Quote/Quote";

import proposal1 from "./../../../assets/images/shield-yellow.svg";
import Pricing from "./section/Pricing/Pricing";
import Question from "./section/Question/Question";

function Main() {
  return (
    <main className="main">
      <Header />
      <div className="container">
        <Section><Banner /></Section>
        <Section><About /></Section>
        <Section><Insurance /></Section>
        <Section><Claims /></Section>
        <Section><Quote /></Section>
        <Section>
          <Proposal 
            alt="proposal satisfaction guarantee"
            src={proposal1}
            title=" 100% Satisfaction Guarantee"
            description="We offer no questions asked refund policy for 14 days from the policy date."
            link="/"
          />
        </Section>
        <Section><Pricing /></Section>
        <Section><Question /></Section>
      </div>
      <Footer />
    </main>
  );
}

export default Main;