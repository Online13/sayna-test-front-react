import Background from "../../../../shared/Background/Background";
import "./Quote.scss";
import bg from "./../../../../../assets/images/bg-image3.png";
import someone from "./../../../../../assets/images/testi-img.png";
import quote from "./../../../../../assets/images/quote.png";

function Quote() {
  return (
    <Background src={bg} top={false} alt="background for this witness" className="bg-witness" >
      <Background src={someone} top={false} alt="someone" className="bg-author">
        <div className="quote">
          <div className="quote-content">
            <div className="c"><img src={quote} alt="quote blue" /></div>
            <div className="blockquote">
              I need to understand what’s going on – it’s my health and I want to feel secure in it. With my previous health insurance, I didn’t know how any of it worked.
            </div>
            <div className="authors">
              <span className="name">Matthew Young</span>
              <span className="status">Legal Consultant, United States</span>
            </div>
          </div>
        </div>
      </Background>
    </Background>
  );
}

export default Quote;