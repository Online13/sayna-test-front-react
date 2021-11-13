import Icon from "../Icon/Icon";
import "./SquareCard.scss";

function SquareCard({ bg, alt, src, title, content }) {
  return (
    <div className="square-card">
      <div className="square-image">
        <div className="image-content">
          <Icon 
            alt={alt}
            backgroundColor={bg}
            height="100px"
            width="100px"
            src={src}
          />
        </div>
      </div>
      <div className="square-content">
        <div className="title">{title}</div>
        <p className="description">{content}</p>
      </div>
    </div>
  );
}

export default SquareCard;