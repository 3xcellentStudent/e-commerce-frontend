'use client'

import Link from "next/link";
import { useRef } from "react";
import type { IconHandle } from "@animateicons/react";
import type { AnimatedIconComponent } from "@/components/features/navigation/data-navmenu";
import styles from "./styles.module.scss"

interface IconNavLinkProps {
  badge?: boolean;
  route: string;
  Icon: AnimatedIconComponent;
  size?: number;
}

const NavigationLink = ({ badge, Icon, route, size }: IconNavLinkProps) => {
  const iconRef = useRef<IconHandle | null>(null);

  // ${route === pathname ? "bg-foreground text-background" : "bg-background text-foreground"}
  return(
    <Link
      className={`
        relative z-50 items-center justify-center rounded-full ${styles.link} 
      `}
      href={route}
      onPointerEnter={() => iconRef.current?.startAnimation()}
      onPointerLeave={() => iconRef.current?.stopAnimation()}
      onTouchStart={() => iconRef.current?.startAnimation()}
    >
      <Icon ref={iconRef} size={size && size || 24} className={`pointer-events-none`} />
      {badge && (
        <span
          className={`
            ${styles.badge} absolute pointer-events-none w-1.75 h-1.75 bg-accent rounded-full text-white top-1.25 right-1.25 z-1 text-sm
          `}
        />
      )}
    </Link>
  );
}

export default NavigationLink;