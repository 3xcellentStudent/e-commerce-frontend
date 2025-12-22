interface Props {
  mode: "filled" | "half" | "emtpy";
  color: string;
  iconSize: "large" | "medium" | "small" | number
}

export default function DoubleSidesDropSVG({mode, color, iconSize}: Props){

  const filling = mode === "filled" ? "fill-" + color : "fill-white";
  const size = iconSize === "large" ? "h-[42px] w-[36px]" : iconSize === "medium" ? "h-[30px] w-[24px]" : "h-[24px] w-[18px]";

  return(
    <svg  className={`${size} stroke-${color}`} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 560 560" xmlSpace="preserve" strokeWidth="40">
      <g id="SVGRepo_iconCarrier">
        <path className={filling} 
        d="M272.431,6.816C268.072,2.458,262.164,0.008,256,0.002c-0.008,0-0.017-0.002-0.026-0.002 c-6.173,0-12.093,2.453-16.455,6.817c-6.613,6.614-161.955,163.854-161.955,326.783C77.563,431.97,157.598,512,255.975,512 c0.008,0,0.017,0,0.025,0c98.392-0.014,178.437-80.038,178.437-178.399C434.437,170.668,279.046,13.428,272.431,6.816z"></path>
        {
          mode === "filled" || mode === "half" ? 
          <path className={`fill-${color}`} d="M255.975,512c0.008,0,0.017,0,0.025,0V0.002c-0.008,0-0.017-0.002-0.026-0.002 c-6.173,0.002-12.093,2.453-16.455,6.817c-6.613,6.614-161.955,163.854-161.955,326.783C77.563,431.97,157.598,512,255.975,512z"></path> : <></>
        }
      </g>
    </svg>
  )
}