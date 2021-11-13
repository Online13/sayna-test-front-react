import "./Section.scss";

function Section({ children }) {
  return (
    <section className="section">
      {children}
    </section>
  );
}

export default Section;