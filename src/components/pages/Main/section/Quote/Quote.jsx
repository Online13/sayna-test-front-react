import { useEffect, useRef } from "react";
import observe from "../../../../../assets/scripts/observe";
import { bg3, quote, someone } from "../../../../../services/Url";
import Background from "../../../../shared/Background/Background";
import "./Quote.scss";

function Quote() {

  const tagquote = useRef();

  useEffect(() => {
    observe({
      target: tagquote.current,
      threshold: 0.5,
      callback: e => {
        if (e.intersectionRatio > 0.5) {
          tagquote.current.classList.add(`appear`);
        } else {
          tagquote.current.classList.remove(`appear`);
        }
      }
    });
  },[]);

  return (
    <Background src={bg3} top={false} alt="background for this witness" className="bg-witness" >
      <Background src={someone} top={false} alt="someone" className="bg-author">
        <div className="quote">
          <div className="quote-content">
            <div className="c"><img src={quote} alt="quote blue" /></div>
            <div className="blockquote" ref={tagquote}>
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