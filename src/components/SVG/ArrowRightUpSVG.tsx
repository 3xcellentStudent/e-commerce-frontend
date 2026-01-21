import styled from "styled-components";

interface Props {
  size: number;
  weight?: number;
  color: string;
  className?: string;
}

const CustomDiv = styled.div<{$size: number}>`
  width: ${({$size}) => $size}px;
  height: ${({$size}) => $size}px;
`

export default function ArrowRightUpSVG({size, color, className, weight}: Props){
  return(
    <CustomDiv $size={size} className={`relative ${className || ""}`}>
      <svg className="absolute w-full h-full top-0 left-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M7 17L17 7M17 7H8M17 7V16" className={color} strokeWidth={weight || 2} strokeLinecap="round" strokeLinejoin="round"></path>
        </g>
      </svg>
    </CustomDiv>
  )
}