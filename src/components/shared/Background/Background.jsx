import "./Background.scss";

/**
 * 
 * @param {Object} props
 * @param {string} src
 * @param {boolean} top 
 * @param {string} alt
 * @param {string} className
 */
function Background({ className, top=false, src, alt, children }) {
  return (<>
    <img className={`background ${className} ${top ? "front" : "back"}`} src={src} alt={alt} />
    <div className="bg-content">
      {children}
    </div>
  </>);
}

export default Background;