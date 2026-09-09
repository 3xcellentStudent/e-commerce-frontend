'use client'

// import { IconNavigationType } from "@/data/navmenu/data-navmenu";
import Link from "next/link";
import { useRef } from "react";

interface IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

export default function IconNavigation({badge, Icon, route}: {badge: number, route: string, Icon: React.ReactNode}){

  const iconRef = useRef<IconHandle | null>(null);

  return(
    <Link 
      className="relative z-10"
      href={route}
      onClick={() => iconRef.current?.startAnimation()}
      onPointerEnter={() => iconRef.current?.startAnimation()}
      onPointerLeave={() => iconRef.current?.stopAnimation()}
    >

      {Icon}
      <span className="absolute w-2 h-2 bg-red-500 rounded-full text-white bottom-1 right-1 z-1 text-sm">{badge}</span>
    </Link>
  )
}