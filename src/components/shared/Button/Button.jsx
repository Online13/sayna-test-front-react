import "./Button.scss";

function Button({ color, children, background }) {
  return (
    <button className="btn" style={{ color,  background }}>
      {children}
    </button>
  )
}

export default Button;