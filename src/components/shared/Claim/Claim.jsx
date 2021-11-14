import "./Claim.scss";

function Claim({ id, title, content, color, backgroundColor }) {
  return (
    <div className="claim">
      <div className="number" style={{ color, backgroundColor }}>
        {id + 1}
      </div>
      <div className="claim-content">
        <p className="title">{title}</p>
        <p className="description">{content}</p>
      </div>
    </div>
  )
}

export default Claim;