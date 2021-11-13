function Icon({ logo, size, type }) {
  return (
    <svg width={size} height={size} >
      <use href={`${logo}#${type}`} />
    </svg>
  );
}

export default Icon;