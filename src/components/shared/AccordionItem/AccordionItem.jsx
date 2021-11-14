import { useCallback, useEffect, useRef, useState } from "react";
import "./AccordionItem.scss";
import arrow from "./../../../assets/images/up-arrow-svgrepo-com.svg";

function AccordionItem({ id, current, updateCurrent, pclose = true, title, children }) {

  const content = useRef();
  const p = useRef();

  const [close, setClose] = useState(pclose);
  const handleClick = useCallback(() => {
    setClose(s => !s);
    updateCurrent(id);
  }, [updateCurrent, id]);

  const size = useCallback(() => {
    return p.current.getBoundingClientRect().height;
  }, []);

  useEffect(() => {
    setClose(current !== id);
  }, [current , id]);

  useEffect(() => {
    if (!close) content.current.style.height = `${size()}px`;
    else content.current.style.height = `0`;
    setTimeout(() => {
      if (!close) content.current.classList.add('show');
      else content.current.classList.remove('show');
    }, 100);
  }, [close, size]);

  return (
    <div className="accordion-item">
      <h2 className="accordion-I" style={{ borderBottom: close ? "" : "1px solid rgba(192, 192, 192, 0.432)" }}>
        <button onClick={handleClick}>
          <span>{title}</span>
          <img style={{ transform: close ? "rotate(0)" : "rotate(180deg)" }} src={arrow} alt="arrow of accordion" />
        </button>
      </h2>
      <div className="accordion-content" ref={content}>
        <p ref={p} className="description">
          {children}
        </p>
      </div>
    </div>
  );
}

export default AccordionItem;