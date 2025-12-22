interface Props {
  fill: string;
  stroke: string;
  iconSize: number;
  strokeWidth: number;
  svgClass?: string;
}

export default function PlusSVG({fill, stroke, iconSize, strokeWidth, svgClass}: Props){

  return(
    <svg className={`${fill} ${stroke} ${svgClass}`} width={iconSize} height={iconSize} 
    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeWidth={strokeWidth}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path>
      </g>
    </svg>
  )
}