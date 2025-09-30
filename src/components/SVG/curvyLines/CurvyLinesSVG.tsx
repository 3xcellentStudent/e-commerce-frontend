interface Props {
  className?: string
}

export default function CurvyLinesSVG({className}: Props){
  return(
    <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 1422 800">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
          <stop stopColor="hsl(206, 75%, 49%)" stopOpacity="1" offset="0%"/>
          <stop stopColor="hsl(331, 90%, 56%)" stopOpacity="1" offset="100%"/>
        </linearGradient>
      </defs>
      <g strokeWidth={2} className="stroke-light-warm" fill="none" strokeLinecap="round">
        <path d="M 0 572 Q 355.5 -100 711 400 Q 1066.5 900 1422 572" opacity="0.76" />
        <path d="M 0 550 Q 355.5 -100 711 400 Q 1066.5 900 1422 550" opacity="0.18" />
        <path d="M 0 528 Q 355.5 -100 711 400 Q 1066.5 900 1422 528" opacity="0.97" />
        <path d="M 0 506 Q 355.5 -100 711 400 Q 1066.5 900 1422 506" opacity="0.28" />
        <path d="M 0 484 Q 355.5 -100 711 400 Q 1066.5 900 1422 484" opacity="0.22" />
        <path d="M 0 462 Q 355.5 -100 711 400 Q 1066.5 900 1422 462" opacity="0.74" />
        <path d="M 0 440 Q 355.5 -100 711 400 Q 1066.5 900 1422 440" opacity="0.52" />
        <path d="M 0 418 Q 355.5 -100 711 400 Q 1066.5 900 1422 418" opacity="0.94" />
        <path d="M 0 396 Q 355.5 -100 711 400 Q 1066.5 900 1422 396" opacity="0.87" />
        <path d="M 0 374 Q 355.5 -100 711 400 Q 1066.5 900 1422 374" opacity="0.79" />
        <path d="M 0 352 Q 355.5 -100 711 400 Q 1066.5 900 1422 352" opacity="0.90" />
        <path d="M 0 330 Q 355.5 -100 711 400 Q 1066.5 900 1422 330" opacity="0.85" />
        <path d="M 0 308 Q 355.5 -100 711 400 Q 1066.5 900 1422 308" opacity="0.51" />
        <path d="M 0 286 Q 355.5 -100 711 400 Q 1066.5 900 1422 286" opacity="0.20" />
        <path d="M 0 264 Q 355.5 -100 711 400 Q 1066.5 900 1422 264" opacity="0.88" />
        <path d="M 0 242 Q 355.5 -100 711 400 Q 1066.5 900 1422 242" opacity="0.08" />
        <path d="M 0 220 Q 355.5 -100 711 400 Q 1066.5 900 1422 220" opacity="0.25" />
        <path d="M 0 198 Q 355.5 -100 711 400 Q 1066.5 900 1422 198" opacity="0.78" />
        <path d="M 0 176 Q 355.5 -100 711 400 Q 1066.5 900 1422 176" opacity="0.88" />
        <path d="M 0 154 Q 355.5 -100 711 400 Q 1066.5 900 1422 154" opacity="0.74" />
        <path d="M 0 132 Q 355.5 -100 711 400 Q 1066.5 900 1422 132" opacity="0.10" />
        <path d="M 0 110 Q 355.5 -100 711 400 Q 1066.5 900 1422 110" opacity="0.51" />
        <path d="M 0 88 Q 355.5 -100 711 400 Q 1066.5 900 1422 88" opacity="0.56" />
        <path d="M 0 66 Q 355.5 -100 711 400 Q 1066.5 900 1422 66" opacity="0.48" />
        <path d="M 0 44 Q 355.5 -100 711 400 Q 1066.5 900 1422 44" opacity="0.59" />
      </g>
    </svg>

    // <svg className={className} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="335 100 200 500">
    //   <defs>
    //     <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="oooscillate-grad">
    //       <stop stopColor="hsl(206, 75%, 49%)" stopOpacity="1" offset="0%"></stop>
    //       <stop stopColor="hsl(331, 90%, 56%)" stopOpacity="1" offset="100%"></stop>
    //     </linearGradient>
    //   </defs>
    //   <g strokeWidth="2" stroke="url(#oooscillate-grad)" fill="none" strokeLinecap="round">
    //     <path d="M 0 1056 Q 200 -80 400 400 Q 600 880 800 1056"></path>
    //     <path d="M 0 1023 Q 200 -80 400 400 Q 600 880 800 1023"></path>
    //     <path d="M 0 990 Q 200 -80 400 400 Q 600 880 800 990"></path>
    //     <path d="M 0 957 Q 200 -80 400 400 Q 600 880 800 957"></path>
    //     <path d="M 0 924 Q 200 -80 400 400 Q 600 880 800 924"></path>
    //     <path d="M 0 891 Q 200 -80 400 400 Q 600 880 800 891"></path>
    //     <path d="M 0 858 Q 200 -80 400 400 Q 600 880 800 858"></path>
    //     <path d="M 0 825 Q 200 -80 400 400 Q 600 880 800 825"></path>
    //     <path d="M 0 792 Q 200 -80 400 400 Q 600 880 800 792"></path>
    //     <path d="M 0 759 Q 200 -80 400 400 Q 600 880 800 759"></path>
    //     <path d="M 0 726 Q 200 -80 400 400 Q 600 880 800 726"></path>
    //     <path d="M 0 693 Q 200 -80 400 400 Q 600 880 800 693"></path>
    //     <path d="M 0 660 Q 200 -80 400 400 Q 600 880 800 660"></path>
    //     <path d="M 0 627 Q 200 -80 400 400 Q 600 880 800 627"></path>
    //     <path d="M 0 594 Q 200 -80 400 400 Q 600 880 800 594"></path>
    //     <path d="M 0 561 Q 200 -80 400 400 Q 600 880 800 561"></path>
    //     <path d="M 0 528 Q 200 -80 400 400 Q 600 880 800 528"></path>
    //     <path d="M 0 495 Q 200 -80 400 400 Q 600 880 800 495"></path>
    //     <path d="M 0 462 Q 200 -80 400 400 Q 600 880 800 462"></path>
    //     <path d="M 0 429 Q 200 -80 400 400 Q 600 880 800 429"></path>
    //     <path d="M 0 396 Q 200 -80 400 400 Q 600 880 800 396"></path>
    //     <path d="M 0 363 Q 200 -80 400 400 Q 600 880 800 363"></path>
    //     <path d="M 0 330 Q 200 -80 400 400 Q 600 880 800 330"></path>
    //     <path d="M 0 297 Q 200 -80 400 400 Q 600 880 800 297"></path>
    //     <path d="M 0 264 Q 200 -80 400 400 Q 600 880 800 264"></path>
    //     <path d="M 0 231 Q 200 -80 400 400 Q 600 880 800 231"></path>
    //     <path d="M 0 198 Q 200 -80 400 400 Q 600 880 800 198"></path>
    //     <path d="M 0 165 Q 200 -80 400 400 Q 600 880 800 165"></path>
    //     <path d="M 0 132 Q 200 -80 400 400 Q 600 880 800 132"></path>
    //     <path d="M 0 99 Q 200 -80 400 400 Q 600 880 800 99"></path>
    //     <path d="M 0 66 Q 200 -80 400 400 Q 600 880 800 66"></path>
    //   </g>
    // </svg>
  )
}