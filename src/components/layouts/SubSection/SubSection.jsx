import "./SubSection.scss";

function SubSection({ className, children }) {
  return (
    <div className={`sub-section ${className}`}>
      {children}
    </div>
  );
}

export default SubSection;