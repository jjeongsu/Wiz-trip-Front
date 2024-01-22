function SlideNextIcon({ width, height, fill }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
    >
      <path
        d="M24 26.2375L17.8192 20.5L24 14.7625L22.0972 13L14 20.5L22.0972 28L24 26.2375Z"
        fill="#454C53"
      />
      <circle cx="20" cy="20" r="19" stroke="#454C53" strokeWidth="2" />
    </svg>
  );
}

export default SlideNextIcon;
