import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">FinCorp</h1>
        <nav>
          <Link to="/">For you {'&'} family</Link>
          <Link to="/">For Business</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;