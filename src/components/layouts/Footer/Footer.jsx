import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid row">
        <div className="col-12 col-lg-3">
          <h3>ADDRESS</h3>
          <p>
            <span>400-401 West Georgia Street</span>
            <span>Vancouver, BC, Canada, V6B 5A1</span>
            <span>+1 (123) 456 7890</span>
            <span>sales@insurance.com</span>
          </p>
        </div>
        <div className="col-12 col-lg-3">
          <h3>FOLLOW US</h3>
          <div className="follow">
            <Link to="#">Twitter</Link>
            <Link to="#">Facebook</Link>
            <Link to="#">LinkedIn</Link>
            <Link to="#">Instagram</Link>
          </div>
        </div>
        <div className="col-12 col-lg-3">
          <h3>ABOUT US</h3>
          <p>
            Compellingly myocardinate market-driven infrastructures before team driven manufactured products. Monotonectally exploit tactical markets vis-a-vis excellent deliverables.
          </p>
        </div>
      </div>
      <p>Copyright © 2019. Insurance LLC</p>
    </footer>
  );
}

export default Footer;