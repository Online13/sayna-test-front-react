import { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

function Accordion({ list }) {

  const [current,setCurrent] = useState(0);

  return (
    <div className="accordion">
      {list.map((item, id) => {
        return (<AccordionItem
          id={id}
          key={`Accordion-${id}`}
          current={current}
          updateCurrent={setCurrent}
          pclose={item.pclose}
          title={item.title}
        >
          {item.content}
        </AccordionItem>);
      })}
    </div>
  );
}

export default Accordion;