import Background from "../../../../shared/Background/Background";
import "./Pricing.scss";
import PriceCard from "../../../../shared/PriceCard/PriceCard";
import { bgPricing } from "../../../../../services/Url";

function Pricing() {
  return (
    <Background className="bg-pricing" src={bgPricing}>
      <div className="pricing">
        <div className="pricing-title">
          <h2 className="title">Honest Pricing</h2>
          <p className="description">Simple {'&'} honest pricing. No hidden fees. </p>
        </div>
        <div className="pricing-content">
          <PriceCard
            type="basic"
            price={9}
            options={[
              "Rapidiously strategize value",
              "Progressively visualize leadership ",
              "Equity invested supply chains. ",
            ]}
          />
          <PriceCard
            type="professional"
            price={19}
            options={[
              "Rapidiously strategize value",
              "Progressively visualize leadership ",
              "Equity invested supply chains",
              "Proactively leverage",
            ]}
            active={true}
          />
          <PriceCard
            type="premium"
            price={49}
            options={[
              "Rapidiously strategize value",
              "Progressively visualize leadership ",
              "Equity invested supply chains. ",
            ]}
          />
        </div>
        <div className="pricing-alert">
          <p className="description">*Prices shown per month if paid annually</p>
        </div>
      </div>
    </Background>
  );
}

export default Pricing;