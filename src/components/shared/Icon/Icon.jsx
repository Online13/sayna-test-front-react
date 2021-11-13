import "./Icon.scss";

function Icon({ width, height, src, alt,  backgroundColor }) {
  return (
    <div className="icon" style={{ width, height, backgroundColor }}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Icon;