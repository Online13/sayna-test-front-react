import "./Question.scss";
import Accordion from "../../../../shared/Accordion/Accordion";
import { useMemo } from "react";
import { bg, proposal2 } from "../../../../../services/Url";
import Proposal from "../../../../shared/Proposal/Proposal";
import Background from "../../../../shared/Background/Background";

function Question() {

  const faq = useMemo(() => {
    return [
      {
        pclose: false,
        title: "What are the documents required for claiming?",
        content: "A pre-authorization form is required in case of cashless claims which are to be submitted to the TPA. Other documents might also be required and you should have the knowledge of the required documents."
      },
      {
        pclose: true,
        title: "Which are the network hospitals in your vicinity?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit molestias autem assumenda deserunt quae dolor doloribus, maxime in? Labore quidem facere officia cumque facilis laudantium dolor ad, pariatur doloribus."
      },
      {
        pclose: true,
        title: "Will I get covered for my pre-existing illnesses?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit molestias autem assumenda deserunt quae dolor doloribus, maxime in? Labore quidem facere officia cumque facilis laudantium dolor ad, pariatur doloribus."
      },
      {
        pclose: true,
        title: "Is maternity covered in health insurance policies?",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit molestias autem assumenda deserunt quae dolor doloribus, maxime in? Labore quidem facere officia cumque facilis laudantium dolor ad, pariatur doloribus."
      }
    ];
  },[]);

  return (
    <Background className="bg-question" src={bg} top={false}>
      <div className="question">
        <div className="request">
          <Accordion list={faq} />
          
        </div>
        <Proposal
          alt="proposal satisfaction guarantee"
          src={proposal2}
          title="Insurance made easy"
          description="At fincorp, we are commited to provide top-notch services to our customers."
          link="/"
        />
      </div>
    </Background>
  );
}

export default Question;