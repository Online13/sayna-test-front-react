import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import Section from "../../layouts/Section/Section";
import "./Main.scss";
import About from "./section/About/About";
import Banner from "./section/Banner/Banner";
import Claims from "./section/Claims/Claims";
import Insurance from "./section/Insurance/Insurance";

function Main() {
  return (
    <main className="main">
      <Header />
      <div className="container">
        <Section><Banner /></Section>
        <Section><About /></Section>
        <Section><Insurance /></Section>
        <Section><Claims /></Section>
      </div>
      <Footer />
    </main>
  );
}

export default Main;