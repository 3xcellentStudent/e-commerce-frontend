interface Props {
  className: string;
  color?: string;
}

export default function CurvedBackgroundSVG({className, color}: Props){

  return(
    <svg viewBox="0 0 540 540" className={className}>
      <g>
        <path d="M 0,0 C 0,162 108,162 216,162 M 216,162 C 324,162 378,162 432,324 M 432,324 C 432,324 459,405 540,405 M 0,0 L 0,0 540,405 L 540,405 540,0 Z"></path>
      </g>
    </svg>
  )
}