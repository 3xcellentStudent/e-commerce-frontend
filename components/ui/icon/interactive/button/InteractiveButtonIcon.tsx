import { AnimatedIconComponent } from "@/types/icons/lib/animateicons/interactive/icon.props";
import { IconHandle } from "@animateicons/react";
import { useRef } from "react"

interface IconNavLinkProps {
  Icon: AnimatedIconComponent;
  size?: number;
  styles: {icon?: string, button?: string};
  action: () => void
  metadata: string;
}

export default function InteractiveButtonIcon({Icon, size, styles, action, metadata}: IconNavLinkProps){

  const iconRef = useRef<IconHandle | null>(null);

  return(
    // <button
    //   onPointerEnter={() => iconRef.current?.startAnimation()}
    //   onPointerLeave={() => iconRef.current?.stopAnimation()}
    //   onTouchStart={() => iconRef.current?.startAnimation()}
    // >
    <button type="button" className={`flex items-start ${styles?.button}`} aria-label={metadata}
      onPointerEnter={() => iconRef.current?.startAnimation()}
      onPointerLeave={() => iconRef.current?.stopAnimation()}
      onTouchStart={() => iconRef.current?.startAnimation()}
    >
      <Icon ref={iconRef} size={size} className={`pointer-events-none ${styles?.icon}`} 
      />
    </button>
    // </button>
  )
}